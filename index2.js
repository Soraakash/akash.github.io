
const mainmenu = document.querySelector(".mainmenu");
const closemenu = document.querySelector(".closemenu");
const openmenu = document.querySelector(".openmenu");

openmenu.addEventListener("click", show);
closemenu.addEventListener("click", close);

function show() {
  mainmenu.style.display = "flex";
  mainmenu.style.right = "0";
  closemenu.style.display = "block";
  openmenu.style.display = "none";
}
function close() {
  mainmenu.style.right= "-100%";
  closemenu.style.display = "none";
  openmenu.style.display = "block";
}

var icon = document.getElementById("darkicon");

var darkmode;
if (localStorage.getItem("myCat")) {
  // if dark mode is in storage, set variable with that value
  darkmode = localStorage.getItem("myCat");
}
// if dark mode is not in storage, set variable to 'light'
else {
  darkmode = "white";
}

localStorage.setItem("myCat", darkmode);

if (localStorage.getItem("myCat") == "black") {
  icon.src = "sun.png";

  document.body.classList.add("dark-theme");
}

// var icon = document.getElementById("darkicon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "sun.png";
    localStorage.setItem("myCat", "black");
  } else {
    icon.src = "moon.png";
    localStorage.setItem("myCat", "white");
  }
};

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
// take a variable which
