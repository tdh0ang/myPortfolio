document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.querySelector('#role');
    const textToType = ["Software Developer", "Tech Enthusiast", "Guitarist", "Motorsports Fan"];
    let textIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let typingSpeed = 100; // Typing speed in ms
    let deletingSpeed = 50; // Deleting speed in ms
    let pauseTime = 2000; // Pause time after typing the full text

    function type() {
        if (charIndex < textToType[textIndex].length) {
            currentText += textToType[textIndex].charAt(charIndex);
            typingText.textContent = currentText;
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            // Stop blinking cursor when typing is complete
            typingText.classList.add('complete');
            setTimeout(() => {
                typingText.classList.remove('complete'); // Enable blinking again
                deleteText();
            }, pauseTime);
        }
    }

    function deleteText() {
        if (charIndex > 0) {
            currentText = currentText.slice(0, -1);
            typingText.textContent = currentText;
            charIndex--;
            setTimeout(deleteText, deletingSpeed);
        } else {
            textIndex = (textIndex + 1) % textToType.length;
            type(); // Start typing the next word
        }
    }

    type(); // Start typing on page load
});
