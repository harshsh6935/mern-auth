# MERN Authentication App

This project is a full-stack MERN (MongoDB, Express, React, Node.js) authentication app with Google OAuth integration, Redux state management, and user profile management. The app is deployed on [Render](https://mern-auth-389v.onrender.com).

## Features

- **User Authentication**: Register, log in, and log out with JWT-based authentication.
- **Google OAuth 2.0**: Sign in using Google OAuth for easy authentication.
- **User Profile Management**: Update user details and profile picture.
- **Password Security**: Password hashing using `bcryptjs`.
- **State Management**: Persistent authentication state with Redux.
- **Image Uploads**: Profile pictures are uploaded to Firebase Storage.
- **Responsive Design**: Built with Tailwind CSS for a responsive UI.

## Tech Stack

### Frontend
- **React**: For building the user interface.
- **Redux**: For state management of user authentication.
- **Firebase**: For Google OAuth and image storage.
- **Tailwind CSS**: For styling.

### Backend
- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for building the API.
- **MongoDB**: NoSQL database for storing user data.
- **Mongoose**: ODM (Object Data Modeling) for MongoDB.
- **jsonwebtoken**: For handling JWT authentication.
- **bcryptjs**: For password hashing.

## Deployment

The application is live on [Render](https://mern-auth-389v.onrender.com).

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB running locally or a MongoDB Atlas account
- Firebase account for Google OAuth and Firebase Storage

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/mern-auth.git
    ```

2. Navigate to the project directory and install dependencies:

    ```bash
    cd mern-auth
    npm install
    npm install --prefix client
    ```

3. Set up environment variables:
   
    Create a `.env` file in the root directory and add the following:

    ```bash
    MONGO_URL=<Your MongoDB URI>
    JWT_SECRET=<Your JWT Secret>
    GOOGLE_CLIENT_ID=<Your Google Client ID>
    GOOGLE_CLIENT_SECRET=<Your Google Client Secret>
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

5. To build the client and run in production:

    ```bash
    npm run build
    npm start
    ```

### Firebase Setup for Google OAuth

1. Go to the Firebase console and create a new project.
2. Enable Google sign-in in the **Authentication** section.
3. Obtain Firebase config values and update your `firebase.js` file in the client directory.

### Redux Configuration

Redux is used for managing the global authentication state. Actions like `signInStart`, `signInSuccess`, and `signOut` are handled in `redux/user/userSlice.js`.

### Firebase Storage

Firebase Storage is used for uploading profile pictures. The `Profile.jsx` component handles image uploads and provides feedback during the process.

## API Endpoints

### Authentication Routes

- **POST** `/server/auth/register` - Register a new user
- **POST** `/server/auth/login` - Log in a user
- **POST** `/server/auth/google` - Google OAuth sign-in
- **GET** `/server/auth/signout` - Log out the current user

### User Routes

- **GET** `/server/user/:id` - Get user details
- **POST** `/server/user/update/:id` - Update user details
- **DELETE** `/server/user/delete/:id` - Delete user account

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
