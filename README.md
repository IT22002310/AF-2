# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# CountryScope

A React application that uses the REST Countries API to display information about countries around the world.

## Features

- View a list of all countries with basic information
- Search for countries by name
- Filter countries by region or language
- View detailed information about a specific country
- Toggle between light and dark mode
- User authentication (login/register)
- Save favorite countries (for logged-in users)
- Responsive design for all device sizes

## API Integration

This application integrates with the REST Countries API using the following endpoints:

1. `GET /all` - Fetches all countries
2. `GET /name/{name}` - Searches for countries by name
3. `GET /region/{region}` - Filters countries by region
4. `GET /alpha/{code}` - Gets detailed information about a specific country

## Technology Stack

- **Frontend**: React
- **Language**: JavaScript
- **CSS Framework**: Tailwind CSS
- **State Management**: React Hooks (useState, useEffect, useContext)
- **Routing**: React Router
- **Authentication**: Client-side authentication with localStorage (for demo purposes)
- **Testing**: Jest and React Testing Library

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/your-username/countries-explorer.git
   cd countries-explorer
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm start
   # or
   yarn start
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Testing

Run the tests with:

\`\`\`bash
npm test
# or
yarn test
\`\`\`

## Project Structure

\`\`\`
AF-2/
├── public/              # Static assets
├── src/                 # Source files
│   ├── components/      # Reusable components
│   │   ├── CountryCard.jsx
│   │   ├── FavoriteButton.jsx
│   │   ├── LanguageFilter.jsx
│   │   ├── Navbar.jsx
│   │   ├── RegionFilter.jsx
│   │   ├── SearchBar.jsx
│   │   └── ThemeProvider.jsx
│   ├── pages/           # Page components
│   │   ├── CountryDetail.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── Profile.jsx
│   ├── tests/           # Test files
│   ├── App.jsx          # Main App component
│   ├── index.jsx        # Entry point
│   └── index.css        # Global styles
└── README.md            # Project documentation
\`\`\`

## Challenges and Solutions

### Challenge 1: API Rate Limiting

**Problem**: The REST Countries API has rate limiting which could affect the application during high traffic.

**Solution**: Implemented caching of API responses using React state and localStorage to reduce the number of API calls.

### Challenge 2: Performance with Large Data Sets

**Problem**: Rendering a large list of countries could impact performance.

**Solution**: Implemented efficient filtering on the client side to optimize performance.

### Challenge 3: User Authentication

**Problem**: Implementing secure authentication without a backend.

**Solution**: For demonstration purposes, implemented client-side authentication using localStorage. In a production environment, this would be replaced with a proper backend authentication system.

## License

This project is licensed under the MIT License.

## URL of the Hosted Application
https://af-2-production-584a.up.railway.app/