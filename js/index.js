home = document.getElementById("home")
table = document.getElementById("table")

home.addEventListener("click", () => {
    if(table.style.display == "none") {
        table.style.display = "block"
    }
    else {
        table.style.display == "none"
    }
});