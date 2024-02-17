# [Random Users List React App](https://react-random-users-list.netlify.app/)

👋 Welcome to the Random Users List React App ⚛️!

- You can directly access the deployed version of this app by navigating to [react-random-users-list.netlify.app](https://react-random-users-list.netlify.app/), or if you prefer to run it locally, follow the [installation and setup guide](#installation-and-setup) below.

- This is a React application that fetches random user data from the [Random User Generator API](https://randomuser.me/) and displays it in a list format.

- Users can perform various actions like sorting users by country, first name, or last name, toggle row colors, delete users, and reset the user list to its original state.

## Features

- 🚀 Fetches random user data from the Random User Generator API.
- 🔍 Allows sorting users by country, first name, or last name.
- 🎨 Supports toggling row colors for better visualization.
- 🗑️ Enables deleting individual users from the list.
- 🔄 Provides functionality to reset the user list to its original state.
- 🌘 Allows toggling between Light and Dark themes

## Technologies Used

- ⚛️ React
- 📘 TypeScript
- 🌐 HTML
- 🖌️ CSS

<a id="installation-and-setup"></a>

## Installation and Setup Guide

1. Clone the repository:

```
git clone https://github.com/Charly-Wolf/random_users_list
```

2. Navigate to the project directory:

```
cd random-users-list
```

3. Install dependencies:

```
npm  install
```

or

```
pnpm  install
```

4. Start the development server:

```
npm run dev
```

or

```
pnpm run dev
```

5. Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to view the app.

## Usage

👩‍💻 Upon opening the app, it fetches random user data and displays it in a list.
🖱️ Users can toggle row colors, sort users by country, first name, or last name, delete individual users, and reset the user list to its original state.

## Project Structure

- 📂 `src/components`: Contains React components used in the application.
- 📄 `src/types.d.ts`: Defines TypeScript types used in the application.
- 📄 `src/App.tsx`: Main component that orchestrates the application logic.
