## Project Structure

The project is structured as follows:

```
src
├── App.css
├── App.tsx (routes)
├── main.tsx
├── assets
│   ├── css
│   │   ├── fonts.css
│   │   ├── index.css
│   │   └── ...files.css (map, slider, etc.)
│   ├── images
│   │   ├── common
│   │   ├── pages
│   │   └── ...directories (dots, blobs, etc.)
│   └── svgs
│       ├── icons
│       │   ├── Close.tsx
│       │   ├── LoadingSpinner.tsx
│       │   └── ...icons (trash, check, etc.)
│       └── ...directories or files.tsx
├── components
│   ├── common
│   │   └── ...directories or files.tsx (socials, cards, etc.)
│   ├── inputs
│   │   ├── Checkbox.tsx
│   │   ├── Input.tsx
│   │   ├── Radio.tsx
│   │   └── Select.tsx
│   ├── interactive
│   │   └── Button.tsx
│   ├── sections
│   │   └── directories or files.tsx (contact, faq, etc.)
│   ├── template
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Main.tsx
│   │   └── Modal.tsx
│   └── utils
│       └── RequiresAuthentication.tsx
├── hooks
│   ├── queries (queries and mutations)
│   │   ├── _queryKeys.ts
│   │   └── ...directories or files.ts (user, team, etc.)
│   └── utils
│       ├── title.ts
│       └── ...files.ts
├── constants
│   └── ...constants.ts (const SCREAMING_SNAKE_CASE)
├── pages
│   ├── NotFound.tsx
│   ├── home
│   │   ├── _hooks.tsx
│   │   ├── _index.tsx
│   │   └── ...OtherComponents.tsx
│   └── ...directories or files.tsx (about, pricing, etc.)
├── types
│   ├── ...files.ts
│   └── utils
│       ├── components.tsx
│       └── laravel.ts
└── utils
    ├── functions.ts
    └── middleware.ts
```

## Project dependencies

The project is using the following dependencies:
react
typescript
axios
react-router-dom
@tanstack/react-query
tailwindcss
clsx
tailwind-merge
sonner
prettier - prettier-plugin-tailwindcss

"react": "^19.0.0"
React is the library used to create the user interface.

"typescript": "~5.7.2" -D
Typescript is used for making the project type safe.

"react-router-dom": "^7.1.5"
React-router-dom is used to handle the routing of the application.

"axios": "^1.7.9"
Axios is used to make http requests.

"@tanstack/react-query": "^5.66.0"
TanstackQuery is used as the asynchronous state management library.

"@tanstack/react-query-devtools": "^5.66.0" -D
TanstackQuery devtools is used to debug the queries.

"react-hook-form": "^7.54.2"
React-hook-form is used for the form validation.

"zod": "^3.24.2" -D
Zod is a typescript library for data validation.

"@hookform/resolvers": "^4.1.3"
Hookform resolvers is used to link the form validation with the zod schema.

"react-select": "^5.10.1"
React-select is used for the select component.

"tailwindcss": "^4.0.6" -D
Tailwindcss v4 is used to style the project. No tailwind.config.js file is provided, as it is not necessary. All the configuration is done in the App.css file.

"clsx": "^2.1.1" -D
Clsx is used to display conditional classes.

"tailwind-merge": "^3.0.1" -D
Tailwind-merge is used to merge the tailwind classes.

"sonner": "^1.7.4"
Sonner is used to create the toast notifications.

"prettier": "^3.5.0" -D
Prettier is used to format the code.

"prettier-plugin-tailwindcss": "^0.6.11" -D
Prettier-plugin-tailwindcss is used to format the tailwind classes.

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
