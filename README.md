# Tourism Project

A full-stack web application for managing and exploring tourist destinations. This project allows users to browse tourist spots, add new destinations, manage their personal lists, and view detailed information about each location.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## 🎯 Project Overview

This Tourism Project is a modern web application built with React and Express.js that enables users to discover, share, and manage tourist attractions worldwide. The platform provides comprehensive features for creating, reading, updating, and deleting tourist spot information with user authentication and authorization.

## ✨ Features

### Authentication & Authorization

- **User Registration**: Create new user accounts with email and password
- **Email/Password Login**: Secure login with Firebase authentication
- **Google OAuth Login**: One-click login with Google account
- **Protected Routes**: Private routes that require user authentication
- **User Session Management**: Persistent user authentication state across sessions

### Tourist Spot Management

- **View All Tourist Spots**: Browse all tourist destinations in a responsive grid layout
- **Add New Tourist Spots**: Authenticated users can add new tourist attractions with details including:

  - Tourist Spot Name
  - Country Name
  - Location
  - Image URL
  - Description
  - Average Cost
  - Seasonality (best time to visit)
  - Travel Time Required
  - Total Visitors Per Year
  - User Information (automatically captured)

- **View Spot Details**: Access comprehensive information about each tourist destination
- **Edit Tourist Spots**: Users can modify their own added tourist spots
- **Delete Tourist Spots**: Users can remove their own tourist spot listings

### User Experience Features

- **Responsive Design**: Fully responsive UI using Tailwind CSS and DaisyUI
- **Loading States**: Loading spinner displays during data fetching
- **Interactive Modal**: Modal popup for editing tourist spot information
- **Image Display**: Visual representation of tourist spots with images
- **Card-Based Layout**: Clean, organized card layout for browsing spots
- **Navigation Bar**: Persistent navigation with user information display
- **Footer**: Consistent footer across all pages
- **404 Page**: Custom not found page for invalid routes

### Home Page

- **Banner Section**: Eye-catching hero section
- **Countries Component**: Display tourist destinations by country
- **Featured Tourist Spots**: Showcase popular tourist attractions
- **Carousel/Slider**: Swiper integration for interactive content display

## 🛠 Tech Stack

### Frontend

- **React 19.2.0**: UI library
- **React Router 7.10.0**: Client-side routing and navigation
- **Vite 7.2.4**: Build tool and development server
- **Tailwind CSS 4.1.17**: Utility-first CSS framework
- **DaisyUI 5.5.7**: Tailwind CSS component library
- **Firebase 12.6.0**: Authentication and backend services
- **Swiper 12.0.3**: Touch slider library
- **React Responsive Modal 7.1.0**: Modal dialog component
- **ESLint 9.39.1**: Code quality and linting

### Backend

- **Express.js 5.2.1**: Node.js web application framework
- **MongoDB 7.0.0**: NoSQL database
- **CORS 2.8.5**: Cross-Origin Resource Sharing middleware
- **dotenv 17.2.3**: Environment variable management
- **Vercel**: Deployment platform for backend

## 📁 Project Structure

```
tourism-project/
├── back-end/
│   ├── index.js              # Main server file with API routes
│   ├── package.json          # Backend dependencies
│   └── vercel.json           # Vercel deployment config
│
├── front-end/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Banner/       # Home page banner
│   │   │   ├── Card/         # Tourist spot card component
│   │   │   ├── Countries/    # Countries showcase component
│   │   │   ├── Loading/      # Loading spinner component
│   │   │   ├── TouristsSpot/ # Tourist spots display
│   │   │   └── common/       # Shared components (Navbar, Footer)
│   │   │
│   │   ├── page/             # Route components/pages
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── RegisterPage.jsx
│   │   │   ├── AddTouristsSpotPage.jsx
│   │   │   ├── AllTouristsSpotPage.jsx
│   │   │   ├── DetailsPage.jsx
│   │   │   ├── MyList.jsx
│   │   │   └── NotFound.jsx
│   │   │
│   │   ├── context/          # React Context for state management
│   │   ├── hooks/            # Custom React hooks (useAuth)
│   │   ├── provider/         # AuthProvider for authentication
│   │   ├── router/           # React Router configuration
│   │   ├── utils/            # API utility functions
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── App.css
│   │
│   ├── public/               # Static assets
│   ├── package.json          # Frontend dependencies
│   ├── vite.config.js        # Vite configuration
│   ├── eslint.config.js      # ESLint configuration
│   ├── firebase.config.js    # Firebase configuration
│   └── index.html            # HTML entry point
│
└── README.md                 # Project documentation
```

## 🚀 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB account and connection string
- Firebase project credentials

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd back-end
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `back-end` directory:

   ```
   PORT=5000
   DB_PASSWORD=your_mongodb_password
   ```

4. Start the server:

   ```bash
   node index.js
   ```

   The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd front-end
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Ensure `firebase.config.js` contains your Firebase credentials

4. Update the API base URL in `src/utils/api.js` if needed (default: `http://localhost:5000`)

5. Start the development server:

   ```bash
   npm run dev
   ```

   The app will run on `http://localhost:5173`

## 💻 Usage

### Home Page

- View featured tourist spots
- Explore countries and destinations
- See a carousel of popular attractions

### Login/Register

- Click "Login" or "Register" in the navbar
- Register with email and password or use Google login
- Login with existing credentials

### Add Tourist Spot (Protected)

- Navigate to "Add Tourists Spot" after logging in
- Fill in the tourist spot details form
- Submit to add the spot (stored in database)
- Redirected to "My List" after successful submission

### View All Spots

- Click "All Tourists Spots" to see all destinations
- View spots in a responsive grid layout
- Click "Details" on any spot to view more information

### My List (Protected)

- View only your added tourist spots
- Edit your spots using the edit button
- Delete your spots using the delete button
- See updated information in real-time

### Details Page (Protected)

- View complete information about a tourist spot
- Edit the spot information using the modal form
- Delete the spot from the database
- Go back to previous destinations
