# brr-dash

A modern internal team dashboard for BRR Media, built with React, TypeScript, MUI, and Webpack. Features staff directory, IT request system, ticket tracking, and personal task management.

## Clone the project

```
git clone https://github.com/doraemon6666/brr-dash
cd brr-dash
```

## Run the application

1. Install dependencies if you have not yet

```
npm install
```

2. Run Mock API and Frontend Together
   This will:
   Start the frontend at http://localhost:3000
   Start the mock API server at http://localhost:3001

```
npm run dev
```

3. Unit Test

```
npm run test
# or with coverage
npm run test:coverage
```

4. ESLint

```
npm run lint
npm run lint:fix
npm run format
```

## Other Docs

## Tech Stack

- **React** with functional components and hooks
- **TypeScript** for type safety
- **Material UI (MUI)** for modern UI components
- **Webpack** with a custom setup for bundling
- **React Hook Form** for flexible and performant form handling
- **Jest** for unit testing
- **Local mock server** to simulate async API behavior

---

## Features Completed

### Reusable Components

#### `DashboardCard`

- Responsive card component for displaying dashboard statistics

#### `CommonTable`

- Supports custom columns with `render` functions
- Optional **"Add"** button (`onAddClick`)
- Row-level action buttons (`renderActions`)
- Built-in **pagination**
- Responsive layout: columns can be hidden on smaller screens
- Built-in support for:
  - **Loading state** (skeleton)
  - **Error state**
  - **Empty data fallback**

#### `BaseForm`

- Accepts a dynamic `fields` config array
- Supports multiple input types:
  - `text`, `textarea`, `select`, `date`, `checkbox`, `file`
- Validates using field-specific rules
- Fully integrated with `react-hook-form`

---

### Contexts

- **`UserContext`** – Provides global current user info throughout the app
- **`SnackbarContext`** – Displays global notifications using MUI `Snackbar`

---

### File Upload

- **`useUploadFile` hook**
  - Mocked upload logic using `URL.createObjectURL()`
  - Designed for future enhancement (file type/size validation, error handling)

---

## Pages

### Dashboard

- Quick summary cards (with loading skeletons)
- Welcome banner displaying the current user's first name

### Staff Page

- Table listing employees with their name, role, and status
- Reusable table with pagination and optional action buttons

### IT Request Page

- Form to submit new IT support requests
- File upload field integrated with mocked upload logic
- Paginated list of submitted requests
- Supports deleting requests (confirmation pending)
- Refreshes list on submit/delete
- Edit feature placeholder
- Data powered by local mock server

### Unit Testing

A limited set of unit tests have been written for key reusable components, including:

- `CommonTable` – table rendering and props handling and page operation
- File upload logic – simulated upload behavior and result handling

## Assumptions Made

- All users are considered authenticated by default; authentication and login flows are out of scope for this implementation.
- Role-based routing and UI access control are acknowledged as future needs, but were not required or implemented in this delivery.
- File uploads are simulated locally using mocked logic; no actual backend upload service is integrated.

## Missing / To Do

- Add confirmation dialog before deleting IT requests
- Implement **edit functionality** for IT requests
- Build **Tickets Page** and **To-Do List Page**
- Add common pages:
  - 404 / Not Found
  - Empty state fallback
  - Global Error page
- Implement **role-based access control**
  - Show/hide routes and features based on `user.role`
- Expand file upload validation:
  - Limit size, type
  - Show file preview
  - Retry on failure
- Increase **unit test coverage** for forms, contexts, and pages
- **Homepage quick entry shortcuts**
  - e.g. cards or links to Staff / IT Request / To-Do pages
- **Batch actions for tables**
  - Support selecting multiple rows for bulk operations (e.g. delete, assign)
