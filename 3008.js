document.addEventListener("DOMContentLoaded", function () {
    console.log("3008.js loaded");

    if (!document.body.classList.contains("page-3008")) {
        console.log("Missing class: page-3008");
        return;
    }

    const body = document.body;

    const systemDate = document.getElementById("system-date");
    const vaultForm = document.getElementById("vault-form");
    const vaultInput = document.getElementById("vault-code");
    const vaultResult = document.getElementById("vault-result");

    let typedCode = "";
    let typingTimer = null;
    let diamondClicks = 0;
    let logoClicks = 0;

    // Current date
    if (systemDate) {
        systemDate.textContent =
            new Date().toLocaleDateString("en-GB");
    }

    // Toast notification
    function showToast(title, message) {
        let container =
            document.querySelector(".fn-toast-container");

        if (!container) {
            container = document.createElement("div");
            container.className = "fn-toast-container";
            document.body.appendChild(container);
        }

        const toast = document.createElement("div");
        toast.className = "fn-toast";

        toast.innerHTML = `
            <span class="fn-toast-icon">◇</span>

            <div>
                <p>${title}</p>
                <strong>${message}</strong>
            </div>
        `;

        container.appendChild(toast);

        requestAnimationFrame(function () {
            toast.classList.add("show");
        });

        setTimeout(function () {
            toast.classList.remove("show");

            setTimeout(function () {
                toast.remove();
            }, 350);
        }, 2600);
    }

    // Reveal vault contents
    function unlockVault() {
        const vaultSection =
            document.querySelector(".vault-access-section");

        if (!vaultSection) {
            console.log("Vault section not found");
            return;
        }

        let reveal =
            document.querySelector(".fn-vault-reveal");

        if (!reveal) {
            reveal = document.createElement("div");
            reveal.className = "fn-vault-reveal";

            reveal.innerHTML = `
                <p class="section-code">
                    MASTER FILE
                </p>

                <h3>
                    ACCESS GRANTED
                </h3>

                <p>
                    Future demos, wallpapers, unused thumbnails
                    and unreleased files will appear here.
                </p>

                <div class="fn-vault-slots">
                    <span>DEMO_08.wav</span>
                    <span>THUMBNAIL_ARCHIVE.zip</span>
                    <span>WALLPAPER_3008.png</span>
                    <span>FILE_085.???</span>
                </div>
            `;

            vaultSection.appendChild(reveal);

            requestAnimationFrame(function () {
                reveal.classList.add("show");
            });
        }

        body.classList.add("fn-vault-mode");

        try {
            localStorage.setItem(
                "finchyVaultUnlocked",
                "true"
            );
        } catch (error) {
            console.log("Local storage unavailable");
        }

        showToast(
            "MASTER ACCESS",
            "VAULT UNLOCKED"
        );
    }

    // Run typed number codes
    function runCode(code) {
        console.log("Code entered:", code);

        if (code === "3008085") {
            unlockVault();
            return;
        }

        if (code === "3008") {
            body.classList.toggle("fn-red-mode");

            showToast(
                "PROJECT 3008",
                "SYSTEM OVERRIDE"
            );

            return;
        }

        if (code === "085") {
            body.classList.toggle("fn-white-mode");

            showToast(
                "UNKNOWN SIGNAL",
                "085 MODE"
            );

            return;
        }

        if (code === "08") {
            body.classList.toggle("fn-08-mode");

            showToast(
                "SIGNAL CHANGED",
                "08 MODE"
            );

            return;
        }

        if (code === "30") {
            body.classList.toggle("fn-30-mode");

            showToast(
                "DATE FRAGMENT",
                "30 MODE"
            );
        }
    }

    // Detect number codes typed anywhere
    document.addEventListener("keydown", function (event) {
        const targetTag =
            event.target.tagName.toLowerCase();

        if (
            targetTag === "input" ||
            targetTag === "textarea"
        ) {
            return;
        }

        if (!/^[0-9]$/.test(event.key)) {
            typedCode = "";
            clearTimeout(typingTimer);
            return;
        }

        typedCode += event.key;

        // Longest valid code is seven digits
        typedCode = typedCode.slice(-7);

        clearTimeout(typingTimer);

        // Wait until typing stops before checking
        typingTimer = setTimeout(function () {
            runCode(typedCode);
            typedCode = "";
        }, 750);
    });

    // Vault password box
    if (vaultForm && vaultInput && vaultResult) {
        vaultForm.addEventListener(
            "submit",
            function (event) {
                event.preventDefault();

                const code =
                    vaultInput.value.trim().toLowerCase();

                if (code === "3008085") {
                    vaultResult.style.color = "#54ff79";
                    vaultResult.textContent =
                        "ACCESS GRANTED.";

                    unlockVault();
                } else if (code === "jonathan") {
                    vaultResult.style.color = "#ffc84d";
                    vaultResult.textContent =
                        "DUAL SIGNAL ACCEPTED.";

                    body.classList.toggle(
                        "fn-jonathan-mode"
                    );

                    showToast(
                        "DUAL SIGNAL",
                        "THE JON"
                    );
                } else if (code === "twuh") {
                    vaultResult.style.color = "#ff5151";
                    vaultResult.textContent =
                        "TWUH MODE ACTIVATED.";

                    body.classList.toggle(
                        "fn-twuh-mode"
                    );

                    showToast(
                        "COMMAND ACCEPTED",
                        "TWUH MODE"
                    );
                } else {
                    vaultResult.style.color = "#ff5151";
                    vaultResult.textContent =
                        "ACCESS DENIED.";
                }

                vaultInput.value = "";
            }
        );
    } else {
        console.log("Vault form elements missing");
    }

    // Click main diamond eight times
    const diamond =
        document.querySelector(".terminal-symbol");

    if (diamond) {
        diamond.style.cursor = "pointer";

        diamond.addEventListener(
            "click",
            function () {
                diamondClicks++;

                console.log(
                    "Diamond clicks:",
                    diamondClicks
                );

                if (diamondClicks >= 8) {
                    diamondClicks = 0;

                    body.classList.toggle(
                        "fn-08-mode"
                    );

                    showToast(
                        "HIDDEN FILE FOUND",
                        "08"
                    );
                }
            }
        );
    }

    // Click navbar logo three times
    const navLogo =
        document.querySelector(".nav-logo img");

    if (navLogo) {
        navLogo.addEventListener(
            "click",
            function (event) {
                logoClicks++;

                if (logoClicks >= 3) {
                    event.preventDefault();
                    logoClicks = 0;

                    navLogo.classList.add(
                        "fn-spin-logo"
                    );

                    setTimeout(function () {
                        navLogo.classList.remove(
                            "fn-spin-logo"
                        );
                    }, 1400);

                    showToast(
                        "SIGNAL IDENTIFIED",
                        "FINCHYNOZ"
                    );
                }
            }
        );
    }

    // Double-click footer number
    const footerNumber =
        document.querySelector("footer h2");

    if (footerNumber) {
        footerNumber.addEventListener(
            "dblclick",
            function () {
                body.classList.toggle(
                    "fn-invert-mode"
                );

                showToast(
                    "DATE CONFIRMED",
                    "30/08"
                );
            }
        );
    }

    // Terminal commands
    const terminalWindow =
        document.querySelector(".terminal-window");

    if (
        terminalWindow &&
        !document.querySelector(".fn-command-row")
    ) {
        const commandRow =
            document.createElement("div");

        commandRow.className = "fn-command-row";

        commandRow.innerHTML = `
            <span>&gt;</span>

            <input
                id="fn-command-input"
                type="text"
                autocomplete="off"
                spellcheck="false"
                placeholder="type help"
            >

            <button type="button">
                RUN
            </button>
        `;

        const output =
            document.createElement("div");

        output.className = "fn-command-output";

        terminalWindow.appendChild(commandRow);
        terminalWindow.appendChild(output);

        const input =
            document.getElementById(
                "fn-command-input"
            );

        const runButton =
            commandRow.querySelector("button");

        function addOutput(text, className) {
            const line =
                document.createElement("p");

            if (className) {
                line.className = className;
            }

            line.textContent = text;
            output.appendChild(line);

            output.scrollTop =
                output.scrollHeight;
        }

        function runCommand() {
            const command =
                input.value.trim().toLowerCase();

            input.value = "";

            if (!command) {
                return;
            }

            addOutput(
                "> " + command,
                "fn-output-input"
            );

            if (command === "help") {
                addOutput(
                    "COMMANDS: help, status, channels, music, date, clear, 08, 30, 085, 3008, vault, jonathan, lore"
                );
            } else if (command === "status") {
                addOutput(
                    "SYSTEM ONLINE // CLEARANCE LEVEL 0",
                    "fn-output-success"
                );
            } else if (command === "channels") {
                addOutput(
                    "FINCHYNOZ / J / AFTER DARK / VAZEN / ITSJONATHAN"
                );
            } else if (command === "music") {
                addOutput(
                    "PROJECTS: 08 / 30 / 085 / FINAL"
                );
            } else if (command === "date") {
                addOutput(
                    new Date().toLocaleString("en-GB")
                );
            } else if (command === "clear") {
                output.innerHTML = "";
            } else if (
                command === "08" ||
                command === "30" ||
                command === "085" ||
                command === "3008"
            ) {
                runCode(command);

                addOutput(
                    "MODE ACTIVATED.",
                    "fn-output-success"
                );
            } else if (command === "vault") {
                const vaultSection =
                    document.querySelector(
                        ".vault-access-section"
                    );

                if (vaultSection) {
                    vaultSection.scrollIntoView({
                        behavior: "smooth"
                    });
                }

                addOutput(
                    "REDIRECTING TO RESTRICTED AREA..."
                );
            } else if (command === "jonathan") {
                body.classList.toggle(
                    "fn-jonathan-mode"
                );

                addOutput(
                    "DUAL SIGNAL CONNECTED. ONE BRAINCELL REMAINS.",
                    "fn-output-success"
                );

                showToast(
                    "DUAL SIGNAL",
                    "THE JON"
                );
            } else if (command === "lore") {
                addOutput(
                    "THE MEANING IS CLOSER THAN IT LOOKS."
                );
            } else {
                addOutput(
                    "UNKNOWN COMMAND. TYPE help.",
                    "fn-output-error"
                );
            }
        }

        runButton.addEventListener(
            "click",
            runCommand
        );

        input.addEventListener(
            "keydown",
            function (event) {
                if (event.key === "Enter") {
                    runCommand();
                }
            }
        );
    }

    // Restore vault after refreshing
    try {
        if (
            localStorage.getItem(
                "finchyVaultUnlocked"
            ) === "true"
        ) {
            unlockVault();
        }
    } catch (error) {
        console.log("Could not restore vault");
    }

    showToast(
        "SYSTEM ONLINE",
        "PROJECT 3008"
    );
});

