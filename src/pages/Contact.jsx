import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Star, Check, Zap, Globe, Smartphone, Code } from 'lucide-react';

const pricingTiers = [
  {
    name: "Basic Website",
    price: "$500 - $1,200",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    features: [
      "Responsive Design",
      "Up to 5 Pages",
      "Contact Form",
      "SEO Optimization",
      "Mobile Friendly",
      "1 Month Support"
    ],
    popular: false
  },
  {
    name: "Business Website",
    price: "$1,200 - $3,000",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    features: [
      "Everything in Basic",
      "Up to 15 Pages",
      "E-commerce Integration",
      "CMS Integration",
      "Analytics Setup",
      "3 Months Support",
      "Performance Optimization"
    ],
    popular: true
  },
  {
    name: "Custom Application",
    price: "$3,000+",
    icon: Code,
    color: "from-green-500 to-emerald-500",
    features: [
      "Custom Development",
      "Database Design",
      "API Integration",
      "User Authentication",
      "Admin Dashboard",
      "6 Months Support",
      "Ongoing Maintenance"
    ],
    popular: false
  },
  {
    name: "Mobile App",
    price: "$2,500 - $8,000",
    icon: Smartphone,
    color: "from-orange-500 to-red-500",
    features: [
      "iOS & Android",
      "Custom UI/UX",
      "Push Notifications",
      "Offline Functionality",
      "App Store Deployment",
      "4 Months Support",
      "Backend Integration"
    ],
    popular: false
  }
];

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muhayimana-divine/",
    icon: "💼",
    color: "from-blue-600 to-blue-700"
  },
  {
    name: "GitHub",
    url: "https://github.com/hntag",
    icon: "🚀",
    color: "from-gray-700 to-gray-900"
  },
  {
    name: "Email",
    url: "mailto:hntaganira06@gmail.com",
    icon: "✉️",
    color: "from-purple-600 to-purple-700"
  }
];

