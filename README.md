# TengriNewsClone

A clone of a news website, implemented using React, TypeScript, and Tailwind CSS. It features Google authentication via Firebase and includes functionalities such as sliders and routing, making extensive use of `useState`, `useEffect`, `react-router-dom`, and `swiper-slider-react`.

## Getting Started

These instructions will guide you through the setup process and get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following tools installed on your system:

- Node.js (10.16.0 or later)
- npm (5.6.0 or later)

You can check your versions by running `node -v` and `npm -v` in your terminal.

### Installation

Follow these steps to set up your development environment:

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/tengrinewsclone.git
cd tengrinewsclone
Install the necessary packages:
npm install
Set up Firebase:
Go to the Firebase Console and create a new project.
Enable Google Authentication in the Authentication section.
Add your app and get your Firebase config object.
Configure environment variables:
Create a .env file in the root of your project and add your Firebase configuration keys like so:

REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_DATABASE_URL=your_database_url
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
Running the Project
To start the application in development mode, run:

npm start
This will launch the project in your default web browser at http://localhost:3000.

Built With
React - A JavaScript library for building user interfaces.
TypeScript - An open-source language which builds on JavaScript by adding static type definitions.
Tailwind CSS - A utility-first CSS framework for rapidly building custom designs.
Firebase - For authentication, database, storage, and more.
React Router Dom - For navigation between pages.
Swiper - Modern touch slider for React.
Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Please refer to the CONTRIBUTING.md for more information.

License
Distributed under the MIT License. See LICENSE for more information.


This README.md template provides a solid foundation for your project documentation, including installation instructions, built with, and contributing guidelines. Customize it further to match your project's specifics.