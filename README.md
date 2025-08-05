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
├── constants
│   ├── utils
│   │   └── queryKeys.ts
│   └── ...constants.ts (const SCREAMING_SNAKE_CASE)
├── hooks
│   ├── queries (queries and mutations)
│   │   └── ...directories or files.ts (user, team, etc.)
│   ├── utils
│   │   ├── title.ts
│   │   └── ...files.ts
│   └── ...directories or hook.ts for common hooks (auth, posts, etc.)
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
@tanstack/react-router
@tanstack/react-query
tailwindcss
clsx
tailwind-merge
sonner
prettier - prettier-plugin-tailwindcss

"react": "^19.1.1"
React is the library used to create the user interface.

"typescript": "~5.7.3" -D
Typescript is used for making the project type safe.

"@tanstack/react-router": "^1.130.12"
Tanstack-router is used to handle the routing of the application.

"@tanstack/react-router-devtools": "^1.130.13" -D
TanstackQuery devtools is used to debug the router.

"axios": "^1.11.0"
Axios is used to make http requests.

"@tanstack/react-query": "^5.84.1"
TanstackQuery is used as the asynchronous state management library.

"@tanstack/react-query-devtools": "^5.84.1" -D
TanstackQuery devtools is used to debug the queries.

"react-hook-form": "^7.54.2"
React-hook-form is used for the form validation.

"zod": "^3.25.76" -D
Zod is a typescript library for data validation.

"@hookform/resolvers": "^4.1.3"
Hookform resolvers is used to link the form validation with the zod schema.

"react-select": "^5.10.2"
React-select is used for the select component.

"tailwindcss": "^4.1.11" -D
Tailwindcss v4 is used to style the project. No tailwind.config.js file is provided, as it is not necessary. All the configuration is done in the App.css file.

"clsx": "^2.1.1" -D
Clsx is used to display conditional classes.

"tailwind-merge": "^3.3.1" -D
Tailwind-merge is used to merge the tailwind classes.

"sonner": "^2.0.7"
Sonner is used to create the toast notifications.

"prettier": "^3.6.2" -D
Prettier is used to format the code.

"prettier-plugin-tailwindcss": "^0.6.14" -D
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

## Environment variables

The template uses environment variables to configure the application. The following variables are available:

- `VITE_APP_NAME`: The name of the application.
- `VITE_BACKEND_URL`: The URL of the backend API.
- `VITE_MEDIA_URL`: The URL of the media files. (files uploaded outside this url will not be accessible due to CSP).

To use these variables, you can create a `.env` file in the root directory of your project.

## Src directory path

Using "@" in the import path will make the path relative to the src directory.

## Public directory

The public directory is used to store static files such as the favicon, robots.txt, and manifest.json and fonts.

Poppins font is provided as an example in this project.

## Tailwind configuration

Tailwind v4 is used for styling the project. Any custom configuration should be added via the @theme directive in any css file, but preferably in the App.css.

## Router configuration

The tanstack router is configured in the App.tsx file. Define the routes and their components in the createRoute function, then pass them in the array parameter of the rootRoute.addChildren function.

## Query configuration

The default tanstack query is configured in the main.tsx file. The queryClient is created with the default options, and the ReactQueryDevtools component is added to the application.

As for the queryKeys, the keys should be defined in the constants/utils/queryKeys.ts file. Using functions taking parameters and Object.assign for dynamic keys.

## @mcsoud/react-ui configuration

Importing the UI_OPTIONS object from the @mcsoud/react-ui package allows you to configure the default options for the useLaravelQuery hook.

Modal IDs are defined in the types/\_utils.ts file and referenced in the main.tsx file using the ModalsRegistration interface.

## Assets

Assets are stored in the src/assets directory.

The css directory contains the index.css file for the global styles and the fonts.css file for importing the fonts.

The images directory contains the images used in the project. The images should preferably be in the WebP format. Main reason why images aren't in the public directory is to be compiled by Vite so if an image is missing a runtime error will be thrown. Import the image in components and use it inside the src attribute.

The svgs directory contains the SVG files used in the project. Every svg file should be a typesafe React component.

## Components

Components are stored in the src/components directory.

Input components are the components used for all input fields.

Section components are the components used for common page sections.

Interactive components are the buttons, links, clickable elements, etc.

Template components are the components used for layouts and pages.

## Hooks

Common hooks are stored in the src/hooks directory.

Query hooks are the useQuery and useMutation hooks.

## Pages

Pages are stored in the src/pages directory.

Each directory has a main component called \_index.tsx and all other non components files should be prefixed with an underscore. (\_hooks.ts, \_data.ts, \_index.css etc...)

the \_index.tsx component should include the useTitle hook for the document title, an h1 heading (hidden or not) and the Main component with the page id. Direct children of the Main should be sections with id of page followed by the section name (e.g. home-faqs).

Pages who require authentication should call useUser hook and pass true as the parameter.

## Types

Types are stored in the src/types directory.

The \_utils.ts file contains the types used in the project.

Create a new file for each type by it's name.

## Utils

Utils are stored in the src/utils directory.

Middleware.ts is used for the axios middleware.

Functions.ts is used for the functions that are used in multiple files.
