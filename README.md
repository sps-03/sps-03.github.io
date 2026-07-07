# Portfolio Website

Welcome to my personal portfolio website, where I showcase my projects, skills, and experience in web development and related technologies.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Customisation](#customisation)
- [Contact](#contact)

## Demo

[Live Demo](https://sps-03.github.io)

## Features

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices.
- **Interactive Hero**: Hexagon-framed profile photo with a tilt-on-hover effect, floating hexagon accents, and an animated particle-network background.
- **Animated Skill Icons**: Hexagon skill badges that float, tilt toward the cursor, and light up with a neon glow on hover.
- **Scroll-Aware Navbar**: Transparent at the top of the page, fading to solid as you scroll.
- **3D Desk Scene**: An interactive, lazy-loaded 3D developer desk model in the Contact section, built with Three.js and React Three Fiber.
- **Contact Form**: Sends messages directly via Web3Forms, with spam protection and inline success/error states.
- **Custom Cursor**: Smoothly animated custom cursor with inner and outer circles.
- **Site Analytics**: Google Analytics 4 integration for traffic, location, and engagement insights.
- **Tailwind CSS**: Fully styled using Tailwind for fast, scalable, and flexible design.
- **React Components**: Modular and reusable components for easy management and future expansion.

## Technologies Used

- **React**: Front-end framework for building UI.
- **Vite**: Fast build tool and dev server.
- **Tailwind CSS**: Utility-first CSS framework for rapid styling.
- **Framer Motion**: Animation library for React.
- **Three.js** (via **React Three Fiber** and **Drei**): Powers the 3D desk scene.
- **react-type-animation**: Typing animation effect in the Hero section.
- **react-scroll**: Smooth in-page navigation.
- **react-icons**: Icon set used throughout the site.
- **Web3Forms**: Backend for the contact form.
- **Google Analytics 4**: Site traffic and analytics.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sps-03/sps-03.github.io.git
   cd sps-03.github.io
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   ```bash
   cp .env.example .env
   ```

   Then fill in `VITE_WEB3FORMS_ACCESS_KEY` with your own [Web3Forms](https://web3forms.com/) access key so the contact form can send messages.

4. Start the development server:

   ```bash
   npm run dev
   ```

## Customisation

- You can modify the content (projects, skills, work experience, education) by editing the corresponding data in `src/data/data.js`.
- Update the profile image and other media by replacing the images in the `src/assets/` folder.
- Customise the website's colour palette by editing the `colors` values in `tailwind.config.js`.
- To use your own Google Analytics property, replace the Measurement ID in the `gtag.js` snippet in `index.html`.

## Contact

Feel free to reach out if you have any questions or want to connect:

- Email: mohammedshan.p.s@gmail.com
- LinkedIn: [mohammed-shan](https://www.linkedin.com/in/mohammed-shan/)
- GitHub: [sps-03](https://github.com/sps-03)

---

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
