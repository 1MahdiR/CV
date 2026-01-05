# ⚡ Cyberpunk Portfolio

> A high-performance, cyberpunk-themed personal portfolio website featuring interactive terminal elements, glitch aesthetics, and immersive audio effects.

![Version](https://img.shields.io/badge/version-0.1.0-cyan.svg)
![Status](https://img.shields.io/badge/system-Under%20Development-orange.svg)

## 📖 Overview

This project is a single-page application (SPA) designed to showcase my profile with a "System Breach" narrative. It moves away from traditional flat designs, offering a gamified user experience that feels like accessing a secure terminal.

**Live Demo:** [https://1mahdir.github.io/CV/](https://1mahdir.github.io/CV/)

## ✨ Features

* **Cinematic Intro:** "System Breach" sequence with audio unlocking.
* **Immersive Audio:** UI sound effects.
* **Visual Effects:** CRT scanlines, RGB shifting, digital noise, and CSS-only glitch animations.
* **Dynamic Content:** Typing effects for text and "System Logs" for background history.
* **GitHub Integration:** Fetches and displays lifetime commit stats via API.
* **Dockerized:** Ready for production deployment with Nginx (Alpine).

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (Variables, Animations, Flexbox/Grid), Vanilla JavaScript (ES6+).
* **Assets:** SVG Icons (FontAwesome), OGG Audio.
* **Deployment:** Docker, Nginx (Alpine Linux).

## 🚀 Getting Started

### Option 1: Run Locally

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/1MahdiR/CV/](https://github.com/1MahdiR/CV/)
    cd CV
    ```

2.  **Open `index.html`:**
    Simply double-click `index.html` to open it in your browser.

### Option 2: Run with Docker (Recommended)

This project includes a production-ready `Dockerfile` using Nginx.

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
netrunner-portfolio/
├── Dockerfile              # Docker build instructions
├── nginx.conf              # Custom Nginx server config
├── index.html              # Main application entry
└── assets/                 # Static resources
    ├── css/                # Stylesheets
    ├── js/                 # Logic & Content Database
    ├── img/                # Avatars & Logos
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