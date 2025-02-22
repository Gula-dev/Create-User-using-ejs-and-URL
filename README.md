# User Management System

This is a simple User Management System built using Node.js, Express, and MongoDB with EJS as the templating engine. It allows users to create, read, update, and delete (CRUD) user records.

## Features
- Create new users
- View all users
- Update user details
- Delete users

## Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repository-url.git
   ```
2. Navigate to the project directory:
   ```sh
   cd user-management-system
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the MongoDB server (if not running):
   ```sh
   mongod
   ```
5. Run the application:
   ```sh
   node app.js
   ```
6. Open your browser and go to:
   ```sh
   http://localhost:3000
   ```

## Project Structure
```
user-management-system/
│-- models/
│   └── user.js
│-- public/
│-- views/
│   ├── index.ejs
│   ├── read.ejs
│   ├── edit.ejs
│-- app.js
│-- package.json
│-- README.md
```

## API Endpoints

### Home Page
- `GET /` - Renders the home page

### Read Users
- `GET /read` - Fetches all users and displays them

### Create User
- `POST /create` - Creates a new user

### Delete User
- `GET /delete/:id` - Deletes a user by ID

### Edit User
- `GET /edit/:userid` - Fetches user details for editing
- `POST /update/:userid` - Updates user details

## Dependencies
- express
- mongoose
- ejs
- path

## Author
- [Gulam Kadir]

## License
This project is licensed under the MIT License.

