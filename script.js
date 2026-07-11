

// -----------------------------
// Loading Screen
// -----------------------------

window.addEventListener("load", () => {

    const loading = document.getElementById("loading-screen");

    setTimeout(() => {

        loading.style.opacity = "0";

        loading.style.pointerEvents = "none";

        loading.style.transition = "1s";

        setTimeout(() => {

            loading.style.display = "none";

        },1000);

    },1200);

});


// -----------------------------
// Navbar Shrink
// -----------------------------

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        nav.style.padding = "12px 8%";
        nav.style.background = "rgba(0,0,0,.85)";

    }

    else{

        nav.style.padding = "20px 8%";
        nav.style.background = "rgba(0,0,0,.45)";

    }

});


// -----------------------------
// Fade In Sections
// -----------------------------

const sections = document.querySelectorAll("section");

sections.forEach(section=>{

    section.classList.add("fade");

});

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

sections.forEach(section=>{

    observer.observe(section);

});


// -----------------------------
// Wednesday Countdown
// -----------------------------

const timer = document.getElementById("timer");

function updateCountdown(){

    const now = new Date();

    const target = new Date();

    target.setHours(18);
    target.setMinutes(0);
    target.setSeconds(0);

    let daysUntil = (3 - now.getDay() + 7) % 7;

    if(daysUntil === 0 && now > target){

        daysUntil = 7;

    }

    target.setDate(now.getDate() + daysUntil);

    const distance = target - now;

    const days = Math.floor(distance / (1000*60*60*24));

    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const mins = Math.floor((distance%(1000*60*60))/(1000*60));

    const secs = Math.floor((distance%(1000*60))/1000);

    timer.innerHTML =

    `${days}d ${hours}h ${mins}m ${secs}s`;

}

updateCountdown();

setInterval(updateCountdown,1000);


// -----------------------------
// Hero Buttons
// -----------------------------

const heroButtons = document.querySelectorAll(".hero-buttons button");

heroButtons[0].addEventListener("click",()=>{

    document.getElementById("latest").scrollIntoView({

        behavior:"smooth"

    });

});

heroButtons[1].addEventListener("click",()=>{

    document.getElementById("channels").scrollIntoView({

        behavior:"smooth"

    });

});
/* ==========================================
            SCRIPT.JS
            PART 2 / 2
========================================== */

// ==========================================
// Cursor Glow
// ==========================================

const glow = document.createElement("div");

glow.id = "cursor-glow";

document.body.appendChild(glow);

glow.style.position = "fixed";
glow.style.width = "250px";
glow.style.height = "250px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background = "radial-gradient(circle, rgba(255,0,0,.18) 0%, rgba(255,0,0,0) 70%)";
glow.style.transform = "translate(-50%,-50%)";
glow.style.zIndex = "-1";
glow.style.transition = "left .08s linear, top .08s linear";

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


// ==========================================
// Secret 3008 Code
// ==========================================

let typed = "";

document.addEventListener("keydown",(e)=>{

    typed += e.key;

    typed = typed.slice(-4);

    if(typed === "3008"){

        document.body.style.transition = ".6s";
        document.body.style.filter = "brightness(1.15)";

        alert("PROJECT 3008 UNLOCKED");

        setTimeout(()=>{

            document.body.style.filter = "";

        },1200);

        // Future:
        // window.location = "3008.html";

    }

});


// ==========================================
// Album Hover Tilt
// ==========================================

document.querySelectorAll(".album-grid img").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x - rect.width/2)/18;

        const rotateX = -(y - rect.height/2)/18;

        card.style.transform =
        `perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.05)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform = "";

    });

});


// ==========================================
// Scroll To Top Button
// ==========================================

const topButton = document.createElement("button");

topButton.innerHTML = "▲";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "30px";
topButton.style.bottom = "30px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.background = "#ff2d2d";
topButton.style.color = "white";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.fontSize = "20px";
topButton.style.boxShadow = "0 0 20px rgba(255,0,0,.4)";

window.addEventListener("scroll",()=>{

    if(window.scrollY > 700){

        topButton.style.display = "block";

    }else{

        topButton.style.display = "none";

    }

});

topButton.onclick = ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// ==========================================
// Diamond Pulse
// ==========================================

const diamond = document.querySelector(".diamond");

setInterval(()=>{

    diamond.animate([

        {

            filter:"drop-shadow(0 0 20px red)"

        },

        {

            filter:"drop-shadow(0 0 60px red)"

        },

        {

            filter:"drop-shadow(0 0 20px red)"

        }

    ],{

        duration:2200

    });

},4000);


// ==========================================
// Random Glitch
// ==========================================

const heroTitle = document.querySelector("#hero h1");

setInterval(()=>{

    heroTitle.style.textShadow =

    "3px 0 red,-3px 0 blue";

    heroTitle.style.transform =

    "translateX(2px)";

    setTimeout(()=>{

        heroTitle.style.textShadow = "";

        heroTitle.style.transform = "";

    },120);

},10000);


// ==========================================
// Navigation Active Link
// ==========================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.forEach(l=>l.style.color="white");

        link.style.color="#ff2d2d";

    });

});


// ==========================================
// Console Easter Egg
// ==========================================

console.log(

`


