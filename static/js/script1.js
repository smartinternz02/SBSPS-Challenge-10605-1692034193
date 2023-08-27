const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})

const smoothScroll = target => {
            const element = document.querySelector(target);
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        };

        // Smooth scroll to the default section on page load
        window.addEventListener('load', () => {
            const defaultSection = '#home'; // Change to the ID of your default section
            smoothScroll(defaultSection);
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault();
                const target = event.currentTarget.getAttribute('href');
                smoothScroll(target);
            });
        });