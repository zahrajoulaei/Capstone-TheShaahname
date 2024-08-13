# The Shaahnameh Project

This project is a web application that allows users to search and explore characters from the epic "Shahnameh". The application provides detailed information about each character, including their monarchy, age, abilities, and specialties.

## Table of Contents

- [Project Overview](#project-overview)
- [Sketch](#sketch)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Deployment](#deployment)


## Project Overview

The Shahnameh Characters Project is designed to provide an interactive and engaging way for users to explore the rich and diverse characters of Shahnameh. The application allows users to search for characters by name and view detailed information about them.

## Sketch

Below is a rough sketch of the application's layout:

![Sketch]("Frontend/src/assets/images/wireframe1.jpg")  

![Sketch]("Frontend/src/assets/images/wireframe2.jpg")  



The sketches provides a visual overview of the main sections of the application, including the header, search bar, character list, and character details.

## Technologies Used

- **Frontend:**
  - React.js
  - React Bootstrap
  - TypeScript
  - FontAwesome Icons

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (Mongoose)

- **Others:**
  - Redux (for state management, if used)
  - Vite (for frontend development)
  - RESTful API (for backend communication)

## Project Structure

Here's a brief overview of the project structure:


(complete later)


## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Clone the Repository

```
git clone https://github.com/zahrajoulaei/Joulaei_Zahra_TheShaahnameh_Capstone

cd Joulaei_Zahra_TheShaahnameh_Capstone
```


### Install Dependencies
For the frontend:
```
cd Frontend
npm install
```

For the backend:
```
cd backend
npm install
```

### Running the Project



#### Backend

1.	Set up MongoDB:
•	Ensure MongoDB is running locally or provide a connection string for a remote MongoDB instance.
•	Create a .env file in the backend directory and add the following:

    ```
        ATLAS_URI= "your-mongodb-connection-string"
    ```

2.	Start the Backend Server:

    ```
        cd Backend
         npm run start-backend
    ```

#### Frontend 

 Start the Frontend Development Server:


    ```
       cd Frontend
        npm run dev
    ```

The frontend development server will start on http://localhost:5173.


### Deployment

The project is deployed on [Your Deployment Platform] and can be accessed using the following link:

  •	Live Demo: TODO

