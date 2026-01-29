const notesArea = document.getElementById("notes-area");

// Load saved notes
notesArea.value = localStorage.getItem("dashboard-notes") || "";

// Save on input
notesArea.addEventListener("input", () => {
    localStorage.setItem("dashboard-notes", notesArea.value);
});