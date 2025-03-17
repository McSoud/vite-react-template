# React + TypeScript + Vite

## Project Structure

The project is structured as follows:

```
src
├── App.css
├── App.tsx
├── main.tsx
├── components
│   ├── common
│   │   ├── interactive
│   │   │   ├── Button.tsx
│   │   │   └── Link.tsx
│   │   └── other components
│   ├── template
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Main.tsx
│   │   └── Modal.tsx
│   └── utils
│       ├── Laravel.tsx
│       └── RequiresAuthentication.tsx
├── pages
│   ├── NotFound.tsx
│   └── home
│       ├── _hooks.tsx
│       ├── _index.tsx
│       └── ...OtherComponents.tsx
├── types
│   ├── ...otherTypes.ts
│   └── utils
│       ├── components.tsx
│       └── laravel.ts
├── utils
│   ├── functions.ts
│   ├── middleware.ts
│   └── hooks
│       └── title.ts
└── vite.config.ts
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
