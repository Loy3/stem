
let home = document.getElementById("home");
let about = document.getElementById("about");
let stats = document.getElementById("stats");
let why = document.getElementById("why");
let sol = document.getElementById("sol");

    window.onload = function () {
        home.className = "active";
        stats.className = "";
        about.className = "";
        why.className = "";
        sol.className = "";
    }

    function toStats() {
        document.getElementById('toStats').scrollIntoView({ behavior: 'smooth' });

        home.className = "";
        stats.className = "active";
        about.className = "";
        why.className = "";
        sol.className = "";
    }

    function toAbout() {
        document.getElementById('toAbout').scrollIntoView({ behavior: 'smooth' });
        
        home.className = "";
        stats.className = "";
        about.className = "active";
        why.className = "";
        sol.className = "";
    }

    function toWhy() {
        document.getElementById('toWhy').scrollIntoView({ behavior: 'smooth' });

        home.className = "";
        stats.className = "";
        about.className = "";
        why.className = "active";
        sol.className = "";
    }

    function toSolutions() {
        document.getElementById('toSolutions').scrollIntoView({ behavior: 'smooth' });

        home.className = "";
        stats.className = "";
        about.className = "";
        why.className = "";
        sol.className = "active";
    }

    function toTop() {
        document.getElementById('body').scrollIntoView({ behavior: 'smooth' });

        home.className = "active";
        stats.className = "";
        about.className = "";
        why.className = "";
        sol.className = "";
    }