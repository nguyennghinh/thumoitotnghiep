// Open Modal
function openModal() {
    const modal = document.getElementById('rsvpModal');
    modal.style.display = "block";
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('rsvpModal');
    modal.style.display = "none";
}

// Close modal when clicked outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('rsvpModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
