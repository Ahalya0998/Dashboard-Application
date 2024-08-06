# Dashboard Application
## Table of Contents
#### 1.Introduction
#### 2.Features
#### 3.Installation
#### 4.Usage
#### 5.Folder Structure
#### 6.Technologies Used

### Introduction
The Dashboard Application is a web-based platform that provides users with an interactive interface to visualize and manage various datasets and metrics. It includes multiple components such as customer feedback, activity charts, and goal completion progress bars.

### Features
#### - Interactive charts and graphs
#### - Customer feedback section
#### - Goal completion progress bars
#### - Responsive design for mobile devices
#### - Dropdown for selecting weekly data

### Installation
Follow these steps to set up the project locally:
#### 1. Clone the repository:
git clone https://github.com/Ahalya0998/Dashboard-Application
cd dashboard
#### 2. Install dependencies:
npm install
#### 3. Start the development server:
npm start
#### 4.Open your browser and navigate to http://localhost:3000.

### Usage
#### 1. Dashboard Overview:
#### * Displays key metrics and visualizations.
#### * Use the dropdown to filter data by week.
#### 2. Customer Feedback:
#### * Shows feedback from customers with profile pictures and star ratings.
#### 3. Activity Charts:
#### * Bar chart representing user activity data.
#### 4. Goal Completion:
#### * Circular progress bars displaying percentage of goals completed.

### Folder Structure
#### The project directory structure is as follows:

```plaintext
dashboard
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── Dashboard.js  
│   │   ├── Header.js  
│   │   └── Sidebar.js
│   │
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```
### Technologies Used
#### React: JavaScript library for building user interfaces.
#### Styled-Components: For styling React components.
#### React-Chartjs-2: For integrating Chart.js with React.
#### React-Icons: For adding icons to the application.
