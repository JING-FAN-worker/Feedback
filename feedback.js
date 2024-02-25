if (document.readyState !== "loading"){
    console.log("Document is ready");
    initializeCode();
} else {
    document.addEventListener("DOMContentLoaded", function(){
        console.log("Document is ready after loading");
        initializeCode();
    })
}

function initializeCode() {
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", function(){
        const notes = document.getElementById("notes")
        let newParagraph = document.createElement("p");
        newParagraph.innerText = document.getElementById("comment").value
        notes.appendChild(newParagraph);
})

}
