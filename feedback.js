if (document.readyState !== "loading"){
    console.log("Document is ready");
    initializeCode();
} else {
    document.addEventListener("DOMContentLoaded", function(){
        console.log("Document is ready after loading");
        initializeCode();
    })
}

let noteCounter = 0;

function initializeCode() {
    const submitButton = document.getElementById("submit");
    const removeButton = document.getElementById("remove");
    submitButton.addEventListener("click", function(){
        const notes = document.getElementById("notes")
        let newParagraph = document.createElement("p");
        newParagraph.innerText = ++noteCounter + ". " + document.getElementById("comment").value
        notes.appendChild(newParagraph);
})
    removeButton.addEventListener("click", function(){
        const notes = document.getElementById("notes")
        notes.removeChild(notes.lastChild);
        --noteCounter;
})

}
