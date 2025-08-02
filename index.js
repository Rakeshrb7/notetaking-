// Paste your full JavaScript code from the <script> tag here

class NotesApp {
    // full class implementation here...
}

// Global functions for button clicks
const notesApp = new NotesApp();

function createNewNote() {
    notesApp.createNewNote();
}

function exportNotes() {
    notesApp.exportNotes();
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
            case 'n':
                e.preventDefault();
                createNewNote();
                break;
            case 's':
                e.preventDefault();
                notesApp.saveCurrentNote();
                break;
            case 'f':
                e.preventDefault();
                document.getElementById('searchInput').focus();
                break;
        }
    }
});
