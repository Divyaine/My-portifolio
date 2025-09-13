import React from "react";

export default function SkillBadge({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 border rounded-xl shadow-sm hover:shadow-md transition bg-white">
      {!!Icon && <Icon className="w-5 h-5 text-indigo-600" />}
      <span className="text-gray-700 font-medium">{label}</span>
    </div>
  );
}
