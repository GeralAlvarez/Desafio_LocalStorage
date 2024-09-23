document.getElementById("buttonText").addEventListener("click", function () {
    const inputValue = document.getElementById("inputText").value;
    localStorage.setItem("userInput", inputValue);
    document.getElementById("inputText").value = '';
    console.log("Dato guardado:", inputValue);
});
