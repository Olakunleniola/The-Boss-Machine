# Boss Machine App
The Boss Machine app is a simple project designed to demonstrate CRUD (Create, Read, Update, Delete) operations using React, Redux, and Express. It allows users to manage minions, ideas, work tasks, and meetings through a web interface.

<video width="100%" height="100%" controls>
   <source src="https://s3.amazonaws.com/codecademy-content/programs/build-apis/solution-videos/BossMachine480.mov" type="video/mp4">
 The markdown processor does not support the video tag.
</video>

## Features
+ Create, read, update, and delete minions with their job titles, weaknesses, and salaries.
- Create, read, update, and delete ideas with names, descriptions, weekly revenues, and durations.
+ Assign work tasks to minions and manage them.
- Schedule meetings with notes and timestamps.

## Frontend
The front-end of the app is built using React and Redux for state management. It uses React Router for routing and Axios for making HTTP requests to the backend API.

## Backend
The backend of the app is powered by Express.js, providing RESTful API endpoints for interacting with the app's data. It uses CORS middleware to handle cross-origin requests and integrates with the front-end to manage data retrieval and manipulation.

## Data Structure
+ Minions: Each minion has a name, job title, weaknesses, and salary.
- Ideas: Each idea has a name, description, weekly revenue, and duration.
+ Work: Work tasks are assigned to minions and include a title, description, and duration.
- Meetings: Meetings are scheduled with notes and timestamps.

## Usage
+ Clone the repository:
```bash
    git clone https://github.com/Olakunleniola/The-Boss-Machine.git
```
- Install dependencies:
```bash
    npm install
```
+ Start the frontend and backend servers:
```bash
    npm start
```
+ Open the index.html file in the project root folder in a web browser.

## API Endpoints
+ /api/minions: CRUD operations for minions
- /api/ideas: CRUD operations for ideas
+ /api/work: CRUD operations for work tasks
- /api/meetings: CRUD operations for meetings

## Contributing
Contributions are welcome! Feel free to submit pull requests or open issues for any improvements or fixes.

## License
This project is licensed under the MIT [License]()

