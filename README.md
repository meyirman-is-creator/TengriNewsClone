# Tengrinews Clone

This project is a clone of the existing Tengrinews website, a comprehensive replica that brings the essence of Tengrinews into a new light.

![alt text](<TengriNews - Google Chrome 2024-04-11 05-31-35.gif>)

## Features

- **Article Display:** The web application fetches and displays a list of news articles from the backend, leveraging the Newsapi service for up-to-date content delivery.
- **Detailed Article View:** Users can click on any article to view detailed information, bringing an immersive and informative experience.
- **Pagination:** Implemented pagination controls manage the display of news articles, allowing users to navigate through content seamlessly.
- **Search Functionality:** A robust search feature enables users to find news articles using keywords, ensuring they quickly find the information they need.
- **Sorting Mechanism:** Articles can be sorted by publication date, with the latest news showcased prominently for immediate access to recent events.
- **API Integration:** Utilized a ready-made API service for efficient backend communication.
- **Hosting:** Deployed the web application on Firebase hosting for reliable and scalable access.

## Additional Custom Features

- **Firebase Authentication and Authorization:** Integrated Firebase for authentication and authorization, supporting email/password, Google account, and GitHub account sign-in methods.
- **Interactive Sidebar:** Enhanced user navigation with a sidebar that functions as a slide, using the Swiper slider for a smooth transition effect.
- **Title-based Sorting:** Added functionality to sort articles by title, allowing users to organize content according to their preferences.

## Live Demo

Check out the [live demo](https://tengrinews.web.app/) of the Tengrinews Clone.

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Make sure you have `npm` installed on your system:

## 1) Clone the repository:

```bash
git clone https://github.com/meyirman-is-creator/TengriNewsClone.git
```

## 2) Navigate to the project directory:

```bash
cd TengriNewsClone
```

## 3) Install dependencies:

```bash
npm install
```

## 4) Run the application:

```bash
npm start
```

## Tech Stack & Technologies

This project is built with a combination of modern web technologies and services:

- **Firebase:**

  - **Hosting:** Used for deploying the web application with high availability.
  - **Authentication:** Implemented for user authentication mechanisms.
  - **Authorization:** Manages user access control and permissions.

- **React.js:** A JavaScript library for building user interfaces.
- **TypeScript:** An open-source language which builds on JavaScript by adding static type definitions.
- **React Hooks:**

  - **useState:** Lets you add React state to functional components.
  - **useRef:** Lets you persistently access DOM elements.
  - **useEffect:** Lets you perform side effects in function components.

- **React Router:**

  - **Routes:** Enables the definition of navigation and rendering logic for different paths.
  - **useLocation:** Provides access to the location object that represents where the app is now.
  - **useNavigate:** Provides a way to navigate programmatically, for instance, after a form submission.

- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
- **HTML & CSS:** Standard technologies for building and styling web pages.
- **NewsApi:** An API service used to fetch real-time news articles for the web application.

## Implementation Details

### Level 1 Features

- **Basic News Article List:**

  - Created a foundational list display on the frontend by fetching data from a backend service.
  - Utilized React state management to handle the data and lifecycle methods to request data on component load.

- **Article Detail View:**
  - Implemented clickable articles that route to a detail view using React Router's `Link` component.
  - The detailed view is rendered using a dynamic route that includes the article's unique identifier.

### Level 2 Features

- **Pagination:**

  - Added pagination controls to the article list with a custom pagination component.
  - Stateful logic in the pagination component requests articles corresponding to the selected page number.

- **Category Filtering:**

  - Integrated a filter component that allows users to filter articles by category.
  - React state is used to manage the selected categories and filter articles on the frontend.

- **Search Functionality:**

  - Built a search bar component to filter articles by keywords.
  - Leveraged the `useState` hook to track search input and filter the article list accordingly.

- **Sort by Publication Date:**
  - Provided a sorting mechanism within the article list to sort by date.
  - Articles are sorted on the frontend after fetching, with the most recent news displayed first.

### Level 3 Features

- **Dynamic Content Scraping:**
  - Utilized a web-scraping library to dynamically parse the news content from Tengri News, ensuring a constant supply of current articles.
  - Alternatively, integrated ready-made API services to fetch news articles.

### Bonus Level

- **Deployment:**
  - Deployed the application on a hosting service of choice, providing public access.
  - Chose Firebase for its ease of use and seamless integration with the tech stack, especially for hosting and user authentication.

### Firebase Authentication and Authorization

- Implemented Firebase Authentication to create a secure user authentication system.
  - Integrated multiple sign-in methods including email/password, Google Account, and GitHub Account.
  - Used Firebase's authentication API to handle user sign-up, sign-in, and sign-out processes.
  - Set up Firebase Authorization rules to manage user access and permissions, ensuring that users can only access the features that their account level allows.

### Interactive Sidebar

- Developed an interactive sidebar for enhanced user navigation.
  - Employed the Swiper Slider library to present the sidebar as a sliding panel, adding a dynamic, responsive element to the user interface.
  - Configured the sidebar to be responsive and touch-friendly, ensuring a seamless experience on both desktop and mobile devices.
  - Integrated React Hooks such as `useState` for managing the sidebar's visibility state, and `useEffect` for handling side effects related to sidebar interactions.

### Title-based Sorting

- Added the ability to sort news articles by their title.
  - Implemented a sorting function that organizes articles alphabetically by title, allowing users to quickly find articles of interest.
  - Created a custom React component with dropdown options for sorting criteria that updates the articles' display order on the fly.
  - Utilized `useState` to manage the selected sort state and `useEffect` to apply the sort order to the list of articles whenever the state changes.

## Development Compromises and Solutions

### React Router and Firebase Hosting

- During the development, we used React Router to manage navigation within the application. However, we encountered an issue when hosting the site on Firebase Hosting: navigating directly to `/details` resulted in a 404 error because Firebase Hosting did not natively support single-page application (SPA) routing.
- To resolve this, we added a `firebase.json` configuration with the following rewrites rule:

```json
"rewrites": [
  {
    "source": "**",
    "destination": "/index.html"
  }
]
```

This configuration directs all requests to the index.html file, allowing React Router to handle the routing internally and thereby fixing the 404 error on page refresh or direct navigation.

### NewsAPI and Firebase Hosting Limitations

- We initially utilized NewsAPI, which works perfectly for local development since it allows free access from localhost. However, when the site was deployed to Firebase Hosting, NewsAPI's free tier did not support calls from production websites.
- To overcome this limitation without moving to a paid plan, we downloaded all necessary data in a JSON format and served this static data from the data folder. This way, the local development environment continues to fetch data directly from the NewsAPI backend, while the Firebase hosted version uses the static JSON files.
- Rest assured, when you perform a git clone of the repository, the codebase you receive is configured to fetch data from the backend during development. For the production build hosted on Firebase, it retrieves data from the static JSON files included within the project.

## Post-deadline Changes

<span style="color:red">**Changes added to README.md on 15.04.24**</span>

Here we document the changes that were made to the project after the original deadline.

### Title Change in `index.html`

- The title of the app in `public/index.html` was changed from "React App" to "TengriNews".

### Updates in `Details.tsx`

- - In `src/components/Details.tsx`, an import statement for a placeholder image `no Photo` was added.
- - The `axe Effect` import was modified to be a named import from React.
- - The image rendering logic was updated to use `no Photo` as a fallback when `urlToImage` is empty.

**Note:** These changes were made to enhance the user experience and were not part of the initial project scope completed by the deadline.