export default function EnhancedContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    features: []
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [selectedTier, setSelectedTier] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    
    // Mouse tracking for interactive effects
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        features: checked 
          ? [...prev.features, value]
          : prev.features.filter(f => f !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleTierSelect = (tier) => {
    setSelectedTier(tier);
    setFormData(prev => ({
      ...prev,
      projectType: tier.name,
      budget: tier.price
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Create email content
    const emailSubject = `New Project Inquiry from ${formData.name}`;
    const emailBody = `
Hi Divine,

I'm interested in working with you on a project. Here are the details:

📋 PROJECT DETAILS:
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone || 'Not provided'}
• Company: ${formData.company || 'Not provided'}

💼 PROJECT INFORMATION:
• Project Type: ${formData.projectType || 'Not specified'}
• Budget Range: ${formData.budget || 'Not specified'}
• Timeline: ${formData.timeline || 'Not specified'}
• Additional Features: ${formData.features.length > 0 ? formData.features.join(', ') : 'None selected'}

💬 MESSAGE:
${formData.message}

---
This message was sent through your portfolio contact form.

Best regards,
${formData.name}
    `;

    try {
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/mblkvvkp', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          features: formData.features.join(', '),
          _subject: emailSubject,
          _replyto: formData.email
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        
        // Create Gmail compose URL
        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=hntaganira06@gmail.com&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        
        // Open Gmail in new tab after short delay
        setTimeout(() => {
          window.open(gmailURL, '_blank');
        }, 1500);
        
        setFormData({
          name: '', email: '', phone: '', company: '', 
          projectType: '', budget: '', timeline: '', message: '', features: []
        });
        setSelectedTier(null);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Interactive cursor glow */}
        <div 
          className="fixed w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
            transform: `translate(${Math.sin(Date.now() / 1000) * 20}px, ${Math.cos(Date.now() / 1000) * 20}px)`
          }}
        />

        {/* Floating particles */}
        {showParticles && [...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce opacity-60"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="mb-6 relative group">
            {/* <img 
              src="/api/placeholder/120/120" 
              alt="Divine Muhayimana" 
              className="w-24 h-24 rounded-full mx-auto border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-2xl group-hover:scale-110 transition-all duration-300"
              onMouseEnter={() => setShowParticles(true)}
              onMouseLeave={() => setShowParticles(false)}
            /> */}
            {/* Status indicator */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center animate-pulse">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Divine Muhayimana
          </h1>
          {/* <p className="text-xl text-gray-300 mb-2">Full-Stack Developer & UI/UX Designer</p> */}
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span>Kigali, Rwanda</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>Available for Projects</span>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className={`mb-16 ${isVisible ? 'animate-slide-up delay-200' : 'opacity-0'}`}>
          <h2 className="text-3xl font-bold text-center mb-8">Choose Your Project Type</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, index) => {
              const IconComponent = tier.icon;
              return (
                <div
                  key={tier.name}
                                      onClick={() => handleTierSelect(tier)}
                    onMouseEnter={() => setShowParticles(true)}
                    onMouseLeave={() => setShowParticles(false)}
                  className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    selectedTier?.name === tier.name
                      ? 'bg-gradient-to-r ' + tier.color + ' shadow-2xl scale-105'
                      : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
                  } ${tier.popular ? 'ring-2 ring-purple-400' : ''}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Star size={12} />
                        POPULAR
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${tier.color} flex items-center justify-center`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{tier.name}</h3>
                    <p className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {tier.price}
                    </p>
                    <ul className="space-y-2 text-sm">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check size={14} className="text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {selectedTier?.name === tier.name && (
                    <div className="absolute inset-0 rounded-2xl border-2 border-white animate-pulse"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className={`lg:col-span-2 ${isVisible ? 'animate-slide-in-left delay-300' : 'opacity-0'}`}>
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Mail className="text-blue-400" />
                Let's Build Something Amazing Together
              </h2>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your Name *"
                      required
                      className={`w-full p-4 bg-white/10 border-2 rounded-xl transition-all duration-300 focus:outline-none placeholder-gray-400 ${
                        focusedField === 'name' 
                          ? 'border-purple-500 bg-white/20 transform scale-105 shadow-lg' 
                          : 'border-white/30 hover:border-white/50'
                      }`}
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your Email *"
                      required
                      className={`w-full p-4 bg-white/10 border-2 rounded-xl transition-all duration-300 focus:outline-none placeholder-gray-400 ${
                        focusedField === 'email' 
                          ? 'border-purple-500 bg-white/20 transform scale-105 shadow-lg' 
                          : 'border-white/30 hover:border-white/50'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full p-4 bg-white/10 border-2 border-white/30 rounded-xl focus:border-purple-500 focus:outline-none transition-all duration-300 placeholder-gray-400"
                  />

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company/Organization"
                    className="w-full p-4 bg-white/10 border-2 border-white/30 rounded-xl focus:border-purple-500 focus:outline-none transition-all duration-300 placeholder-gray-400"
                  />
                </div>

                {selectedTier && (
                  <div className="p-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl border border-purple-500/30">
                    <p className="text-sm text-gray-300">Selected Project Type:</p>
                    <p className="font-bold text-purple-300">{selectedTier.name} - {selectedTier.price}</p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4">
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-white/10 border-2 border-white/30 rounded-xl focus:border-purple-500 focus:outline-none transition-all duration-300 text-white"
                  >
                    <option value="">Select Timeline</option>
                    <option value="1-2 weeks">1-2 weeks</option>
                    <option value="1 month">1 month</option>
                    <option value="2-3 months">2-3 months</option>
                    <option value="3+ months">3+ months</option>
                    <option value="flexible">Flexible</option>
                  </select>

                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="Budget Range"
                    className="w-full p-4 bg-white/10 border-2 border-white/30 rounded-xl focus:border-purple-500 focus:outline-none transition-all duration-300 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">Additional Features Needed:</label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {['SEO Optimization', 'E-commerce', 'User Authentication', 'Payment Integration', 'API Integration', 'Admin Dashboard', 'Real-time Chat', 'Push Notifications', 'Social Media Integration', 'Analytics Dashboard'].map((feature) => (
                      <label key={feature} className="flex items-center gap-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer group">
                        <input
                          type="checkbox"
                          value={feature}
                          checked={formData.features.includes(feature)}
                          onChange={handleInputChange}
                          className="rounded border-gray-300 text-purple-500 focus:ring-purple-500"
                        />
                        <span className="text-sm group-hover:text-purple-300 transition-colors">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell me about your project vision, goals, and any specific requirements..."
                  required
                  rows="5"
                  className={`w-full p-4 bg-white/10 border-2 rounded-xl transition-all duration-300 focus:outline-none resize-none placeholder-gray-400 ${
                    focusedField === 'message' 
                      ? 'border-purple-500 bg-white/20' 
                      : 'border-white/30 hover:border-white/50'
                  }`}
                />

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full py-4 px-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-blue-600 hover:via-purple-600 hover:to-pink-600'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending Your Message...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-3">
                      <span>Send Project Inquiry</span>
                      <Zap size={20} />
                    </span>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="text-center p-4 bg-green-500/20 border border-green-400/50 rounded-xl animate-pulse">
                    <div className="flex items-center justify-center gap-2 text-green-300 font-semibold mb-2">
                      <Check size={20} />
                      Message sent successfully!
                    </div>
                    <p className="text-sm text-green-200">
                      📧 Opening Gmail to compose your message...
                    </p>
                    <p className="text-xs text-green-300 mt-1">
                      I'll respond within 24 hours!
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="text-center p-4 bg-red-500/20 border border-red-400/50 rounded-xl">
                    <span className="text-red-300 font-semibold">❌ Something went wrong. Please try again or contact me directly.</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in-right delay-400' : 'opacity-0'}`}>
            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Phone className="text-green-400" />
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                  <Mail className="text-blue-400" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-400">hntaganira06@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                  <MapPin className="text-green-400" size={20} />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-gray-400">Kigali, Rwanda (GMT+2)</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                  <Clock className="text-purple-400" size={20} />
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-sm text-gray-400">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 bg-gradient-to-r ${social.color} rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                  >
                    <span className="text-xl">{social.icon}</span>
                    <span className="font-medium text-white">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl">
              <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <a 
                  href="/resume.pdf" 
                  download
                  className="w-full p-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium flex items-center justify-center gap-2"
                >
                  📄 Download Resume
                </a>
              </div>
            </div>

            {/* Skills Preview */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl">
              <h3 className="text-xl font-bold mb-4">Core Skills</h3>
              
              <div className="grid grid-cols-2 gap-2">
                {['React', 'Node.js', 'Python', 'UI/UX', 'Mobile'].map((skill, index) => (
                  <div 
                    key={skill}
                    className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg text-center text-sm font-medium border border-blue-500/30 hover:border-purple-500/50 transition-colors"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl">
              <h3 className="text-xl font-bold mb-4">Client Feedback</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-gray-300 italic">
                  "Divine delivered an exceptional website that exceeded our expectations. Professional, responsive, and highly skilled!"
                </p>
                <p className="text-xs text-gray-400">- Recent Client</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-slide-up { animation: slide-up 0.8s ease-out; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
        
        .delay-200 { animation-delay: 0.2s; animation-fill-mode: both; }
        .delay-300 { animation-delay: 0.3s; animation-fill-mode: both; }
        .delay-400 { animation-delay: 0.4s; animation-fill-mode: both; }
      `}</style>
    </div>
  );
}