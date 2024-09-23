document.addEventListener("DOMContentLoaded", function () {
    const storedData = localStorage.getItem("userInput");
    document.getElementById("data").textContent = storedData ? storedData : "No hay datos disponibles";
});
