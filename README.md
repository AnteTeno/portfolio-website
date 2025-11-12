# Portfolio Website

A personal portfolio website showcasing my projects, experience, and journey in computer science and cybersecurity.

    anteteno.netlify.app
## About

This is a single-page React application built with Create React App. The site features a clean, modern design with smooth navigation between sections including:

- Hero/Introduction
- About & Skills
- Experience Timeline
- Projects Showcase
- My Story
- Contact Information

## Tech Stack

- **React** 19.2.0
- **React Icons** 5.5.0
- **React Scripts** 5.0.1 (Create React App)
- **Testing Library** (Jest + React Testing Library)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

### `npm start`
Runs the app in development mode with hot reloading.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder with optimized bundles.

## Project Structure

```
src/
├── components/          # React components
│   ├── Hero.js         # Landing section
│   ├── About.js        # Skills section
│   ├── Experience.js   # Work/education timeline
│   ├── Projects.js     # Portfolio projects
│   ├── Story.js        # Personal narrative
│   ├── Contact.js      # Contact information
│   ├── Sidebar.js      # Navigation sidebar
│   ├── Footer.js       # Footer section
│   └── *.css           # Component styles
├── App.js              # Main app component
└── index.js            # Entry point

public/                 # Static assets (images, logos)
```

## Customization

To update content:

- **Projects**: Edit the `projects` array in `src/components/Projects.js`
- **Experience**: Edit the `experiences` array in `src/components/Experience.js`
- **Social Links**: Update URLs in `src/components/Sidebar.js` and `src/components/SocialLinks.js`
- **Images**: Place in `public/` directory and reference with absolute paths (e.g., `/image.png`)

## Deployment

Build the production version:
```bash
npm run build
```

The `build` folder contains the optimized production build ready for deployment to any static hosting service.

## License

This project is open source and available for personal use.