/* ==========================================
   GUARANTEED EASTER-EGG FIX
========================================== */

document.addEventListener("DOMContentLoaded", function () {
    if (!document.body.classList.contains("page-3008")) return;

    const body = document.body;

    function easterEggMessage(title, text) {
        let message = document.createElement("div");

        message.className = "egg-message";

        message.innerHTML = `
            <small>${title}</small>
            <strong>${text}</strong>
        `;

        document.body.appendChild(message);

        requestAnimationFrame(function () {
            message.classList.add("visible");
        });

        setTimeout(function () {
            message.classList.remove("visible");

            setTimeout(function () {
                message.remove();
            }, 400);
        }, 2200);
    }

    /* Number codes typed outside inputs */

    let numberBuffer = "";
    let numberTimer;

    document.addEventListener("keydown", function (event) {
        const tag = event.target.tagName.toLowerCase();

        if (tag === "input" || tag === "textarea") return;

        if (!/^[0-9]$/.test(event.key)) {
            numberBuffer = "";
            clearTimeout(numberTimer);
            return;
        }

        numberBuffer += event.key;
        numberBuffer = numberBuffer.slice(-7);

        clearTimeout(numberTimer);

        numberTimer = setTimeout(function () {
            const code = numberBuffer;
            numberBuffer = "";

            if (code === "3008085") {
                body.classList.toggle("egg-master");

                easterEggMessage(
                    "MASTER ACCESS",
                    "3008085"
                );

                const vaultInput =
                    document.getElementById("vault-code");

                if (vaultInput) {
                    vaultInput.value = "3008085";

                    const vaultForm =
                        document.getElementById("vault-form");

                    if (vaultForm) {
                        vaultForm.dispatchEvent(
                            new Event("submit", {
                                bubbles: true,
                                cancelable: true
                            })
                        );
                    }
                }

                return;
            }

            if (code === "3008") {
                body.classList.toggle("egg-3008");

                easterEggMessage(
                    "SYSTEM OVERRIDE",
                    "PROJECT 3008"
                );

                return;
            }

            if (code === "085") {
                body.classList.toggle("egg-085");

                easterEggMessage(
                    "UNKNOWN SIGNAL",
                    "085"
                );

                return;
            }

            if (code === "08") {
                body.classList.toggle("egg-08");

                easterEggMessage(
                    "PROJECT DETECTED",
                    "08"
                );
            }
        }, 650);
    });

    /* Konami code */

    const konamiCode = [
        "ArrowUp",
        "ArrowUp",
        "ArrowDown",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowLeft",
        "ArrowRight",
        "b",
        "a"
    ];

    let konamiPosition = 0;

    document.addEventListener("keydown", function (event) {
        const pressedKey =
            event.key.length === 1
                ? event.key.toLowerCase()
                : event.key;

        if (pressedKey === konamiCode[konamiPosition]) {
            konamiPosition++;

            if (konamiPosition === konamiCode.length) {
                konamiPosition = 0;

                body.classList.toggle("egg-konami");

                easterEggMessage(
                    "CHEAT CODE ACCEPTED",
                    "CLEARANCE LEVEL 8"
                );
            }
        } else {
            konamiPosition =
                pressedKey === konamiCode[0] ? 1 : 0;
        }
    });

    /* Twuh mode through vault input */

    const vaultForm = document.getElementById("vault-form");
    const vaultInput = document.getElementById("vault-code");
    const vaultResult = document.getElementById("vault-result");

    if (vaultForm && vaultInput) {
        vaultForm.addEventListener("submit", function () {
            const code = vaultInput.value.trim().toLowerCase();

            if (code === "twuh") {
                body.classList.toggle("egg-twuh");

                if (vaultResult) {
                    vaultResult.textContent =
                        "TWUH PROTOCOL ACTIVATED.";

                    vaultResult.style.color = "#ffc84d";
                }

                easterEggMessage(
                    "TWUH PROTOCOL",
                    "BRAINROT LEVEL MAXIMUM"
                );
            }
        }, true);
    }
});

