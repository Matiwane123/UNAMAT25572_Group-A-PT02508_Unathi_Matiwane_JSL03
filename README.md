# JSL03: Console-Based Task Manager

## Project Description

1. Before starting this challenge, I have reviewed and corrected my JSL02 project using the provided solution.
   The Console-Based Task Manager is a streamlined JavaScript application designed to handle task organization through structured data management. This system allows users to interactively add new tasks to an existing registry, automatically assigning unique IDs and ensuring data integrity through input validation.

## Technologies Used

1.JavaScript: Core logic, array filtering, and object management.

2.Web Browser Environment: Utilizing window.prompt() for input and window.alert() for notifications.

3.Markdown: Documentation and project structuring.

## Key Objectives

### Logic & User Interaction

- Store tasks as **objects inside an array** for structured data management.
- Allow users to **add up to three new tasks** to the existing task list.
- Ensure each new task has a **unique incremental ID** based on the last task in the array.
- Prompt users to enter **task details (title, description, status)** and store them in an object.
- Alert users when they reach the task limit with the message:
  _"There are enough tasks on your board, please check them in the console."_
  Implement a **filter function** to display only tasks with the status `"done"`.
- Log **all tasks** in the console with a clear label for easy review.
- Log **only completed tasks** (status: `"done"`) in the console under a "Completed Tasks" label for quick reference.

## Code Quality & Maintainability

- Use meaningful variable and function names to ensure readability and maintainability.
- Follow consistent indentation and formatting to enhance code clarity.
- Include comments explaining key logic and functionality to support future modifications.

## Expected Outcome

A **structured and limited task management system** that enables users to add, review, and filter tasks efficiently while ensuring **clean, well-documented, and maintainable code.**

**Console Log of all and completed tasks**

![console log](./explainer-images/console%20log.png)
