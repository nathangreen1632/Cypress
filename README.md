# Tech Quiz Application with Cypress Testing

#### License
![License](https://img.shields.io/badge/License-MIT-blue.svg)

#### Status
![Status](https://img.shields.io/badge/Status-Complete-limegreen.svg)
![Development](https://img.shields.io/badge/Development-Active-limegreen.svg)
![Build](https://img.shields.io/badge/Build-Passing-limegreen.svg)
![Deps](https://img.shields.io/badge/Deps-Up%20to%20date-limegreen.svg)
![Last Commit](https://img.shields.io/github/last-commit/nathangreen1632/Cypress.svg)
![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-limegreen.svg)

#### Technologies
![React](https://img.shields.io/badge/React-Frontend-ffffff.svg)
![Node.js](https://img.shields.io/badge/Node.js-Backend-ffffff.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-ffffff.svg)
![Express.js](https://img.shields.io/badge/Express.js-Server-ffffff.svg)
![Cypress](https://img.shields.io/badge/Cypress-Testing-ffffff.svg)

#### GitHub Stats
![Stars](https://img.shields.io/github/stars/nathangreen1632/socialNetwork.svg)
![Forks](https://img.shields.io/github/forks/nathangreen1632/socialNetwork.svg)
![Followers](https://img.shields.io/github/followers/nathangreen1632.svg)

### Table of Contents
<details>
<summary>Click to expand</summary>

- [Overview](#-overview)
- [Technologies Used](#-technologies-used)
- [Cypress Testing](#-cypress-testing)
- [Setup Instructions](#-setup-instructions)
- [Run the Application](#-run-the-application)
- [Run Cypress Tests](#-run-cypress-tests)
- [Test Data](#-test-data)
- [Walkthrough Video](#-walkthrough-video)
- [Project Structure](#-project-structure)
- [Best Practices Followed](#-best-practices-followed)
- [Questions?](#-questions)

</details>

## 📋 Overview
This is a full-stack **Tech Quiz Application** built using the **MERN stack** (MongoDB, Express.js, React, Node.js) with complete **Cypress testing integration**. The application allows users to take a 10-question quiz, view their score upon completion, and restart the quiz at any time.

This project includes:
- **End-to-End (E2E)** testing with Cypress
- **Component testing** with Cypress
- **Mocked test data** for consistency
- A fully functional user interface

---

## 🚀 Technologies Used
[![My Skills](https://skillicons.dev/icons?i=mongodb,express,react,nodejs,cypress)](https://skillicons.dev)

---

## 🧪 Cypress Testing

### ✅ End-to-End Tests (E2E)
**File:** `cypress/e2e/quizFlow.cy.js`

These tests cover:
- Starting the quiz
- Answering all 10 questions
- Viewing the final score
- Restarting the quiz

### ✅ Component Test
**File:** `cypress/component/Quiz.cy.tsx`

These tests cover the `<Quiz />` component in isolation:
- Rendering the start button
- Running through a full 10-question quiz using injected mock data
- Restarting the quiz using internal component state

---

## 🔧 Setup Instructions

### 📁 Clone the Repository
```bash
git clone https://github.com/nathangreen1632/Cypress.git
cd Cypress
```

### 📦 Install All Dependencies
Make sure you're in the root directory:
```bash
npm install
```

This installs both client, server, and Cypress dependencies.

---

## 🛠 Run the Application

### 🖥 Start Backend Server
```bash
npm run server
```

### 🌐 Start React Frontend
```bash
npm run client:dev
```

By default, the frontend runs on `http://localhost:5173` and the backend runs on `http://localhost:3001`.

**OR** 

Run both the Server and Client together:
```bash
npm run start:dev
```

This will run both the Server and Client on port 3001 using a proxy (`http://127.0.0.1:3001`). 

---

## 🧪 Run Cypress Tests

### 📥 Install Cypress (if not already installed)
```bash
npm install cypress
```

### 🚀 Launch Cypress GUI
```bash
npm run cypress
```

Choose the following:
- **E2E Testing**: Select `quizFlow.cy.js`
- **Component Testing**: Select `Quiz.cy.tsx`


### 🔁 Shortcut
To run all tests via script:
```bash
npm run test
```
This command opens Cypress and allows you to run both test types.

---

## 🧪 Test Data

The file `cypress/fixtures/mockData.json` contains 10 mock questions. These are injected during tests to ensure consistent behavior.

Each question includes:
- The question string
- 3 answers with `text` and `isCorrect` boolean
- The correct answer

---

## 📹 Walkthrough Video

🎬 **Watch the full test demonstration:**
> [Walkthrough Video Link – Insert here when ready]

This video includes:
- Launching the server and client
- Opening Cypress
- Running all component and E2E tests
- Showing that all tests pass ✅

---

## 📁 Project Structure
```
Cypress/
├── LICENSE
├── README.md
├── client
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   └── vite.svg
│   ├── src
│   │   ├── App.css
│   │   ├── App.tsx
│   │   ├── assets
│   │   │   └── react.svg
│   │   ├── components
│   │   │   └── Quiz.tsx
│   │   ├── main.tsx
│   │   ├── models
│   │   │   ├── Answer.ts
│   │   │   └── Question.ts
│   │   └── services
│   │       └── questionApi.ts
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   ├── tsconfig.node.tsbuildinfo
│   ├── tsconfig.tsbuildinfo
│   └── vite.config.ts
├── cypress
│   ├── component
│   │   └── Quiz.cy.tsx
│   ├── e2e
│   │   └── quizFlow.cy.js
│   ├── fixtures
│   │   └── mockData.json
│   ├── support
│   │   ├── commands.ts
│   │   ├── component-index.html
│   │   ├── component.ts
│   │   └── e2e.ts
│   └── tsconfig.json
├── cypress.config.ts
├── package-lock.json
├── package.json
├── server
│   ├── package-lock.json
│   ├── package.json
│   ├── src
│   │   ├── config
│   │   │   └── connection.ts
│   │   ├── controllers
│   │   │   └── questionController.ts
│   │   ├── models
│   │   │   ├── Question.ts
│   │   │   └── index.ts
│   │   ├── routes
│   │   │   ├── api
│   │   │   │   ├── index.ts
│   │   │   │   └── questionRoutes.ts
│   │   │   └── index.ts
│   │   ├── seeds
│   │   │   ├── cleanDb.ts
│   │   │   ├── pythonQuestions.json
│   │   │   └── seed.ts
│   │   └── server.ts
│   ├── tsconfig.json
│   └── tsconfig.tsbuildinfo
├── tsconfig.json
├── vite.config.d.ts
├── vite.config.js
└── vite.config.ts
```

---

## 🧼 Best Practices Followed
- Modular file structure
- Descriptive commit messages
- Cypress best practices (`data-cy` selectors)
- Reusable test data

---

## 📞 Questions?
Feel free to reach out by messaging me at [Issues](https://github.com/nathangreen1632/Cypress/issues) on [GitHub](http://www.github.com).

## **Contact**

For any questions or support, feel free to reach out to the project maintainer:

- GitHub: [Nathan Green](http://www.github.com/nathangreen1632)
- Stack Overflow: [Nathan Green](https://stackoverflow.com/users/27279774/nathan)
- LinkedIn: [Nathan Green](https://www.linkedin.com/in/jgreen1632/)