/* ==========================================
   ACHIEVEMENT MENU
========================================== */

document.addEventListener("DOMContentLoaded", function () {
    if (!document.body.classList.contains("page-3008")) return;

    const achievementButton =
        document.getElementById("achievement-button");

    const achievementPanel =
        document.getElementById("achievement-panel");

    const achievementClose =
        document.getElementById("achievement-close");

    const achievementList =
        document.getElementById("achievement-list");

    const achievementCount =
        document.getElementById("achievement-count");

    const achievements = [
        {
            id: "eight",
            title: "EIGHT SONGS",
            description: "Activate 08 mode."
        },
        {
            id: "thirty",
            title: "THE THIRTIETH",
            description: "Activate 30 mode."
        },
        {
            id: "unknown-signal",
            title: "UNKNOWN SIGNAL",
            description: "Activate 085 mode."
        },
        {
            id: "the-number",
            title: "THE NUMBER",
            description: "Activate Project 3008 mode."
        },
        {
            id: "master-access",
            title: "MASTER ACCESS",
            description: "Unlock the vault."
        },
        {
            id: "eight-clicks",
            title: "EIGHT CLICKS",
            description: "Click the main symbol eight times."
        },
        {
            id: "finchynoz",
            title: "SIGNAL IDENTIFIED",
            description: "Click the top-left logo three times."
        },
        {
            id: "clearance-eight",
            title: "CLEARANCE LEVEL 8",
            description: "Enter the Konami code."
        }
    ];

    function isUnlocked(id) {
        try {
            return (
                localStorage.getItem(
                    "fn-achievement-" + id
                ) === "1"
            );
        } catch (error) {
            return false;
        }
    }

    function renderAchievements() {
        achievementList.innerHTML = "";

        let unlockedAmount = 0;

        achievements.forEach(function (achievement) {
            const unlocked =
                isUnlocked(achievement.id);

            if (unlocked) {
                unlockedAmount++;
            }

            const card =
                document.createElement("article");

            card.className =
                "achievement-record " +
                (unlocked ? "unlocked" : "locked");

            card.innerHTML = `
                <span class="achievement-record-icon">
                    ${unlocked ? "✓" : "?"}
                </span>

                <div>
                    <h3>
                        ${
                            unlocked
                                ? achievement.title
                                : "CLASSIFIED"
                        }
                    </h3>

                    <p>
                        ${
                            unlocked
                                ? achievement.description
                                : "Achievement not yet discovered."
                        }
                    </p>
                </div>
            `;

            achievementList.appendChild(card);
        });

        achievementCount.textContent =
            unlockedAmount +
            " / " +
            achievements.length +
            " UNLOCKED";
    }

    function openAchievements() {
        renderAchievements();

        achievementPanel.hidden = false;

        document.body.style.overflow = "hidden";
    }

    function closeAchievements() {
        achievementPanel.hidden = true;

        document.body.style.overflow = "";
    }

    if (
        achievementButton &&
        achievementPanel &&
        achievementClose
    ) {
        achievementButton.addEventListener(
            "click",
            openAchievements
        );

        achievementClose.addEventListener(
            "click",
            closeAchievements
        );

        achievementPanel.addEventListener(
            "click",
            function (event) {
                if (event.target === achievementPanel) {
                    closeAchievements();
                }
            }
        );

        document.addEventListener(
            "keydown",
            function (event) {
                if (
                    event.key === "Escape" &&
                    !achievementPanel.hidden
                ) {
                    closeAchievements();
                }
            }
        );
    }

    /*
      Terminal command:
      Type "achievements" inside the terminal.
    */

    document.addEventListener(
        "click",
        function () {
            const terminalInput =
                document.getElementById(
                    "fn-command-input"
                );

            if (!terminalInput) return;

            if (
                terminalInput.dataset
                    .achievementListener === "true"
            ) {
                return;
            }

            terminalInput.dataset
                .achievementListener = "true";

            terminalInput.addEventListener(
                "keydown",
                function (event) {
                    if (
                        event.key === "Enter" &&
                        terminalInput.value
                            .trim()
                            .toLowerCase() ===
                            "achievements"
                    ) {
                        event.preventDefault();

                        terminalInput.value = "";

                        openAchievements();
                    }
                }
            );
        }
    );
});