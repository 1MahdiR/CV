# ⚡ Cyberpunk Portfolio (Amir Mahdi Rasouli)

> A high-performance, cyberpunk-themed personal portfolio website featuring interactive terminal elements, glitch aesthetics, and immersive audio effects.

![Version](https://img.shields.io/badge/version-2.0.1-cyan.svg)
![Status](https://img.shields.io/badge/system-Under%20Development-orange.svg)

## 📖 Overview

This project is a single-page application (SPA) designed to showcase my professional profile with a "System Breach" narrative. It moves away from traditional flat designs, offering a gamified user experience that feels like accessing a secure terminal.

**Live Demo:** [https://1mahdir.github.io/CV/](https://1mahdir.github.io/CV/)

## ✨ Key Features

### 🎮 Immersive Experience
* **Cinematic Intro:** "System Breach" sequence with audio unlocking and DOM manipulation.
* **Audio SFX:** Interactive sound effects for hovering, clicking, and system events.
* **Visual Effects:** CRT scanlines, RGB shifting, digital noise, and CSS-only glitch animations.

### ⚙️ Technical
* **Dynamic Content Engine:** All text (Bio, Skills, Projects) is loaded from a JSON-like structure in `script.js`, simulating a database fetch.
* **GitHub Integration:** Real-time fetching of lifetime commit stats via API.
* **Fully Responsive:** optimized layouts for Desktop, Tablet, and Mobile devices (Touch-enabled).
* **SEO & Social Ready:** configured with Open Graph, Twitter Cards, and meta tags for rich sharing previews on LinkedIn, X (Twitter), and Discord.
* **Dockerized:** Ready for production deployment with a lightweight Nginx (Alpine) container.

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (CSS Variables, Keyframe Animations, Grid/Flexbox), Vanilla JavaScript (ES6+).
* **No Frameworks:** Built without React/Vue/Angular for maximum performance and raw DOM control.
* **Assets:** SVG Icons, OGG Audio.
* **Deployment:** Docker, Nginx.

## 🚀 Getting Started

### Option 1: Run Locally

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/1MahdiR/CV](https://github.com/1MahdiR/CV)
    cd CV
    ```

2.  **Open `index.html`:**
    Simply double-click `index.html` to open it in your browser. Note: Some audio features may be blocked by browser autoplay policies until user interaction.

### Option 2: Run with Docker (Recommended)

This project includes a production-ready `Dockerfile`.

1.  **Build the image:**
    ```bash
    docker build -t cyberpunk-portfolio .
    ```

2.  **Run the container:**
    ```bash
    docker run -p 8080:80 cyberpunk-portfolio
    ```

3.  **Access the site:**
    Open `http://localhost:8080` in your browser.

## 📂 Project Structure

```text
CV/
├── Dockerfile              # Docker build instructions
├── nginx.conf              # Nginx server config (SPA routing)
├── index.html              # Main entry point (SEO & Meta tags included)
└── assets/                 # Static resources
    ├── css/                # Stylesheets (Animations, Responsive Media Queries)
    ├── js/                 # Logic & Content Database
    ├── img/                # Avatars, Logos, & OG Images
    ├── audio/              # SFX (.ogg files)
    └── docs/               # CV/Resume PDF
```
    
## 🎨 Customization

To adapt this portfolio for yourself, follow these steps:

1.  **Update Content:** Open `assets/js/script.js`. The database object contains all the text for the Bio, Skills, and Missions tabs. Change these values to match your own profile.

2.  **Update Images:** Replace `avatar.png` and `mr_logo.png` in the `assets/img/` folder with your own files (keep the filenames the same or update `index.html`).

3.  **Update CV:** Replace the file in `assets/docs/` with your own PDF.

4.  **GitHub Stats:** In `script.js`, find the `fetchGitHubStats` function and change the username variable to your own GitHub handle.

## 🌟 Support

If you like this project or use it for your own portfolio, please **give it a star ⭐** on GitHub! It helps others find it and keeps the updates coming.
