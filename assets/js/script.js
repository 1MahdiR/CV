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
                                <button class="hub-btn" onclick="document.querySelector('[data-target=Connect]').click()">
                                    <i class="fas fa-history"></i>
                                    <span>Connect</span>
                                </button>

                                <button class="hub-btn" onclick="document.querySelector('[data-target=skills]').click()">
                                    <i class="fas fa-microchip"></i>
                                    <span>Skills</span>
                                </button>

                                <button class="hub-btn" onclick="document.querySelector('[data-target=missions]').click()">
                                    <i class="fas fa-tasks"></i>
                                    <span>Experiences</span>
                                </button>
                            </div>
                        </div>
                    </div>`
            },
            {
                label: "Connect",
                content: `

                    <div class="content-wrapper" id="connect-interface">

                        <h1 class="glitch-header">CONNECT</h1>

                        <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 25px;">

                        <div class="mission-card" style="flex: 1 1 300px; margin: 0; display: flex; flex-direction: column;">
                            <h2><i class="fas fa-broadcast-tower"></i> CONTACT</h2>

                            <ul class="terminal-list" style="padding-left:0; list-style:none; flex-grow: 1;">
                                
                                <li style="margin-bottom: 15px;">
                                    <a href="mailto:a.m.rasouli.n@gmail.com" 
                                    style="display: flex; justify-content: space-between; align-items: center; text-decoration: none; border-left: 2px solid var(--cp-yellow); padding: 10px; background: rgba(255,255,255,0.02); transition: 0.2s;"
                                    onmouseover="this.style.background='rgba(255,255,255,0.08)'" 
                                    onmouseout="this.style.background='rgba(255,255,255,0.02)'">
                                        
                                        <div>
                                            <span style="font-size: 1em; color: #aaa; display: block;">// PRIMARY MAIL RELAY</span>
                                            <span class="highlight" style="color: #fff; border-bottom: 1px dotted var(--cp-yellow);">a.m.rasouli.n@gmail.com</span>
                                        </div>
                                        <svg viewBox="0 0 24 24" style="height:1.5em;fill:var(--cp-yellow);float:right;"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.573l8.073-6.08c1.618-1.214 3.927-.059 3.927 1.964z"></path></svg>
                                    </a>
                                </li>

                                <li style="margin-bottom: 15px;">
                                    <div onclick="alert('// ACCESS DENIED \\n\\nVoice line is restricted to authorized personnel. Please establish initial handshake via Email.')" 
                                        style="cursor: pointer; display: flex; justify-content: space-between; align-items: center; border-left: 2px solid var(--cp-red); padding: 10px; background: rgba(255,255,255,0.02); transition: 0.2s;"
                                        onmouseover="this.style.background='rgba(255,50,50,0.1)'" 
                                        onmouseout="this.style.background='rgba(255,255,255,0.02)'">
                                        
                                        <div>
                                            <span style="font-size: 1em; color: #aaa; display: block;">// VOICE LINE</span>
                                            <span style="font-family: monospace; letter-spacing: 2px; color: var(--cp-red); filter: blur(3px);">+98 *** *** ****</span>
                                            <span style="font-size: 1.8em; border: 1px solid var(--cp-red); color: var(--cp-red); padding: 0 4px; margin-left: 5px;">[DECRYPT]</span>
                                        </div>
                                        <svg viewBox="0 0 24 24" style="height:1.5em;fill:#4CAF50;float:right;"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg>
                                    </div>
                                </li>

                                <li style="margin-bottom: 15px;">
                                    <a href="https://t.me/Raysoull" target="_blank" 
                                    style="display: flex; justify-content: space-between; align-items: center; text-decoration: none; border-left: 2px solid #0088cc; padding: 10px; background: rgba(255,255,255,0.02); transition: 0.2s;"
                                    onmouseover="this.style.background='rgba(0,136,204,0.1)'" 
                                    onmouseout="this.style.background='rgba(255,255,255,0.02)'">
                                        
                                        <div>
                                            <span style="font-size: 1em; color: #aaa; display: block;">// TELEGRAM MESSAGING</span>
                                            <span style="color: #fff;">@Raysoull</span>
                                        </div>
                                        <svg viewBox="0 0 24 24" style="height:1.5em;fill:#0088cc;float:right;"><path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.432z"></path></svg>
                                    </a>
                                </li>

                                <li style="margin-bottom: 15px;">
                                    <div style="display: flex; justify-content: space-between; align-items: center; border-left: 2px solid #5865F2; padding: 10px; background: rgba(255,255,255,0.02);">
                                        <div>
                                            <span style="font-size: 1em; color: #aaa; display: block;">// DISCORD</span>
                                            <span style="color: #fff;">@__raysoul__</span>
                                        </div>
                                        <svg viewBox="0 0 24 24" style="height:1.5em;fill:#5865F2;float:right;"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.23 10.23 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path></svg>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="mission-card" style="flex: 1 1 300px; margin: 0; display: flex; flex-direction: column;">
                            <h2><i class="fas fa-project-diagram"></i> SOCIALS</h2>

                            <ul class="terminal-list" style="padding-left:0; list-style:none; flex-grow: 1;">
                                
                                <li style="margin-bottom: 15px;">
                                    <a href="https://www.linkedin.com/in/amir-mahdi-rasouli" target="_blank"
                                    style="display: flex; justify-content: space-between; align-items: center; text-decoration: none; border-left: 2px solid #0077b5; padding: 10px; background: rgba(255,255,255,0.02); transition: 0.2s;"
                                    onmouseover="this.style.background='rgba(0,119,181,0.1)'" 
                                    onmouseout="this.style.background='rgba(255,255,255,0.02)'">
                                        
                                        <div>
                                            <span style="font-size: 1em; color: #aaa; display: block;">// PROFESSIONAL NET</span>
                                            <span style="color: #fff;">/amir-mahdi-rasouli/</span>
                                        </div>
                                        <svg viewBox="0 0 24 24" style="height:1.5em;fill:#0077b5;float:right;"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                                    </a>
                                </li>

                                <li style="margin-bottom: 15px;">
                                    <a href="https://github.com/1MahdiR" target="_blank"
                                    style="display: flex; justify-content: space-between; align-items: center; text-decoration: none; border-left: 2px solid #fff; padding: 10px; background: rgba(255,255,255,0.02); transition: 0.2s;"
                                    onmouseover="this.style.background='rgba(255,255,255,0.1)'" 
                                    onmouseout="this.style.background='rgba(255,255,255,0.02)'">
                                        
                                        <div>
                                            <span style="font-size: 1em; color: #aaa; display: block;">// PROJECTS</span>
                                            <span style="color: #fff;">1MahdiR</span>
                                        </div>
                                        <svg viewBox="0 0 24 24" style="height:1.5em;fill:#fff;float:right;"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                                    </a>
                                </li>

                                <li style="margin-bottom: 15px;">
                                    <a href="https://t.me/mr_var_log" target="_blank"
                                    style="display: flex; justify-content: space-between; align-items: center; text-decoration: none; border-left: 2px solid #0088cc; padding: 10px; background: rgba(255,255,255,0.02); transition: 0.2s;"
                                    onmouseover="this.style.background='rgba(0,136,204,0.1)'" 
                                    onmouseout="this.style.background='rgba(255,255,255,0.02)'">
                                        
                                        <div>
                                            <span style="font-size: 1em; color: #aaa; display: block;">// TELEGRAM CHANNEL</span>
                                            <span style="color: #fff;">@mr_var_log</span>
                                        </div>
                                        <svg viewBox="0 0 24 24" style="height:1.5em;fill:#0088cc;float:right;"><path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.432z"></path></svg>
                                    </a>
                                </li>

                                <li style="margin-bottom: 15px;">
                                    <a href="https://www.youtube.com/@a.mahdi_r" target="_blank"
                                    style="display: flex; justify-content: space-between; align-items: center; text-decoration: none; border-left: 2px solid #ff0000; padding: 10px; background: rgba(255,255,255,0.02); transition: 0.2s;"
                                    onmouseover="this.style.background='rgba(255,0,0,0.1)'" 
                                    onmouseout="this.style.background='rgba(255,255,255,0.02)'">
                                        
                                        <div>
                                            <span style="font-size: 1em; color: #aaa; display: block;">// YOUTUBE CHANNEL </span>
                                            <span style="color: #fff;">> MR Loves to Code <</span>
                                        </div>
                                        <svg viewBox="0 0 24 24" style="height:1.5em;fill:#ff0000;float:right;"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
                                    </a>
                                </li>

                                <li style="margin-bottom: 15px;">
                                    <a href="https://scholar.google.com/citations?user=bBcK7gUAAAAJ&hl=en&oi=ao" target="_blank"
                                    style="display: flex; justify-content: space-between; align-items: center; text-decoration: none; border-left: 2px solid #4285F4; padding: 10px; background: rgba(255,255,255,0.02); transition: 0.2s;"
                                    onmouseover="this.style.background='rgba(66,133,244,0.1)'" 
                                    onmouseout="this.style.background='rgba(255,255,255,0.02)'">
                                        
                                        <div>
                                            <span style="font-size: 1em; color: #aaa; display: block;">// ACADEMIC INDEX</span>
                                            <span style="color: #fff;">GOOGLE SCHOLAR</span>
                                        </div>
                                        <svg viewBox="0 0 24 24" style="height:1.5em;fill:#4285F4;float:right;"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.547 11.249 14.958 9.5 12 9.5c-2.958 0-5.547 1.749-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"></path></svg>
                                    </a>
                                </li>

                                <li style="margin-bottom: 15px;">
                                    <div style="display: flex; justify-content: space-between; align-items: center; border-left: 2px solid #555; padding: 10px; opacity: 0.6; filter: grayscale(100%); cursor: not-allowed; background: rgba(255,255,255,0.02);">
                                        
                                        <div>
                                            <span style="font-size: 1em; color: #aaa; display: block;">// SOCIAL_MEDIA</span>
                                            <span style="color: #777;">INSTAGRAM [OFFLINE]</span>
                                        </div>
                                        <svg viewBox="0 0 24 24" style="height:1.5em;fill:#E1306C;float:right;"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.558.217.957.477 1.377.896.419.42.679.819.896 1.377.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.217.558-.477.957-.896 1.377-.42.419-.819.679-1.377.896-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.558-.217-.957-.477-1.377-.896-.419-.42-.679-.819-.896-1.377-.163-.422-.358-1.057-.412-2.227C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.217-.558.477-.957.896-1.377.42-.419.819-.679 1.377-.896.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126s1.336 1.079 2.126 1.384c.766.296 1.636.499 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384s1.079-1.336 1.384-2.126c.296-.765.499-1.636.558-2.913.058-1.28.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.058.935 19.39.333 18.6 0 17.333.014 16.926 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"></path></svg>
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
                    <h1 class="glitch-header">TECH STACK</h1>

                    <div class="skills-grid">

                        <div class="skill-column">
                            <h3>PROGRAMMING LANGUAGES</h3>

                            <div class="skill-container">
                                <div class="skill-label"><span>Python</span></div>
                                <div class="dots-container">
                                    <div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot active"></div>
                                </div>
                            </div>

                            <div class="skill-container">
                                <div class="skill-label"><span>Java Script / Node.js</span></div>
                                <div class="dots-container">
                                    <div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot"></div>
                                </div>
                            </div>

                            <div class="skill-container">
                                <div class="skill-label"><span>Java</span></div>
                                <div class="dots-container">
                                    <div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot"></div>
                                </div>
                            </div>

                            <div class="skill-container">
                                <div class="skill-label"><span>C/C++</span></div>
                                <div class="dots-container">
                                    <div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot"></div><div class="dot"></div>
                                </div>
                            </div>

                            <div class="skill-container">
                                <div class="skill-label"><span>Rust</span></div>
                                <div class="dots-container">
                                    <div class="dot active"></div><div class="dot active"></div><div class="dot"></div><div class="dot"></div><div class="dot"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="skill-column">
                            <h3>BACKEND & SYSTEMS</h3>
                            
                            <div class="skill-container">
                                <div class="skill-label"><span>Django / DRF</span></div>
                                <div class="dots-container">
                                    <div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot active"></div>
                                </div>
                            </div>

                            <div class="skill-container">
                                <div class="skill-label"><span>Linux / Bash Scripting</span></div>
                                <div class="dots-container">
                                    <div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot"></div>
                                </div>
                            </div>

                            <div class="skill-container">
                                <div class="skill-label"><span>Docker / CI/CD</span></div>
                                <div class="dots-container">
                                    <div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot"></div><div class="dot"></div>
                                </div>
                            </div>

                            <div class="skill-container">
                                <div class="skill-label"><span>PostgreSQL / SQL Opt.</span></div>
                                <div class="dots-container">
                                    <div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot"></div><div class="dot"></div>
                                </div>
                            </div>

                            <div class="skill-container">
                                <div class="skill-label"><span>Nginx / Web Servers</span></div>
                                <div class="dots-container">
                                    <div class="dot active"></div><div class="dot active"></div><div class="dot"></div><div class="dot"></div><div class="dot"></div>
                                </div>
                            </div>
                        </div>

                        <div class="skill-column">
                            <h3>ARTIFICIAL INTELLIGENCE</h3>
                            
                            <div class="skill-container">
                                <div class="skill-label"><span>Machine Learning</span></div>
                                <div class="dots-container">
                                    <div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot"></div><div class="dot"></div>
                                </div>
                            </div>

                            <div class="skill-container">
                                <div class="skill-label"><span>Deep Learning</span></div>
                                <div class="dots-container">
                                    <div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot"></div>
                                </div>
                            </div>

                            <div class="skill-container">
                                <div class="skill-label"><span>Reinforcement Learning</span></div>
                                <div class="dots-container">
                                    <div class="dot active"></div><div class="dot active"></div><div class="dot"></div><div class="dot"></div><div class="dot"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    `
            },
            {
                label: "Research",
                content: `
                <div class="content-wrapper">
                    <h1 class="glitch-header">RESEARCH</h1>

                    <div class="skills-grid">

                        <div class="skill-column">
                            <h3>Research Fields</h3>

                            <div class="skill-container">
                                <div class="skill-label"><span>Edge/Fog Computing</span></div>
                                <div class="dots-container">
                                    <div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot"></div>
                                </div>
                            </div>

                            <div class="skill-container">
                                <div class="skill-label"><span>Distributed Computing</span></div>
                                <div class="dots-container">
                                    <div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot"></div><div class="dot"></div>
                                </div>
                            </div>

                            <div class="skill-container">
                                <div class="skill-label"><span>Embedded and Real-Time Systems</span></div>
                                <div class="dots-container">
                                    <div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot"></div>
                                </div>
                            </div>

                            <div class="skill-container">
                                <div class="skill-label"><span>Cyber-Physical Systems</span></div>
                                <div class="dots-container">
                                    <div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot"></div><div class="dot"></div>
                                </div>
                            </div>

                            <div class="skill-container">
                                <div class="skill-label"><span>Cloud Computing</span></div>
                                <div class="dots-container">
                                    <div class="dot active"></div><div class="dot active"></div><div class="dot"></div><div class="dot"></div><div class="dot"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="skill-column">
                            <h3>Research Tools</h3>
                            
                            <div class="skill-container">
                                <div class="skill-label"><span>LaTeX / Overleaf</span></div>
                                <div class="dots-container">
                                    <div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot"></div>
                                </div>
                            </div>

                            <div class="skill-container">
                                <div class="skill-label"><span>SimPy</span></div>
                                <div class="dots-container">
                                    <div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot"></div>
                                </div>
                            </div>

                            <div class="skill-container">
                                <div class="skill-label"><span>EdgeSimPy Simulator</span></div>
                                <div class="dots-container">
                                    <div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot"></div><div class="dot"></div>
                                </div>
                            </div>

                            <div class="skill-container">
                                <div class="skill-label"><span>Gem5 Simulator</span></div>
                                <div class="dots-container">
                                    <div class="dot active"></div><div class="dot active"></div><div class="dot"></div><div class="dot"></div><div class="dot"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    `
            },
            {
                label: "Perks",
                content: `
                <div class="content-wrapper">
                    <h1 class="glitch-header">PERKS</h1>

                    <div class="skills-grid">

                        <div class="skill-column">
                            <h3>Languages</h3>

                            <div class="skill-container">
                                <div class="skill-label"><span>Persian</span></div>
                                <div class="dots-container">
                                    <div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot active"></div>
                                </div>
                            </div>

                            <div class="skill-container">
                                <div class="skill-label"><span>English</span></div>
                                <div class="dots-container">
                                    <div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="skill-column">
                            <h3>Soft Skills</h3>
                            
                            <div class="skill-container">
                                <div class="skill-label"><span>Teamwork</span></div>
                                <div class="dots-container">
                                    <div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot active"></div>
                                </div>
                            </div>

                            <div class="skill-container">
                                <div class="skill-label"><span>Mentorship</span></div>
                                <div class="dots-container">
                                    <div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot"></div>
                                </div>
                            </div>

                            <div class="skill-container">
                                <div class="skill-label"><span>Critical Analysis</span></div>
                                <div class="dots-container">
                                    <div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot"></div><div class="dot"></div>
                                </div>
                            </div>

                            <div class="skill-container">
                                <div class="skill-label"><span>Problem Solving</span></div>
                                <div class="dots-container">
                                    <div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
                `
            }
        ]
    },
    missions: {
        items: [
            {
                label: "Professional",
                content: `
                    <div class="content-wrapper">
                        <h1 class="glitch-header">PROFESSIONAL</h1>

                        <div class="mission-card">
                            <h2>BACKEND ENGINEER</h2>
                            <p class="highlight">Aalibaf Industrial Project (Sharif University) | Oct 2024 - Mar 2025</p>
                            <p>Architected and developed scalable backend services using <strong>Django</strong> and <strong>Django REST Framework</strong>. Designed high-performance REST APIs to handle industrial data traffic, ensuring low-latency responses. Managed containerized application deployment using <strong>Docker</strong> and automated CI pipelines to streamline delivery.</p>
                            <div class="tags"><span>DJANGO</span><span>REST API</span><span>DOCKER</span><span>CI/CD</span></div>
                        </div>

                        <div class="mission-card">
                            <h2>BACKEND & SYSTEMS ENGINEER</h2>
                            <p class="highlight">Roupel Dataware Co. | July 2021 - Sep 2023</p>
                            <p>Developed the core backend architecture for data-centric web applications and processing pipelines using <strong>Django</strong>. Designed and implemented efficient database schemas for large-scale datasets, reducing query overhead. Built internal automation tools to streamline data processing and integration workflows. Configured Linux environments to support stable and secure application runtime.</p>
                            <div class="tags"><span>LINUX</span><span>POSTGRESQL</span><span>AUTOMATION</span><span>BASH</span></div>
                        </div>
                    </div>`
            },
            {
                label: "Academic",
                content: `
                    <div class="content-wrapper">
                        <h1 class="glitch-header" style="width:fit-content;">ACADEMIC</h1>
                        <p style="border: solid 1px var(--cp-cyan);width:fit-content;padding:8px;">
                            <a href="https://scholar.google.com/citations?user=bBcK7gUAAAAJ&hl=en&oi=ao" target="_blank" style="color: var(--cp-cyan); text-decoration: none; font-weight: bold; border:none;">
                                VIEW PUBLICATIONS ON SCHOLAR&nbsp;<svg viewBox="0 0 24 24" style="height:1.5em;fill:var(--cp-cyan);float:right;"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.547 11.249 14.958 9.5 12 9.5c-2.958 0-5.547 1.749-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"></path></svg>
                            </a>
                        </p>
                        <div class="mission-card">
                            <h2>RESEARCH ASSISTANT</h2>
                            <p class="highlight">Institute for Research in Fundamental Sciences (IPM) | Jan 2024 - Present</p>
                            <p>Conducted research on resource allocation and optimization algorithms in <strong>Edge Computing</strong>. Developed <strong>Python</strong>-based simulation frameworks for IoT reliability analysis. Co-authored research papers on embedded systems and real-time analysis.</p>
                            <div class="tags"><span>EMBEDDED SYSTEMS</span><span>PYTHON</span><span>IOT</span><span>SIMULATION</span></div>
                        </div>

                        <div class="mission-card">
                            <h2>M.SC. IN COMPUTER ENGINEERING - COMPUTER ARCHITECTURE</h2>
                            <p class="highlight">Sharif University of Technology | Sep 2023 - Present</p>
                            <p><strong>Thesis:</strong> Reliability-Aware Task Mapping and Scheduling in Edge Computing Environments.<br/><strong>Research:</strong> Member of the <a target="_blank" href="http://cpslab.ce.sharif.edu"><strong>Cyber-Physical Systems Lab (CPSLab)</strong></a> under <a target="_blank" href="https://scholar.google.com/citations?user=Dhfls4sAAAAJ&hl=en&oi=ao">Dr. Mohsen Ansari</a>, focusing on edge/fog/cloud computing, distributed resource management, embedded and real-time systems.<br/><strong>Teaching Assistant:</strong> Edge Computing, Cyber-Physical Systems, Real-time Systems, Embedded Systems, and Digital Logic Design.<br/><strong>Academic Service:</strong> Peer reviewer for IEEE Internet of Things Journal; Head of Executive Team, CSICC 2025; Scientific/Technical Staff for HardWar (hardware design contest) (2024, 2025).</p>
                            <div class="tags"><span>EDGE COMPUTING</span><span>CPSLAB</span><span>IEEE</span><span>RESEARCH</span></div>
                        </div>

                        <div class="mission-card">
                            <h2>B.SC. IN COMPUTER ENGINEERING</h2>
                            <p class="highlight">Arak University | Sep 2019 - Sep 2023</p>
                            <p><strong>Honors:</strong> <strong>Ranked 1st</strong> in Cumulative GPA. Awarded "Exceptional Talent" status, securing <strong>direct admission</strong> to Sharif University of Technology (exempt from national entrance exam).<br/><strong>Research:</strong> Undergraduate research assistant under <a target="_blank" href="https://scholar.google.com/citations?hl=en&user=xNkFvkEAAAAJ">Prof. Rahmani</a>; Implemented a university-wide cloud computing platform for academic and research purposes.<br/><strong>Teaching Assistant:</strong> Core hardware/software courses including Computer Architecture, Microprocessors, C/C++/Python Programming, and Software Engineering.<br/><strong>Leadership:</strong> Elected as secretary of the Computer Engineering Association (2021-2022); organized technical workshops and managed student activities.</p>
                            <div class="tags"><span>CLOUD COMPUTING</span><span>TOP RANK</span><span>LEADERSHIP</span><span>C/C++/PYTHON</span></div>
                        </div>
                    </div>`
            },
            {
                label: "Projects",
                content: `
                    <div class="content-wrapper">
                        <h1 class="glitch-header">PROJECTS</h1>

                        <div class="mission-card">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                <h2 style="margin: 0;">API Rate Limiter Benchmarks</h2>
                                <a href="https://github.com/1MahdiR/api-rate-limiter-benchmarks" target="_blank" title="View Source" style="border:none; font-size:1.6em;">
                                    <svg viewBox="0 0 24 24" style="height: 1.5em; width: 1.5em; fill: var(--cp-yellow); display: block; cursor: pointer; transition: 0.2s;" onmouseover="this.style.fill='#fff'" onmouseout="this.style.fill='var(--cp-yellow)'">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                    </svg>
                                </a>
                            </div>
                            <p class="highlight">Performance benchmarks of Nginx, Python (aiohttp), and Rust (Axum) API gateways under throttled and unthrottled concurrent loads</p>
                            <p>A repository contains the architecture, configuration, and performance evaluation benchmarks for an API Rate Limiter Gateway implemented across three distinct proxy engines: Nginx, Python (aiohttp), and Rust (Axum/Tokio).</p>
                            <div class="tags"><span>PYTHON</span><span>AUTOMATION</span><span>CLI</span></div>
                        </div>

                        <div class="mission-card">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                <h2 style="margin: 0;">DJUNGOOL</h2>
                                <a href="https://github.com/1MahdiR/Djungool" target="_blank" title="View Source" style="border:none; font-size:1.6em;">
                                    <svg viewBox="0 0 24 24" style="height: 1.5em; width: 1.5em; fill: var(--cp-yellow); display: block; cursor: pointer; transition: 0.2s;" onmouseover="this.style.fill='#fff'" onmouseout="this.style.fill='var(--cp-yellow)'">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                    </svg>
                                </a>
                            </div>
                            <p class="highlight">Django Code Generator CLI</p>
                            <p>A command-line tool that automatically generates Django database code based on user inputs. Automates repetitive setup tasks.</p>
                            <div class="tags"><span>PYTHON</span><span>AUTOMATION</span><span>CLI</span></div>
                        </div>

                        <div class="mission-card">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                <h2 style="margin: 0;">NMAPY</h2>
                                <a href="https://github.com/1MahdiR/nmapy" target="_blank" title="View Source" style="border:none; font-size:1.6em;">
                                    <svg viewBox="0 0 24 24" style="height: 1.5em; width: 1.5em; fill: var(--cp-yellow); display: block; cursor: pointer; transition: 0.2s;" onmouseover="this.style.fill='#fff'" onmouseout="this.style.fill='var(--cp-yellow)'">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                    </svg>
                                </a>
                            </div>
                            <p class="highlight">Interactive Network Scanner</p>
                            <p>Developed a Python CLI tool to scan local networks, detecting active devices and open ports using raw socket connections.</p>
                            <div class="tags"><span>SOCKET API</span><span>TCP/ICMP</span><span>NETWORKING</span></div>
                        </div>

                        <div class="mission-card">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                <h2 style="margin: 0;">NETKORT</h2>
                                <a href="https://github.com/1MahdiR/Netkort" target="_blank" title="View Source" style="border:none; font-size:1.6em;">
                                    <svg viewBox="0 0 24 24" style="height: 1.5em; width: 1.5em; fill: var(--cp-yellow); display: block; cursor: pointer; transition: 0.2s;" onmouseover="this.style.fill='#fff'" onmouseout="this.style.fill='var(--cp-yellow)'">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                    </svg>
                                </a>
                            </div>
                            <p class="highlight">Android Network Scanner</p>
                            <p>A native mobile network analysis tool designed to streamline diagnostics and connectivity tasks on Android devices.</p>
                            <div class="tags"><span>ANDROID</span><span>JAVA</span><span>NETWORKING</span></div>
                        </div>

                        <div class="mission-card">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                <h2 style="margin: 0;">NETRUNNER PORTFOLIO</h2>
                                <a href="https://github.com/1MahdiR/CV/" target="_blank" title="View Source" style="border:none; font-size:1.6em;">
                                    <svg viewBox="0 0 24 24" style="height: 1.5em; width: 1.5em; fill: var(--cp-yellow); display: block; cursor: pointer; transition: 0.2s;" onmouseover="this.style.fill='#fff'" onmouseout="this.style.fill='var(--cp-yellow)'">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                    </svg>
                                </a>
                            </div>
                            <p class="highlight">Cyberpunk Interactive Resume</p>
                            <p>A futuristic, responsive personal portfolio website designed with a Cyberpunk aesthetic. Features CRT scanline effects, interactive UI, and CLI-themed styling.</p>
                            <div class="tags"><span>HTML</span><span>CSS</span><span>JS</span></div>
                        </div>

                        <div class="mission-card">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                <h2 style="margin: 0;">RASOUL</h2>
                                <a href="https://github.com/1MahdiR/Reliability-Aware-Task-Allocation-Strategy-In-MEC" target="_blank" title="View Source" style="border:none; font-size:1.6em;">
                                    <svg viewBox="0 0 24 24" style="height: 1.5em; width: 1.5em; fill: var(--cp-yellow); display: block; cursor: pointer; transition: 0.2s;" onmouseover="this.style.fill='#fff'" onmouseout="this.style.fill='var(--cp-yellow)'">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                    </svg>
                                </a>
                            </div>
                            <p class="highlight">Reliability-Aware Task Allocation Strategy for Mobile Edge Computing Networks</p>
                            <p>Engineered a fault-tolerant task mapping algorithm for distributed edge nodes to optimize resource utilization.</p>
                            <div class="tags"><span>ALGORITHMS</span><span>DISTRIBUTED SYS</span><span>SIMULATION</span></div>
                        </div>

                        <div class="mission-card">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                <h2 style="margin: 0;">DEDUCTIVE FAULT SIMULATOR</h2>
                                <a href="https://github.com/1MahdiR/Deductive-Fault-Simulator" target="_blank" title="View Source" style="border:none; font-size:1.6em;">
                                    <svg viewBox="0 0 24 24" style="height: 1.5em; width: 1.5em; fill: var(--cp-yellow); display: block; cursor: pointer; transition: 0.2s;" onmouseover="this.style.fill='#fff'" onmouseout="this.style.fill='var(--cp-yellow)'">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                    </svg>
                                </a>
                            </div>
                            <p class="highlight">Logic Circuit Simulation</p>
                            <p>A simulation tool for fault detection in digital logic circuits using deductive fault simulation techniques.</p>
                            <div class="tags"><span>VLSI</span><span>TESTING</span><span>PYTHON</span></div>
                        </div>

                         <div class="mission-card">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                <h2 style="margin: 0;">THE 48 LAWS</h2>
                                <a href="https://github.com/1MahdiR/the-48-laws-of-power" target="_blank" title="View Live Site" style="border:none; font-size:1.6em;">
                                    <svg viewBox="0 0 24 24" style="height: 1.5em; width: 1.5em; fill: var(--cp-yellow); display: block; cursor: pointer; transition: 0.2s;" onmouseover="this.style.fill='#fff'" onmouseout="this.style.fill='var(--cp-yellow)'">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                    </svg>
                                </a>
                            </div>
                            <p class="highlight">Interactive E-Book</p>
                            <p>A web-based interactive summary of Robert Greene's "The 48 Laws of Power" built with Next.js <a href="https://1mahdir.github.io/the-48-laws-of-power" target="_blank">LIVE DEMO</a>.</p>
                            <div class="tags"><span>NEXT.JS</span><span>REACT</span><span>WEB</span></div>
                        </div>

                         <div class="mission-card">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                <h2 style="margin: 0;">NFA TO DFA</h2>
                                <a href="https://github.com/1MahdiR/NFA_to_DFA_convertor" target="_blank" title="View Source" style="border:none; font-size:1.6em;">
                                    <svg viewBox="0 0 24 24" style="height: 1.5em; width: 1.5em; fill: var(--cp-yellow); display: block; cursor: pointer; transition: 0.2s;" onmouseover="this.style.fill='#fff'" onmouseout="this.style.fill='var(--cp-yellow)'">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                    </svg>
                                </a>
                            </div>
                            <p class="highlight">Automata Theory Tool</p>
                            <p>An algorithmic tool designed to convert Non-Deterministic Finite Automata (NFA) to Deterministic Finite Automata (DFA).</p>
                            <div class="tags"><span>ALGORITHMS</span><span>COMPUTATION</span><span>AUTOMATA</span></div>
                        </div>

                         <div class="mission-card">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                <h2 style="margin: 0;">BACKSTAB SIMULATOR</h2>
                                <a href="https://github.com/1MahdiR/backstab-game-simulation" target="_blank" title="View Source" style="border:none; font-size:1.6em;">
                                    <svg viewBox="0 0 24 24" style="height: 1.5em; width: 1.5em; fill: var(--cp-yellow); display: block; cursor: pointer; transition: 0.2s;" onmouseover="this.style.fill='#fff'" onmouseout="this.style.fill='var(--cp-yellow)'">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                    </svg>
                                </a>
                            </div>
                            <p class="highlight">Game Mechanics Simulation</p>
                            <p>A simulation of the 'Backstab' game mechanics using Python, exploring social deduction and game theory strategies.</p>
                            <div class="tags"><span>SIMULATION</span><span>GAME THEORY</span><span>PYTHON</span></div>
                        </div>

                         <div class="mission-card">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                <h2 style="margin: 0;">RHYTHMBOX WRAPPED</h2>
                                <a href="https://github.com/1MahdiR/Rhythmbox-Wrapped" target="_blank" title="View Source" style="border:none; font-size:1.6em;">
                                    <svg viewBox="0 0 24 24" style="height: 1.5em; width: 1.5em; fill: var(--cp-yellow); display: block; cursor: pointer; transition: 0.2s;" onmouseover="this.style.fill='#fff'" onmouseout="this.style.fill='var(--cp-yellow)'">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                    </svg>
                                </a>
                            </div>
                            <p class="highlight">Music Data Analysis</p>
                            <p>Generates listening statistics and visualization for the Rhythmbox music player, similar to Spotify Wrapped.</p>
                            <div class="tags"><span>DATA ANALYSIS</span><span>VISUALIZATION</span><span>PYTHON</span></div>
                        </div>

                    </div>`
            }
        ]
    },
    archives: {
        items: [
            {
                label: "Library",
                content: `
                    <div class="content-wrapper">
                        <h1>LIBRARY</h1>
                        
                        <div style="display: flex; gap: 20px; border: 1px solid #333; padding: 15px; margin-bottom: 20px; background: rgba(0,0,0,0.3); align-items: start;">
                            
                            <div style="width: 80px; height: 120px; flex-shrink: 0; border: 1px solid #555; background-color: #111;">
                                <img src="assets/img/Learning_api_styles.jpg" 
                                     alt="Book Cover" 
                                     style="width: 100%; height: 100%; object-fit: cover; display: block;">
                            </div>
                            
                            <div>
                                <h3 style="margin-top: 0; color: #fff; font-size: 1.1em;">Learning API Styles: Understanding the Trade-Offs of Common APIs and Choosing the Correct Solutions</h3>
                                <p style="font-size: 0.85em; opacity: 0.7; margin-bottom: 10px; text-transform: uppercase;">
                                    Author: Lukasz Dynowski and Marcin Dulak
                                </p>
                                <p style="font-size: 0.9em; margin-bottom: 10px;">
                                    A practical guide to navigating the trade-offs of REST, GraphQL, gRPC, and AsyncAPI, empowering you to choose the right architecture for your specific technical needs.
                                </p>
                                <a href="https://www.amazon.de/-/en/Learning-API-Styles-Understanding-Trade-Offs/dp/1098153995" target="_blank" style="font-size: 0.8em; color: #0ff; text-decoration: none; border-bottom: 1px solid #0ff;">
                                    [OFFICIAL SOURCE]
                                </a>
                            </div>
                        </div>
                        </div>`
            },
            {
                label: "News",
                content: `
                    <div class="content-wrapper">
                        <h1>NEWS</h1>
                        
                        <article style="border-left: 3px solid #0ff; padding-left: 20px; margin-bottom: 30px;">
                            <header>
                                <h2 style="margin-bottom: 5px; color: #fff;">HELLO WORLD!</h2>
                                <div style="font-size: 0.8em; margin-bottom: 15px;">
                                    <span>DATE: 2/9/2026</span>
                                </div>
                            </header>
                            <p>Hello world! Welcome to my digital garden.</p>
                        </article>
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

        codeSpawnInterval = setInterval(spawnTypingCode, 500);

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
        
        // REMOVED: Unused distortFrame logic and variables (startTime, duration) were here.

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
        contentDisplay.innerHTML = htmlContent;
        
        // 1. Animate Progress Bars (Keep this, it's cheap)
        const bars = contentDisplay.querySelectorAll('.fill');
        bars.forEach(bar => {
            const w = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => bar.style.width = w, 50);
        });

        // 2. Animate Text Elements (CSS Class instead of JS Typing)
        // Select all text-heavy elements
        const textElements = contentDisplay.querySelectorAll('h1, h2, h3, p, li, .skill-label, .mission-card');
        
        textElements.forEach((el, index) => {
            el.classList.add('simple-fade');
            // Add a tiny delay for each element so they cascade in (50ms apart)
            el.style.animationDelay = `${index * 0.05}s`; 
        });
    }

    // REMOVED: Unused 'typeTextSafely' function was here.

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
