// --- DATABASE ---
const database = {
    profile: {
        items: [
            {
                label: "About",
                content: `
                    <div class="bio-container fade-in">
                        <h1 class="glitch-header">AMIR MAHDI RASOULI</h1>
                        <h3 class="sub-header">BACKEND & SYSTEMS ENGINEER</h3>

                        <div style="display: flex; gap: 20px; margin: 15px 0; border-bottom: 1px solid #333; padding-bottom: 15px;">
                            <span class="terminal-text" style="color: var(--cp-yellow);"><i class="fas fa-user-clock"></i> 24 Years Old</span>
                            <span class="terminal-text" style="color: var(--cp-yellow);"><i class="fas fa-map-marker-alt"></i> Tehran, Iran</span>
                        </div>

                        <p class="terminal-text">
                            <strong>// SYSTEM SUMMARY</strong><br/>
                            I am a Computer Engineering graduate and currently a Master's student in Computer Architecture at <span class="highlight">Sharif University of Technology</span>. My academic work centers on dependable edge/fog computing, real-time systems, and distributed computing.
                        </p>

                        <p class="terminal-text">
                            Professionally, I have over <span class="highlight">5 years of experience</span> as a programmer. While my primary focus is building scalable backend architectures using <strong>Python (Django)</strong> and <strong>DevOps</strong> workflows, I am a versatile engineer. My background includes significant experience in <strong>Front-end development</strong> (JavaScript) and <strong>Android app development</strong> (Java), allowing me to understand the full lifecycle of software products.
                        </p>

                        <p class="terminal-text" style="color: #aaa; font-size: 0.9em; font-style: italic;">
                            Outside of work, I'm passionate about the Open Source community, Linux systems, Network Security, Indie Games, and Metal/Rock music.
                        </p>

                        <div class="exploration-hub">
                            <p class="terminal-text" style="text-align: center; color: #ccc; margin-bottom: 20px; font-style: normal;">
                                Feel free to look around. You can find my tech stack, projects, and background details below.
                            </p>
                            
                            <div class="hub-grid">
                                <button class="hub-btn" onclick="document.querySelector('[data-target=Background]').click()">
                                    <i class="fas fa-history"></i>
                                    <span>Background</span>
                                </button>

                                <button class="hub-btn" onclick="document.querySelector('[data-target=skills]').click()">
                                    <i class="fas fa-microchip"></i>
                                    <span>Skills</span>
                                </button>

                                <button class="hub-btn" onclick="document.querySelector('[data-target=missions]').click()">
                                    <i class="fas fa-tasks"></i>
                                    <span>Missions</span>
                                </button>
                            </div>
                        </div>
                    </div>`
            },
            {
                label: "Background",
                content: `
                    <div class="content-wrapper">
                        <h1>CONTACT UPLINK</h1>
                        <p>STATUS: <span class="highlight">AVAILABLE FOR HIRE</span></p>
                        <p>Email: <span class="highlight">a.m.rasouli.n@gmail.com</span></p>
                        <p>Phone: +98 996 699 8507</p>
                        <p>Base: Tehran, Iran</p>
                        <br>
                        <h3>SECURE CHANNELS</h3>
                        <p>LINKEDIN: /in/amir-mahdi-rasouli</p>
                        <p>GITHUB: /amir-rasouli</p>
                    </div>`
            },
            {
                label: "Connect",
                content: `
                    <style>
                        /* PAGE SPECIFIC STYLES */
                        .status-bar { display: flex; gap: 15px; font-size: 0.75rem; color: #555; margin-bottom: 20px; border-bottom: 1px dashed #333; padding-bottom: 5px; flex-wrap: wrap; }
                        .status-item i { margin-right: 5px; color: var(--cp-blue); }
                        .burner-active { filter: grayscale(100%) contrast(1.5) brightness(0.8); }
                        .burner-btn.active { background: var(--cp-red); color: #000; box-shadow: 0 0 15px var(--cp-red); }
                        .hex-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(20px, 1fr)); gap: 2px; opacity: 0.2; margin-bottom: 15px; }
                        .hex { height: 4px; background: var(--cp-cyan); }
                        .input-cyber { background: rgba(0,0,0,0.5); border: 1px solid #444; color: var(--cp-yellow); padding: 8px; font-family: monospace; width: 100%; margin-top: 5px; outline: none; transition: 0.3s; }
                        .input-cyber:focus { border-color: var(--cp-yellow); box-shadow: 0 0 10px rgba(252, 238, 9, 0.2); }
                    </style>

                    <div class="content-wrapper" id="connect-interface">

                        <h1 class="glitch-header">CONNECT</h1>
                        <div class="status-bar">
                            <span class="status-item"><i class="fas fa-globe"></i> LOC: TEHRAN (GMT+3.5)</span>
                            <span class="status-item"><i class="fas fa-clock"></i> UPTIME: N/A</span>
                            <span class="status-item"><i class="fas fa-shield-alt"></i> SECURITY: ENCRYPTED (TLS 1.3)</span>
                            <span class="status-item" style="margin-left: auto; color: var(--cp-green);"><i class="fas fa-signal"></i> SIGNAL: STRONG</span>
                        </div>

                        <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 25px;">
                            
                            <div class="mission-card" style="flex: 1 1 300px; margin: 0; display: flex; flex-direction: column;">
                                <h2><i class="fas fa-broadcast-tower"></i> DIRECT FREQUENCIES</h2>

                                <ul class="terminal-list" style="padding-left:0; list-style:none; flex-grow: 1;">
                                    
                                    <li style="margin-bottom: 15px; border-left: 2px solid var(--cp-yellow); padding-left: 10px;">
                                        <span style="font-size: 0.7em; color: #aaa;">// PRIMARY_MAIL_RELAY</span><br>
                                        <a href="mailto:a.m.rasouli.n@gmail.com" class="highlight" style="text-decoration: none; border-bottom: 1px dotted var(--cp-yellow);">
                                            a.m.rasouli.n@gmail.com <i class="fas fa-envelope" style="margin-left: 8px;"></i>
                                        </a>
                                    </li>

                                    <li style="margin-bottom: 15px; border-left: 2px solid var(--cp-red); padding-left: 10px;">
                                        <span style="font-size: 0.7em; color: #aaa;">// VOICE_LINE_SECURE</span><br>
                                        <span style="font-family: monospace; letter-spacing: 2px; color: var(--cp-red); filter: blur(3px);">
                                            +98 *** *** **** <i class="fas fa-phone-alt" style="margin-left: 8px;"></i>
                                        </span>
                                        <span style="font-size: 1em; border: 1px solid var(--cp-red); color: var(--cp-red); padding: 0 4px; margin-left: 10px; cursor: pointer;" 
                                              onclick="alert('// ACCESS DENIED \\n\\nVoice line is restricted to authorized personnel. Please establish initial handshake via Email.')">
                                            [DECRYPT] <i class="fas fa-key" style="margin-left: 5px;"></i>
                                        </span>
                                    </li>

                                    <li style="margin-bottom: 15px; border-left: 2px solid #0088cc; padding-left: 10px;">
                                        <span style="font-size: 0.7em; color: #aaa;">// TELEGRAM_MESSAGING</span><br>
                                        <a href="https://t.me/Raysoull" target="_blank" style="text-decoration: none; border: none; display: inline-flex; align-items: center; gap: 8px;">
                                            <span style="color: #fff;">@Raysoull</span>
                                            <i class="fab fa-telegram-plane" style="color: #0088cc;"></i> 
                                        </a>
                                    </li>

                                    <li style="margin-bottom: 15px; border-left: 2px solid #5865F2; padding-left: 10px;">
                                        <span style="font-size: 0.7em; color: #aaa;">// DISCORD</span><br>
                                        <div style="display: inline-flex; align-items: center; gap: 8px; color: #ccc;">
                                            <span>@__raysoul__</span>
                                            <i class="fab fa-discord" style="color: #5865F2;"></i> 
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div class="mission-card" style="flex: 1 1 300px; margin: 0; display: flex; flex-direction: column;">
                                <h2><i class="fas fa-project-diagram"></i> NEURAL NODES</h2>

                                <ul class="terminal-list" style="padding-left:0; list-style:none; flex-grow: 1;">
                                    
                                    <li style="margin-bottom: 15px; border-left: 2px solid #0077b5; padding-left: 10px;">
                                        <span style="font-size: 0.7em; color: #aaa;">// PROFESSIONAL_NET</span><br>
                                        <a href="https://www.linkedin.com/in/amir-mahdi-rasouli" target="_blank" style="text-decoration: none; border: none; display: inline-flex; align-items: center; gap: 8px;">
                                            <span style="color: #fff;">LINKEDIN [VERIFIED]</span>
                                            <i class="fab fa-linkedin" style="color: #0077b5;"></i>
                                        </a>
                                    </li>

                                    <li style="margin-bottom: 15px; border-left: 2px solid #fff; padding-left: 10px;">
                                        <span style="font-size: 0.7em; color: #aaa;">// PROJECTS</span><br>
                                        <a href="https://github.com/1MahdiR" target="_blank" style="text-decoration: none; border: none; display: inline-flex; align-items: center; gap: 8px;">
                                            <span style="color: #fff;">GITHUB REPO</span>
                                            <i class="fab fa-github" style="color: #fff;"></i>
                                        </a>
                                    </li>

                                    <li style="margin-bottom: 15px; border-left: 2px solid #0088cc; padding-left: 10px;">
                                        <span style="font-size: 0.7em; color: #aaa;">// TELEGRAM_CHANNEL</span><br>
                                        <a href="https://t.me/mr_var_log" target="_blank" style="text-decoration: none; border: none; display: inline-flex; align-items: center; gap: 8px;">
                                            <span style="color: #fff;">@mr_var_log</span>
                                            <i class="fas fa-broadcast-tower" style="color: #0088cc;"></i>
                                        </a>
                                    </li>

                                    <li style="margin-bottom: 15px; border-left: 2px solid #ff0000; padding-left: 10px;">
                                        <span style="font-size: 0.7em; color: #aaa;">// VISUAL_DB</span><br>
                                        <a href="#" target="_blank" style="text-decoration: none; border: none; display: inline-flex; align-items: center; gap: 8px;">
                                            <span style="color: #fff;">YOUTUBE CHANNEL</span>
                                            <i class="fab fa-youtube" style="color: #ff0000;"></i>
                                        </a>
                                    </li>

                                    <li style="margin-bottom: 15px; border-left: 2px solid #4285F4; padding-left: 10px;">
                                        <span style="font-size: 0.7em; color: #aaa;">// ACADEMIC_INDEX</span><br>
                                        <a href="#" target="_blank" style="text-decoration: none; border: none; display: inline-flex; align-items: center; gap: 8px;">
                                            <span style="color: #fff;">GOOGLE SCHOLAR</span>
                                            <i class="fas fa-graduation-cap" style="color: #4285F4;"></i>
                                        </a>
                                    </li>

                                    <li style="margin-bottom: 15px; border-left: 2px solid #555; padding-left: 10px; opacity: 0.6; filter: grayscale(100%);">
                                        <span style="font-size: 0.7em; color: #aaa;">// SOCIAL_MEDIA</span><br>
                                        <div style="display: inline-flex; align-items: center; gap: 8px; color: #777; cursor: not-allowed;">
                                            <span>INSTAGRAM [OFFLINE]</span>
                                            <i class="fab fa-instagram"></i>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div style="margin-top: 30px; text-align: center; position: relative; padding: 20px; border: 1px dashed #333; background: rgba(0,0,0,0.2);">
                            <span style="position: absolute; top: -10px; left: 50%; transform: translateX(-50%); background: #050505; padding: 0 10px; color: #666; font-size: 0.8rem;">DATA_EXFILTRATION_PORT</span>
                            
                            <a href="assets/docs/Amir_Mahdi_Rasouli_CV.pdf" download class="hub-btn" style="display: inline-flex; flex-direction: row; width: auto; max-width: 100%; border-color: var(--cp-yellow); color: var(--cp-yellow);">
                                <span>DOWNLOAD FULL CV DATA</span>
                                <i class="fas fa-file-download" style="margin-left: 8px;"></i>
                            </a>
                            <p style="font-size: 0.7em; color: #555; margin-top: 10px;">SHA-256: 8a9d...f4e2 | Size: 114KB | Checked</p>
                        </div>

                    </div>`
            }
        ]
    },
    skills: {
        items: [
            {
                label: "Tech Stack",
                content: `
                    <div class="content-wrapper">
                        <h1>TECHNICAL ARSENAL</h1>
                        <h3>BACKEND & SYSTEMS</h3>
                        <div class="skill-container">
                            <div class="skill-label"><span>Python / Django / DRF</span><span>95%</span></div>
                            <div class="progress-bar-bg"><div class="fill" style="width: 95%"></div></div>
                        </div>
                        <div class="skill-container">
                            <div class="skill-label"><span>Docker / CI/CD (GitHub Actions)</span><span>85%</span></div>
                            <div class="progress-bar-bg"><div class="fill" style="width: 85%"></div></div>
                        </div>
                        <div class="skill-container">
                            <div class="skill-label"><span>Linux / Bash Scripting</span><span>90%</span></div>
                            <div class="progress-bar-bg"><div class="fill" style="width: 90%"></div></div>
                        </div>
                        <div class="skill-container">
                            <div class="skill-label"><span>Microservices / Distributed Systems</span><span>80%</span></div>
                            <div class="progress-bar-bg"><div class="fill" style="width: 80%"></div></div>
                        </div>
                    </div>`
            },
            {
                label: "Research",
                content: `
                    <div class="content-wrapper">
                        <h1>RESEARCH & AI</h1>
                        <p><strong>AI:</strong> Machine Learning, Deep Learning, Reinforcement Learning, TensorFlow.</p>
                        <p><strong>Tools:</strong> SimPy, EdgeSimPy, Gem5, LaTeX.</p>
                    </div>`
            },
            {
                label: "Languages",
                content: `
                    <div class="content-wrapper">
                        <h1>LANGUAGES</h1>
                        <p><strong>English:</strong> Professional Working Proficiency.</p>
                        <p><strong>Persian (Farsi):</strong> Native Speaker.</p>
                    </div>`
            }
        ]
    },
    missions: {
        items: [
            {
                label: "Professional",
                content: `
                    <div class="content-wrapper">
                        <h1>MISSION LOG (PROFESSIONAL)</h1>
                        <div class="mission-card">
                            <h2>BACKEND ENGINEER</h2>
                            <p class="highlight">Aalibaf Industrial Project (Sharif University) | Oct 2024 - Mar 2025</p>
                            <p>Architected scalable backend services using Django and Django REST Framework. Designed high-performance REST APIs to handle industrial data traffic.</p>
                            <div class="tags"><span>DJANGO</span><span>REST API</span><span>DOCKER</span></div>
                        </div>
                        <div class="mission-card">
                            <h2>BACKEND & SYSTEMS ENGINEER</h2>
                            <p class="highlight">Roupel Dataware Co. | July 2021 - Sep 2023</p>
                            <p>Developed core backend architecture for data-centric web applications. Designed efficient database schemas for large-scale datasets reducing query overhead.</p>
                            <div class="tags"><span>LINUX</span><span>POSTGRESQL</span><span>AUTOMATION</span></div>
                        </div>
                    </div>`
            },
            {
                label: "Academic",
                content: `
                    <div class="content-wrapper">
                        <h1>MISSION LOG (ACADEMIC)</h1>
                        <div class="mission-card">
                            <h2>RESEARCH ASSISTANT</h2>
                            <p class="highlight">Institute for Research in Fundamental Sciences (IPM) | Jan 2024 - Present</p>
                            <p>Conducted research on resource allocation and optimization algorithms in Edge Computing. Developed Python-based simulation frameworks for IoT reliability analysis.</p>
                            <div class="tags"><span>R&D</span><span>PYTHON</span><span>EDGE COMPUTING</span></div>
                        </div>
                    </div>`
            },
            {
                label: "Projects",
                content: `
                    <div class="content-wrapper">
                        <h1>SIDE QUESTS</h1>
                        <ul style="list-style:none; color:#bbb;">
                            <li>> <strong>DJUNGOOL:</strong> Django Code Generator CLI (Automation, String Parsing).</li>
                            <li>> <strong>NMAPY:</strong> Interactive Network Scanner (Python, Socket API).</li>
                            <li>> <strong>RASOUL:</strong> Reliability-Aware Resource Allocation Algorithm.</li>
                        </ul>
                    </div>`
            }
        ]
    },
    archives: {
        items: [
            {
                label: "Education",
                content: `
                    <div class="content-wrapper">
                        <h1>DATA ARCHIVES (EDUCATION)</h1>
                        <p><strong class="highlight">M.Sc. in Computer Engineering</strong> @ Sharif University of Technology</p>
                        <p>Sep 2023 - Present | GPA: 17/20</p>
                        <p><em>Thesis: Reliability-Aware Task Mapping and Scheduling in Edge Computing Environments.</em></p>
                        <br>
                        <p><strong class="highlight">B.Sc. in Computer Engineering</strong> @ Arak University</p>
                        <p>Sep 2019 - Sep 2023 | GPA: 18/20 (Ranked 1st).</p>
                    </div>`
            },
            {
                label: "Publications",
                content: `
                    <div class="content-wrapper">
                        <h1>PUBLICATIONS</h1>
                        <p>> <strong>RASOUL:</strong> A Reliability-Aware Task Allocation Strategy... (IEEE Internet of Things Journal, 2025).</p>
                        <p>> <strong>Genetic-based Framework:</strong> Joint Latency and Cost Reduction... (CPSAT, 2024).</p>
                        <p>> <strong>Two-State Energy-Efficient Strategy:</strong> (IEEE Embedded System Letters, 2025).</p>
                        <p>> <strong>TORE-NET:</strong> Task Replication in MEC (Submitted to RTAS 2026).</p>
                    </div>`
            }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements for Init
    const parentStartScreen = document.getElementById('start-screen');
    const startScreen = document.getElementById('sys-lock-container');
    const loaderWrapper = document.getElementById('loader-wrapper');
    // REMOVED: unused 'breachBtn' variable

    // --- UPDATED PATH HERE ---
    const breachSound = new Audio('assets/audio/breach_in.ogg');
    breachSound.volume = 0.4; 
    
    // Initially hide the loader so it doesn't play in the background
    loaderWrapper.style.display = 'none';

    // Event Listener for Click
    startScreen.addEventListener('click', initiateBreach);
    
    // Event Listener for Keyboard (Enter)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && startScreen.style.display !== 'none') {
            initiateBreach();
        }
    });

    const mobileBtn = document.getElementById('mobile-menu-toggle');
    const navCluster = document.getElementById('nav-cluster');
    const navTabs = document.querySelectorAll('.tab');
    
    const identityBtn = document.getElementById('mobile-identity-toggle');
    const sidebar = document.querySelector('.sidebar');

    // 1. Helper to Lock/Unlock Scroll
    function toggleScrollLock(shouldLock) {
        if(shouldLock) {
            document.body.classList.add('scroll-locked');
        } else {
            document.body.classList.remove('scroll-locked');
        }
    }

    // 2. Right Menu Logic (Navigation)
    if(mobileBtn && navCluster) {
        mobileBtn.addEventListener('click', () => {
            const isActive = navCluster.classList.toggle('active');
            toggleScrollLock(isActive); // Freeze/Unfreeze body
            
            // Exclusive Mode: Close Left Panel if it's open
            if(sidebar && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                if(identityBtn) {
                    identityBtn.innerText = "[ ID_ACCESS ]";
                    identityBtn.style.color = "";
                    identityBtn.style.borderColor = "";
                }
            }
            
            // Visual Updates
            if(isActive) {
                mobileBtn.innerText = "[ MENU_ACCESS ]";
                mobileBtn.style.color = "var(--cp-red)";
                mobileBtn.style.borderColor = "var(--cp-red)";
            } else {
                mobileBtn.innerText = "[ MENU_ACCESS ]";
                mobileBtn.style.color = "var(--cp-blue)";
                mobileBtn.style.borderColor = "var(--cp-blue)";
            }
        });

        // Close menu & unlock scroll when a tab is clicked
        navTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                if(window.innerWidth <= 950) {
                    navCluster.classList.remove('active');
                    toggleScrollLock(false); // <--- CRITICAL: Unlocks scroll
                    
                    mobileBtn.innerText = "[ MENU_ACCESS ]";
                    mobileBtn.style.color = "var(--cp-blue)";
                    mobileBtn.style.borderColor = "var(--cp-blue)";
                }
            });
        });
    }

    // 3. Left Drawer Logic (Identity)
    if(identityBtn && sidebar) {
        identityBtn.addEventListener('click', () => {
            const isActive = sidebar.classList.toggle('active');
            toggleScrollLock(isActive); // Freeze/Unfreeze body

            // Exclusive Mode: Close Right Menu if it's open
            if(navCluster && navCluster.classList.contains('active')) {
                navCluster.classList.remove('active');
                if(mobileBtn) {
                    mobileBtn.innerText = "[ MENU_ACCESS ]";
                    mobileBtn.style.color = "var(--cp-blue)";
                    mobileBtn.style.borderColor = "var(--cp-blue)";
                }
            }

            // Visual Updates
            if(isActive) {
                identityBtn.innerText = "[ ID_ACCESS ]";
                identityBtn.style.color = "var(--cp-red)";
                identityBtn.style.borderColor = "var(--cp-red)";
            } else {
                identityBtn.innerText = "[ ID_ACCESS ]";
                identityBtn.style.color = "";
                identityBtn.style.borderColor = "";
            }
        });
    }

    function initiateBreach() {
        // 1. Audio Unlock
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioCtx = new AudioContext();
        audioCtx.resume();
        
        breachSound.play().catch(() => {});

        // 2. Visual Transition
        startScreen.classList.add('breach-mode'); 
        
        // 3. Wait for animation to finish then swap screens
        setTimeout(() => {
            startScreen.remove(); 
            
            loaderWrapper.style.display = 'flex'; 
            runSystemBoot(); 
        }, 500); 
        
        setTimeout(() => {
            parentStartScreen.remove();
            if(startScreen) startScreen.remove(); 
            
            loaderWrapper.style.display = 'flex'; 
            runSystemBoot(); 
        }, 500);
    }
});

