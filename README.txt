# National Park List

National Park List is a web application that allows users to explore national parks based on various categories. This project consists of a Flask backend server for fetching park data from the National Park Service API and a React frontend for displaying the data in a user-friendly manner.

## Features

- Fetches park data from the API
- Displays parks categorized by activity types
- Allows users to view park details and explore more parks

## Technologies Used

- Flask: Python web framework for the backend server
- React: JavaScript library for building user interfaces
- Axios: Promise-based HTTP client for making requests to the backend
- react-horizontal-scrolling-menu: React component for creating horizontal scroll menus

## Backend Setup

1. Install dependencies:

cd nationalpark/nationalpark_backend
pip install -r requirements.txt

2. Run the Flask server:
python app.py

The backend flask application now be aceessible on http://127.0.0.1:8080/ 
with route '/api/parks' to access processed park data in JSON 

## Frontend Setup

1. Install dependencies:
cd nationalpark/nationalpark_react
npm install

2. Run the react development Server:
npm start

The frontend should now be accessible on http://localhost:3000.

## Usage
Visit the frontend URL to see a horizontal scroll menu with category cards of national parks.
Each card presents the category name of the activity and the number of parks within that category.
Click on a category card to view the first 5 parks associated with that category. If there are more than 5 parks, only the first 5 will be shown.
Click on a park name to open the park link in a new tab.

## Potential Feature
Add a button for each card to show all the parks in the list if there are more than 5.
