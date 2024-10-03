// Function to type out the text
function typeOutText(element) {
    const text = element.innerText;
    element.innerText = '';
    let index = 0;

    const typingInterval = setInterval(() => {
        if (index < text.length) {
            element.innerText += text.charAt(index);
            index++;
        } else {
            clearInterval(typingInterval);
        }
    }, 100); // Adjust typing speed here
}

// Select all elements with the 'live-text' class and apply typing effect
document.querySelectorAll('.live-text').forEach(typeOutText);

// Optional: Add smooth transitions when opening new pages
document.querySelectorAll('.nav-buttons a').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default action
        const targetUrl = this.getAttribute('href');

        // Smooth transition effect
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '0'; // Fade out

        setTimeout(() => {
            window.location.href = targetUrl; // Redirect after fade out
        }, 500); // Match this time with the transition duration
    });
});
