const notesContainer = document.querySelector(".notes-container");
const createBtn= document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");

}// to retrieve the notes in the local storage
showNotes();

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}//updates the notes 
function getCurrentTimestamp() {
    const now = new Date();
    return `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
}

createBtn.addEventListener("click",()=>{
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    let timestamp = document.createElement("div");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable", "true");
    timestamp.className = "timestamp";
    timestamp.textContent = getCurrentTimestamp();
    img.src ="delete.png";
    let noteWrapper = document.createElement("div");
    noteWrapper.className = "note-wrapper";
    
    noteWrapper.appendChild(inputbox);
    noteWrapper.appendChild(timestamp);
    noteWrapper.appendChild(img);
    
    notesContainer.appendChild(inputbox).appendChild(img);
    

})// creates a new note

notesContainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
        
    
       }
       else if(e.target.tagName==="P"){
        notes =document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
       }
})//Deleting a note and updating a storage
document.addEventListener("keydown", event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})//handling the enter key