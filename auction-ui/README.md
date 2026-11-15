# BidNova Auction UI

A React + Vite auction marketplace prototype with a home page, six sample auctions, and React Router auction detail routes.

## Project structure

The React UI follows atomic design. Each React component lives in its own directory with its implementation, SCSS, and test beside each other:

- `src/components/atoms` contains small primitives such as `Icon` and `RouteLink`.
- `src/components/molecules` contains reusable UI combinations such as `AuctionCard`, `Header`, and `ThemePicker`.
- `src/pages` contains the home and auction detail page components.
- `src/data` contains the sample auction data and shared display helpers.
- `src/app` contains the app shell and route selection.
- `src/styles/global.scss` contains shared theme variables and base styles; component styles are kept in each component's `.scss` file.

Example: `src/components/atoms/Icon/Icon.tsx`, `Icon.scss`, and `Icon.test.tsx`.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. The theme selector in the lower-right corner switches between The Edit, After Hours, and Open House. Theme selection is saved in the browser.

Auction detail pages use `/auction/<auction-id>`, for example `/auction/vintage-camera`.

## Code quality

Run `npm run lint` to check the React and TypeScript source, or `npm run lint:fix` to apply safe ESLint fixes. Run `npm run format` to format the project with Prettier. When the repository is open in VS Code, the recommended Prettier and ESLint extensions format supported files and apply ESLint fixes on save.

Run `npm test` for the component tests. Sass is installed as a Vite preprocessor, and SCSS imports are compiled as part of the normal development server and production build.
