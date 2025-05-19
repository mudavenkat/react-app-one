# Fibonacci Number Application

This project is a simple React application that allows users to calculate Fibonacci numbers. It consists of several components that work together to provide a user-friendly interface for inputting numbers, displaying results, and showing the history of calculations.

## Project Structure

```
react-app-one
├── src
│   ├── App.jsx          # Main application component
│   ├── App.css          # Styles for the application
│   ├── components
│   │   ├── FibonacciInput.jsx    # Component for user input
│   │   ├── FibonacciResult.jsx    # Component for displaying results
│   │   └── FibonacciHistory.jsx    # Component for showing calculation history
└── README.md          # Documentation for the project
```

## Components

### App.jsx
The main application component that serves as the entry point for the application. It imports the necessary styles and renders the child components.

### FibonacciInput.jsx
This component renders an input field where users can enter a number to calculate the Fibonacci sequence.

### FibonacciResult.jsx
This component displays the result of the Fibonacci calculation based on the input provided by the user.

### FibonacciHistory.jsx
This component shows the history of previously calculated Fibonacci numbers, allowing users to see past results.

## Getting Started

To run this application, clone the repository and install the dependencies:

```bash
npm install
```

Then, start the development server:

```bash
npm start
```

You can now access the application in your browser at `http://localhost:3000`.