███████╗██╗███╗   ██╗ ██████╗██╗  ██╗██╗   ██╗
██╔════╝██║████╗  ██║██╔════╝██║  ██║╚██╗ ██╔╝
█████╗  ██║██╔██╗ ██║██║     ███████║ ╚████╔╝
██╔══╝  ██║██║╚██╗██║██║     ██╔══██║  ╚██╔╝
██║     ██║██║ ╚████║╚██████╗██║  ██║   ██║
╚═╝     ╚═╝╚═╝  ╚═══╝ ╚═════╝╚═╝  ╚═╝   ╚═╝

PROJECT 3008

If you're reading this...
you're curious.

👀

`);

/* =========================================================
   3008 PAGE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    // System date
    var dateElement = document.getElementById("system-date");

    if (dateElement) {
        dateElement.textContent = new Date().toLocaleDateString("en-GB");
    }

    // ===========================
    // FILE MODAL
    // ===========================

    var modal = document.getElementById("file-modal");
    var modalCode = document.getElementById("file-modal-code");
    var modalTitle = document.getElementById("file-modal-title");
    var modalText = document.getElementById("file-modal-text");
    var modalClose = document.querySelector(".file-modal-close");

    var files = {

        "08": {
            code: "FILE 001 — LOCKED",
            title: "08",
            text: "Eight tracks. The first chapter of the 3008 sequence."
        },

        "30": {
            code: "FILE 002 — LOCKED",
            title: "30",
            text: "The date expands. Further information remains unavailable."
        },

        "085": {
            code: "FILE 003 — CLASSIFIED",
            title: "085",
            text: "The unknown signal. Access is restricted."
        },

        "final": {
            code: "FILE 004 — ACCESS DENIED",
            title: "30/08 & 085",
            text: "The final connection cannot currently be opened."
        }

    };

    document.querySelectorAll(".vault-card").forEach(function(card){

        card.addEventListener("click", function(){

            if(!modal) return;

            var file = files[card.dataset.file];

            modalCode.textContent = file.code;
            modalTitle.textContent = file.title;
            modalText.textContent = file.text;

            modal.hidden = false;

            document.body.style.overflow = "hidden";

        });

    });

    function closeModal(){

        if(!modal) return;

        modal.hidden = true;

        document.body.style.overflow = "";

    }

    if(modalClose){

        modalClose.addEventListener("click", closeModal);

    }

    if(modal){

        modal.addEventListener("click", function(e){

            if(e.target === modal){

                closeModal();

            }

        });

    }

    document.addEventListener("keydown", function(e){

        if(e.key === "Escape" && modal && !modal.hidden){

            closeModal();

        }

    });

    // ===========================
    // VAULT PASSWORD
    // ===========================

    var vaultForm = document.getElementById("vault-form");
    var vaultInput = document.getElementById("vault-code");
    var vaultResult = document.getElementById("vault-result");

    if(vaultForm){

        vaultForm.addEventListener("submit", function(e){

            e.preventDefault();

            var code = vaultInput.value.trim();

            if(code === "3008085"){

                vaultResult.style.color = "#54ff79";

                vaultResult.textContent =
                "ACCESS GRANTED — VAULT CONTENT COMING SOON.";

            }

            else{

                vaultResult.style.color = "#ff4d4d";

                vaultResult.textContent =
                "ACCESS DENIED.";

            }

            vaultInput.value = "";

        });

    }

});

/* =========================================================
   PROJECT 3008 — SAFE EASTER EGGS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {
    if (!document.body.classList.contains("page-3008")) return;

    let typedCode = "";
    let typingTimer;

    function showMessage(title, text) {
        let toast = document.createElement("div");

        toast.className = "fn-toast";
        toast.innerHTML = `
            <span class="fn-toast-icon">◇</span>
            <div>
                <p>${title}</p>
                <strong>${text}</strong>
            </div>
        `;

        let container = document.querySelector(".fn-toast-container");

        if (!container) {
            container = document.createElement("div");
            container.className = "fn-toast-container";
            document.body.appendChild(container);
        }

        container.appendChild(toast);

        requestAnimationFrame(function () {
            toast.classList.add("show");
        });

        setTimeout(function () {
            toast.classList.remove("show");

            setTimeout(function () {
                toast.remove();
            }, 350);
        }, 2500);
    }

    function unlockVault() {
        let vaultSection = document.querySelector(".vault-access-section");

        if (!vaultSection) return;

        if (!document.querySelector(".fn-vault-reveal")) {
            let reveal = document.createElement("div");

            reveal.className = "fn-vault-reveal";
            reveal.innerHTML = `
                <p class="section-code">MASTER FILE</p>
                <h3>ACCESS GRANTED</h3>

                <p>
                    Future demos, unused thumbnails, wallpapers and
                    unreleased files will appear here.
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

        localStorage.setItem("finchyVaultUnlocked", "true");
        showMessage("MASTER ACCESS", "VAULT UNLOCKED");
    }

    function runCode(code) {
        /*
          IMPORTANT:
          The longest code is checked first.
          Therefore 3008085 won't accidentally trigger 08 or 085.
        */

        if (code === "3008085") {
            document.body.classList.add("fn-vault-mode");
            unlockVault();
            return;
        }

        if (code === "3008") {
            document.body.classList.toggle("fn-red-mode");
            showMessage("PROJECT 3008", "SYSTEM OVERRIDE");
            return;
        }

        if (code === "085") {
            document.body.classList.toggle("fn-white-mode");
            showMessage("UNKNOWN SIGNAL", "085 MODE");
            return;
        }

        if (code === "08") {
            document.body.classList.toggle("fn-08-mode");
            showMessage("SIGNAL CHANGED", "08 MODE");
        }
    }

    document.addEventListener("keydown", function (event) {
        /*
          Don't secretly record typing inside inputs.
          The vault input has its own submit handler below.
        */

        let tag = event.target.tagName.toLowerCase();

        if (tag === "input" || tag === "textarea") return;

        if (!/^[0-9]$/.test(event.key)) {
            typedCode = "";
            clearTimeout(typingTimer);
            return;
        }

        typedCode += event.key;

        /*
          Only retain enough digits for the longest code.
        */

        typedCode = typedCode.slice(-7);

        clearTimeout(typingTimer);

        /*
          Wait 700ms after the last key before deciding what code
          the user entered. This means typing 3008085 is treated as
          one full code, not 30 + 08 + 085.
        */

        typingTimer = setTimeout(function () {
            runCode(typedCode);
            typedCode = "";
        }, 700);
    });

    /* Vault form */

    let vaultForm = document.getElementById("vault-form");
    let vaultInput = document.getElementById("vault-code");
    let vaultResult = document.getElementById("vault-result");

    if (vaultForm && vaultInput && vaultResult) {
        vaultForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let code = vaultInput.value.trim();

            if (code === "3008085") {
                vaultResult.style.color = "#54ff79";
                vaultResult.textContent = "ACCESS GRANTED.";
                unlockVault();
            } else {
                vaultResult.style.color = "#ff5151";
                vaultResult.textContent = "ACCESS DENIED.";
            }

            vaultInput.value = "";
        });
    }

    /* Keep vault unlocked after refreshing */

    if (localStorage.getItem("finchyVaultUnlocked") === "true") {
        unlockVault();
    }

    /* Live system date */

    let systemDate = document.getElementById("system-date");

    if (systemDate) {
        systemDate.textContent =
            new Date().toLocaleDateString("en-GB");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(
        'a[href$=".html"]'
    ).forEach(function (link) {

        link.addEventListener("click", function (event) {
            const url = link.getAttribute("href");

            if (
                !url ||
                link.target === "_blank" ||
                url.startsWith("#")
            ) {
                return;
            }

            event.preventDefault();

            document.body.classList.add(
                "page-leaving"
            );

            setTimeout(function () {
                window.location.href = url;
            }, 350);
        });

    });
});
