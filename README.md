# Canvas-Project

## Overview
This project is a React-based app with customizable text placement and styles. It allows users to create and move text elements around a canvas, customize font size, color, and style, and undo/redo actions.

## Prerequisites
Before running this project, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (Recommended version: `16.x` or above)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Getting Started

### 1. Clone the repository
Start by cloning the project repository:

```bash
git clone https://github.com/yourusername/yourprojectname.git
```

### 2. Navigate to the project directory
```bash
cd yourprojectname
```

### 3. Install dependencies
To install the project dependencies, run:

```bash
npm install
```

or, if you are using Yarn:

```bash
yarn install
```

### 4. Start the development server
Launch the app in development mode using:

```bash
npm start
```

or:

```bash
yarn start
```

This command will run the app on `http://localhost:3000` by default.

### 5. Build for production (optional)
To create a production build of your project, use:

```bash
npm run build
```

or:

```bash
yarn build
```

The production build will be generated in the `build/` directory.

## Usage
Once the app is running, you can interact with it as follows:

- **Mouse Dragging**: Click and hold to drag the text around the canvas.
- **Font Style Controls**: Use the buttons to change the font style (bold, italic, etc.).
- **Undo/Redo**: Use the corresponding buttons to undo or redo your last action.

## Project Structure
Here's a brief overview of the folder structure:

- `src/`: Contains the main code of the application.
  - `components/`: React components used in the app (e.g., `Canvas`, `Navbar`).
  - `Context/`: Context provider and custom hooks for state management.
  - `App.js`: Main application entry point.
  - `index.js`: Entry point for React rendering.
- `public/`: Static assets and `index.html`.
- `node_modules/`: (Recreated by `npm install`) Contains project dependencies.
- `package.json`: Lists project dependencies and scripts.
- `.gitignore`: Specifies files and directories to be ignored by Git.

## Key Features
- **Customizable Text**: Adjust font size, color, and style.
- **Undo/Redo Functionality**: Navigate through changes made on the canvas.
- **Interactive Canvas**: Drag and drop the text elements across the canvas.

## Acknowledgements
This project makes use of:

- [React](https://reactjs.org/) for building the UI.
- [Tailwind CSS](https://tailwindcss.com/) for styling.

## Contact
For any questions or suggestions, feel free to contact at pooja13gupta09@gmail.com.