function runSystemBoot() {
    const loader = document.getElementById('loader-wrapper');
    const progressBar = document.getElementById('progress-bar');
    const terminalList = document.getElementById('terminal-lines');
    const mainContainer = document.getElementById('main-interface-container');
    const turbulenceNode = document.getElementById('turbulence-node');
    const codeContainer = document.getElementById('code-container');
    
    // --- 1. BOOT SEQUENCE ---
    const bootText = [
        "INITIALIZING KERNEL...", "CHECKING MEMORY...", "LOADING DRIVERS: NEURAL_LINK_V2.1...", 
        "CONNECTING TO SHARIF_UNIV_DB...", "USER FOUND: AMIR MAHDI RASOULI...", 
        "DECRYPTING PROFILE DATA...", "LOADING MODULE: DJANGO_FRAMEWORK...", 
        "LOADING MODULE: AI_ALGORITHMS...", "CALIBRATING OPTICS...", "SYSTEM READY."
    ];
    let lineIndex = 0;
    
    const logInterval = setInterval(() => {
        if (lineIndex < bootText.length && Math.random() > 0.4) {
            const li = document.createElement('li');
            li.innerText = "> " + bootText[lineIndex];
            if(Math.random() > 0.8) li.style.color = "var(--cp-yellow)";
            terminalList.appendChild(li);
            terminalList.parentElement.scrollTop = terminalList.parentElement.scrollHeight;
            lineIndex++;
        }
    }, 100);

    // --- DELAYED START ---
    let visualInterval, codeSpawnInterval, progressInterval;

    setTimeout(() => {
        visualInterval = setInterval(() => {
            if (Math.random() > 0.65) {
                fireGlitch(loader, 3, 80); 
            }
        }, 100);

        codeSpawnInterval = setInterval(spawnTypingCode, 200);

        let currentProgress = 10; 
        progressBar.style.width = currentProgress + "%";
        progressInterval = setInterval(() => {
            if(currentProgress < 90) {
                currentProgress += Math.random() * 5; 
                if(currentProgress > 90) currentProgress = 90;
                progressBar.style.width = currentProgress + "%";
            }
        }, 200);

    }, 500);

    // --- 2. LOG TYPER ---
    const codeLibrary = [
        "[SYSTEM] Initializing neural interface... SUCCESS",
        "[KERNEL] Loading module: cyberdeck_v4.ko",
        "[AUTH] User login attempt: admin (192.168.0.55) - DENIED",
        "[NET] Establishing encrypted tunnel to 10.0.0.1:443...",
        "[WARN] CPU temp critical: 85°C. Throttling active.",
        "[DB] Executing migration: 004_add_cybernetics_table.py",
        "[SECURITY] Intrusion detected on port 22. IP blocked.",
        "[DAEMON] Restarting service: nginx.service",
        "[MEM] Allocating 1024MB for process ID 4492",
        "[API] GET /api/v1/users/profile - 200 OK (14ms)"
    ];

    function spawnTypingCode() {
        const snippet = document.createElement('div');
        snippet.className = 'code-snippet';
        snippet.style.top = (Math.random() * 90) + "%";
        snippet.style.left = (Math.random() * 90) + "%";
        snippet.style.fontSize = (10 + Math.random() * 6) + "px";
        codeContainer.appendChild(snippet);

        const codeText = codeLibrary[Math.floor(Math.random() * codeLibrary.length)];
        let charIndex = 0;
        const typeSpeed = 10 + Math.random() * 40;

        const typeInterval = setInterval(() => {
            if (charIndex < codeText.length) {
                snippet.innerText += codeText.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typeInterval);
                setTimeout(() => {
                    snippet.remove();
                }, 1000 + Math.random() * 1000);
            }
        }, typeSpeed);
    }

    // --- AUDIO SYSTEM UPDATED PATHS ---
    const tabSound = new Audio('assets/audio/tab_open.ogg');
    tabSound.volume = 0.1; 
    const menuEnterSound = new Audio('assets/audio/main_menu_enter.ogg');
    menuEnterSound.volume = 0.2; 

    setTimeout(fetchGitHubStats, 2500);

    function playTabSound() {
        tabSound.currentTime = 0; 
        tabSound.play().catch(e => console.log("Audio play failed:", e));
    }

    // --- 3. SMART LOADING COMPLETION ---
    const minTimePromise = new Promise(resolve => setTimeout(resolve, 2000));
    const windowLoadPromise = new Promise(resolve => {
        if (document.readyState === 'complete') {
            resolve();
        } else {
            window.addEventListener('load', resolve);
        }
    });
    const maxTimePromise = new Promise(resolve => setTimeout(resolve, 6000));

    Promise.all([minTimePromise, Promise.race([windowLoadPromise, maxTimePromise])]).then(() => {
        clearInterval(logInterval);
        if(progressInterval) clearInterval(progressInterval);
        if(visualInterval) clearInterval(visualInterval);
        if(codeSpawnInterval) clearInterval(codeSpawnInterval); 
        progressBar.style.width = "100%";
        const li = document.createElement('li');
        li.innerText = "> EXECUTE: SYSTEM_INIT";
        li.style.color = "#00F0FF";
        terminalList.appendChild(li);
        
        finishLoading();
    });

    // --- 4. GLITCH GENERATOR ---
    function fireGlitch(targetElement, intensity = 2, duration = 100) {
        if (!targetElement) return;
        const sliceCount = 5 + Math.floor(Math.random() * intensity);
        for (let j = 0; j < sliceCount; j++) {
            const clone = targetElement.cloneNode(true);
            clone.classList.add('glitch-slice');
            clone.removeAttribute('id');
            const nodes = clone.getElementsByTagName('*');
            for(let node of nodes) node.removeAttribute('id');

            const top = Math.random() * 50;
            const height = 2 + Math.random() * 40; 
            const bottom = 120 - (top + height);
            clone.style.clipPath = `inset(${top}% 0 ${bottom}% 0)`;

            const translate = (Math.random() * 50 - 0.5) * 40; 
            const skew = (Math.random() - 0.5) * 20; 
            clone.style.transform = `translate(${translate}px, ${top}px) skew(${skew}deg)`;

            document.body.appendChild(clone);
            setTimeout(() => clone.remove(), duration);
        }
    }

    // --- GITHUB STATS MODULE (LIFETIME) ---
    async function fetchGitHubStats() {
        const username = '1MahdiR';
        const statsElement = document.getElementById('github-stats');
        
        // Public proxy API 
        const apiUrl = `https://github-contributions-api.jogruber.de/v4/${username}`;
    
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error('Network response was not ok');
            
            const data = await response.json();
            
            // We only want to sum the specific calendar years (keys that look like "202X")
            let lifetimeTotal = 0;
            
            for (const [key, value] of Object.entries(data.total)) {
                if (/^\d{4}$/.test(key)) {
                    lifetimeTotal += value;
                }
            }
    
            updateStatsWithGlitch(statsElement, lifetimeTotal);
            
        } catch (error) {
            console.error('GitHub API Error:', error);
            statsElement.innerText = "OFFLINE";
            statsElement.style.color = "var(--cp-red)";
        }
    }
    
    function updateStatsWithGlitch(element, finalValue) {
        let currentVal = 0;
        const duration = 2500; // 2.5 seconds animation
        const startTime = performance.now();
    
        function step(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
    
            // Ease-out expo function: starts fast, lands soft
            const ease = 1 - Math.pow(2, -10 * progress);
            
            currentVal = Math.floor(ease * finalValue);
            element.innerText = currentVal;
    
            if (progress < 1) {
                // Randomly jiggle/glitch the text during counting
                if (Math.random() > 0.8) {
                    element.style.textShadow = "2px 0 var(--cp-red), -2px 0 var(--cp-blue)";
                } else {
                    element.style.textShadow = "none";
                }
                requestAnimationFrame(step);
            } else {
                // Final Clean State
                element.innerText = finalValue;
                element.style.textShadow = "0 0 5px var(--cp-yellow)";
            }
        }
        requestAnimationFrame(step);
    }

    // --- 5. TRANSITION CONTROLLER ---
    function finishLoading() {
        document.body.classList.add('distort-active');
        const startTime = Date.now();
        const duration = 250; 
        function distortFrame() {
            const elapsed = Date.now() - startTime;
            if (elapsed < duration) {
                const freqX = 0.01 + Math.random() * 0.05;
                const freqY = 0.005 + Math.random() * 0.05;
                turbulenceNode.setAttribute('baseFrequency', `${freqX} ${freqY}`);
                requestAnimationFrame(distortFrame);
            }
        }
        distortFrame();

        const burst = setInterval(() => { fireGlitch(loader, 8, 50); }, 50);

        setTimeout(() => {
            clearInterval(burst);
            document.body.classList.remove('distort-active');
            loader.style.display = 'none';
            mainContainer.classList.add('visible');

            menuEnterSound.play().catch(() => {});

            const mainBurst = setInterval(() => { fireGlitch(mainContainer, 12, 50); }, 50);
            
            generateSidebarStats();

            setTimeout(() => { 
                clearInterval(mainBurst); 
                // START INITIAL LOAD HERE
                loadCategory('profile');
                playTabSound();
            }, 20);
        }, 250);
    }

    // --- 6. NAVIGATION LOGIC ---
    const tabs = document.querySelectorAll('.tab');
    const subNavBar = document.getElementById('sub-nav-bar');
    const contentDisplay = document.getElementById('content-display');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            if (e.target.classList.contains('active')) return;
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            loadCategory(tab.getAttribute('data-target'));
        });
    });

    function loadCategory(category) {
        playTabSound();
        subNavBar.innerHTML = '';
        const data = database[category];
        
        data.items.forEach((item, index) => {
            const btn = document.createElement('div');
            btn.className = 'sub-nav-item';
            btn.innerText = item.label;
            btn.dataset.target = item.label;
            
            if(index === 0) {
                btn.classList.add('active');
                setTimeout(() => loadContent(item.content), 10);
            }

            btn.onclick = (e) => {
                if (e.target.classList.contains('active')) return; 
                document.querySelectorAll('.sub-nav-item').forEach(i => i.classList.remove('active'));
                e.target.classList.add('active');
                loadContent(item.content);
            };
            subNavBar.appendChild(btn);
        });
    }

    // --- CONTENT TYPING LOGIC ---
    function loadContent(htmlContent) {
        playTabSound();
        contentDisplay.innerHTML = '<div class="decrypt-loader">> DECRYPTING DATA STREAM...</div>';
        
        setTimeout(() => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = htmlContent.replace(/\+\]/g, "");
            contentDisplay.innerHTML = ''; 
            
            const children = Array.from(tempDiv.children);
            let finalChildren = children;
            if (children.length === 1 && children[0].classList.contains('content-wrapper')) {
                finalChildren = Array.from(children[0].children);
            }

            finalChildren.forEach((child, index) => {
                const node = child.cloneNode(true);
                contentDisplay.appendChild(node);
                
                if (node.classList.contains('mission-card') || node.classList.contains('content-wrapper')) {
                    node.classList.add('scan-build');
                } else if (['H1', 'H2'].includes(node.tagName)) {
                    node.classList.add('header-glitch-in');
                }
                
                node.style.opacity = '1';

                if (['H1', 'H2', 'P', 'LI'].includes(node.tagName)) {
                    typeTextSafely(node);
                }
                
                if (node.classList.contains('mission-card') || node.tagName === 'DIV') {
                    const childTexts = node.querySelectorAll('h1, h2, p, li, span:not(.fill)');
                    childTexts.forEach(ct => typeTextSafely(ct));
                }

                if(node.classList.contains('skill-container')) {
                    const bar = node.querySelector('.fill');
                    if(bar) {
                        const w = bar.style.width;
                        bar.style.width = '0%'; 
                        bar.style.transition = 'none'; 
                        bar.offsetHeight; 
                        bar.style.transition = 'width 1s ease-in-out'; 
                        setTimeout(() => bar.style.width = w, 100);
                    }
                }
            });
            
            setTimeout(() => fireGlitch(contentDisplay, 5, 150), 300);

        }, 500); 
    }

    function typeTextSafely(element) {
        const textNodes = [];
        const walk = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
        let n;
        while(n = walk.nextNode()) textNodes.push(n);

        const originalTexts = textNodes.map(n => n.nodeValue);
        textNodes.forEach(n => n.nodeValue = '');

        let nodeIndex = 0;
        let charIndex = 0;
        const charsPerTick = 3;

        function typeLoop() {
            if (nodeIndex >= textNodes.length) return;

            const currentNode = textNodes[nodeIndex];
            const fullText = originalTexts[nodeIndex];

            if (charIndex < fullText.length) {
                const nextChunk = fullText.substring(charIndex, charIndex + charsPerTick);
                currentNode.nodeValue += nextChunk;
                charIndex += charsPerTick;
                setTimeout(typeLoop, 2); 
            } else {
                nodeIndex++;
                charIndex = 0;
                setTimeout(typeLoop, 2);
            }
        }
        typeLoop();
    }

    // --- SIDEBAR STATS ---
    function generateSidebarStats() {
        const statsContainer = document.getElementById('sidebar-stats-box');
        if(!statsContainer) return;
        statsContainer.innerHTML = '';

        const stats = [
            { label: "ROLE", val: "Engineer / R&D" },
            { label: "AGE", val: "24 Years" },
            { label: "GENDER", val: "Male (He/Him)" },
            { label: "LOCATION", val: "Tehran, Iran" },
            { label: "EDUCATION", val: "M.Sc. Comp. Eng." },
            { label: "INSTITUTE", val: "Sharif Univ." },
            { label: "FOCUS", val: "Distributed Sys." },
            { label: "EXPERIENCE", val: "+5 Years" },
            { label: "AVAILABILITY", val: "Open to Work" },
            { label: "OS", val: "GNU/Linux" },
            { label: "MODE", val: "Deep Work" },
            { label: "UPTIME", val: "N/A" }
        ];

        // 1. Render Structure with Placeholders
        stats.forEach((stat, i) => {
            const row = document.createElement('div');
            row.className = 'stat-row';
            row.innerHTML = `<span class="stat-label">${stat.label}</span><span class="stat-val placeholder-pulse" id="stat-val-${i}">-</span>`;
            statsContainer.appendChild(row);
        });

        // 2. Populate Data Sequentially
        stats.forEach((stat, i) => {
            setTimeout(() => {
                const valSpan = document.getElementById(`stat-val-${i}`);
                if(valSpan) {
                    valSpan.classList.remove('placeholder-pulse');
                    valSpan.innerText = stat.val;
                    valSpan.style.color = '#fff';
                    setTimeout(() => valSpan.style.color = '', 200);
                }
            }, 800 + (i * 300)); 
        });
    }
}