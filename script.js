let messageForm = document.getElementById("tiles-preview-form");


messageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = document.getElementById("textbox").value;
    const messageLength = message.length;
    const tileContainer = document.getElementById("tile-container")
    if (tileContainer.children.length > 0) {
        tileContainer.innerHTML = '';
    }
    for (let letter = 0; letter < messageLength; letter++) {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.textContent = message[letter];
        tileContainer.appendChild(tile);
    }
})