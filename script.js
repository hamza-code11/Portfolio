// document.addEventListener('DOMContentLoaded', () => {
//     const darkMode = localStorage.getItem('darkMode');
//     if (darkMode === 'enabled') {
//         document.body.classList.add('dark-mode');
//     }
// });

// function toggleDarkMode() {
//     document.body.classList.toggle('dark-mode');
//     const isDarkMode = document.body.classList.contains('dark-mode');
//     localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
// }


document.addEventListener('DOMContentLoaded', () => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});

function toggleDarkMode(event) {
    event.preventDefault(); // Default behavior ko roknay ke liye
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

function showAlert(facebook) {
    alert(`Thank you for your interest! Currently, I don't have an active ${facebook} account.`);
}
function showAlert(insta) {
    alert(`Thank you for your interest! Currently, I don't have an active ${insta} account.`);
}
function showAlert(twitter) {
    alert(`Thank you for your interest! Currently, I don't have an active ${twitter} account.`);
}
function showAlert(linkin) {
    alert(`Thank you for your interest! Currently, I don't have an active ${linkin} account.`);
}
function showAlert(github) {
    alert(`Thank you for your interest! Currently, I don't have an active ${github} account.`);
}
