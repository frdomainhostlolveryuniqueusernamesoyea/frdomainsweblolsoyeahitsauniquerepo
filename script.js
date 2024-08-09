const switchToggle = document.getElementById('dark-mode-switch');
const body = document.body;

switchToggle.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});
