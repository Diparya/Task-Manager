
# Task Manager

## Overview

The Task Manager is a web application for managing tasks with features like task creation, completion, priority management, sorting, and searching. The app allows users to:

- Add new tasks.
- Edit existing tasks.
- Mark tasks as complete.
- Delete tasks.
- Set priorities for tasks (low, medium, high).
- Search tasks by title.
- Sort tasks by priority or completion status.

All tasks are saved in local storage, so they persist even after a page refresh.

## Setup and Launch
To set up and run this application locally, follow these steps:
## Prerequisites
Node.js and npm: Make sure you have Node.js and npm installed on your computer.
## Installation
### Clone the repository:
git clone https://github.com/Diparya/Task-Manager.git \
cd Task-Manager
### Install dependencies:
npm install
### Run the application:
npm run dev
### Open the application:
Open your browser and navigate to http://localhost:3000 to see the Task Manager in action.
# Assumptions
During the development of this Task Manager, the following assumptions were made:

1. Local Storage: Tasks are saved to the browser's local storage to ensure persistence between sessions. This approach is lightweight and doesn't require a backend database.
2. No authentication: Since it's a simple task manager, no user authentication is implemented. It assumes a single user managing their tasks.
3. Task Priority Levels: Only three priority levels (low, medium, high) are provided for simplicity. These could be expanded in future versions.
4. Responsiveness: The application is designed to be responsive, but certain layout adjustments may be needed on very small screens.
# Screenshots
Task Manager UI
![App Screenshot](https://github.com/Diparya/Task-Manager/blob/51f7fcc7195f11fd5753a20e9bee96d397224026/public/screenshots/Screenshot%202024-11-15%20162329.png)

Add new tasks
![App Screenshot](https://github.com/Diparya/Task-Manager/blob/51f7fcc7195f11fd5753a20e9bee96d397224026/public/screenshots/Screenshot%202024-11-15%20162508.png)

Edit existing tasks
![App Screenshot](https://github.com/Diparya/Task-Manager/blob/51f7fcc7195f11fd5753a20e9bee96d397224026/public/screenshots/Screenshot%202024-11-15%20162525.png)





