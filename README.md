# Assets and Images

Place your images in `src/assets/` and import them into components:

```jsx
import myPhoto from '@/assets/profile.jpg';

export default function AboutCard() {
  return (
    <img src={myPhoto} alt="Profile" className="w-40 h-40 rounded-full object-cover" />
  );
}
```

Examples:
- Hero avatar: add `src/assets/avatar.png` and use `<img>` where the "HH" placeholder is.
- Project thumbnails: add images to `src/assets/projects/` and add an `imageUrl` on each project card.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
