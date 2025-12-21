# Art Portfolio Project

Welcome! This is the starting point for my portfolio website.

## Prerequisites

Before running the project, you need to install **Node.js**. This includes `npm` (Node Package Manager), which is used to install dependencies and run the server.

1. **Download Node.js**: [https://nodejs.org/](https://nodejs.org/)
    * *Recommendation*: Choose the **LTS (Long Term Support)** version.
2. **Verify Installation**:
    Open your terminal (PowerShell or Command Prompt) and run:

    ```bash
    node -v
    npm -v
    ```

    If you see version numbers, you are ready to go!

## Getting Started

If you want to set up the project manually (or if the automated agent script failed), follow these commands:

### 1. Create the Project

Run this command in your project folder to create the project structure using **Vite**:

```powershell
npm create vite@latest thunder-web -- --template react
```

### 2. Enter the Project Directory

```powershell
cd thunder-web
```

### 3. Install Dependencies

This downloads React and other libraries provided by the template.

```powershell
npm install
```

### 4. Install Additional Libraries

We plan to use **React Router** for navigation and **Framer Motion** for animations.

```powershell
npm install react-router-dom framer-motion
```

### 5. Start the Development Server

```powershell
npm run dev
```

You should see a local URL (e.g., `http://localhost:5173`) where you can view your site!

## Project Structure

* `src/main.jsx`: The entry point of the app.

* `src/App.jsx`: The main component structure.
* `vite.config.js`: Configuration for the build tool.

Happy Coding!
