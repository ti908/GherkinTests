# 🥒 GherkinTests

A **Behavior-Driven Development (BDD) test automation project** built with **Cypress, Cucumber, and Gherkin** for validating end-to-end web application workflows.

The project demonstrates how business-readable Gherkin scenarios can be integrated with Cypress automation to create structured, maintainable, and reusable automated tests.

## 🎯 Project Overview

This project was developed to demonstrate a BDD approach to web test automation.

Test scenarios are written using **Gherkin's Given–When–Then syntax**, separating test behaviour from the underlying automation implementation and making scenarios easier to understand from both technical and business perspectives.

The framework covers multiple application user behaviours, including:

* Standard User
* Locked User
* Problem User
* Performance Glitch User

## 🛠️ Tech Stack

* **Cypress** — End-to-end web test automation
* **JavaScript** — Test implementation
* **Cucumber** — BDD integration
* **Gherkin** — Human-readable test scenarios
* **Mocha** — JavaScript test framework
* **Cypress Mochawesome Reporter** — Test reporting
* **Node.js / npm** — Dependency and test execution management

## 🧪 BDD Approach

Test behaviour is defined using Gherkin scenarios such as:

```gherkin
Feature: User Login

  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user enters valid credentials
    And the user submits the login form
    Then the user should successfully access the application
```

This approach helps keep test scenarios **readable, reusable, and aligned with expected user behaviour**.

## 📂 Project Structure

```text
GherkinTests/
│
├── cypress/
│   ├── cucumberReports/
│   ├── fixtures/
│   ├── integration/
│   │   └── examples/
│   │       └── BDD/
│   │           ├── LockedUser/
│   │           ├── PerformanceGUser/
│   │           ├── ProblemUser/
│   │           ├── StandardUser/
│   │           ├── LockedUser.feature
│   │           ├── PerformanceGUser.feature
│   │           ├── ProblemUser.feature
│   │           └── StandardUser.feature
│   ├── plugins/
│   └── support/
│
├── cypress.config.js
├── package.json
└── package-lock.json
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ti908/GherkinTests.git
```

### 2. Navigate into the project

```bash
cd GherkinTests
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the tests

Run all Cypress tests in headless mode:

```bash
npm test
```

Run tests in headed mode:

```bash
npm run headTest
```

Run tests using Chrome:

```bash
npm run chromeTest
```

## 📊 Test Reporting

The project supports **Cucumber JSON reporting** and **Cypress Mochawesome Reporter** for presenting automated test execution results.

Cucumber results are generated under:

```text
cypress/cucumberReports/
```

## 💡 Key Concepts Demonstrated

This repository demonstrates practical experience with:

* Behavior-Driven Development (BDD)
* Gherkin test scenario design
* Cypress end-to-end automation
* Cucumber integration
* Test scenario organisation
* Reusable test automation
* Positive and negative user flows
* Multiple user behaviour validation
* Automated test reporting

## 👨🏾‍💻 Author

**Martin Walter Ampah**

Machine Learning Researcher | Software Quality Engineer | MSc Computer Science
