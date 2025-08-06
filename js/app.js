// Using OOP:
class SerialGenerator {
    constructor(buttonSelector, serialSelector, copyButtonSelector, colorInputSelector) {
        // Initialize DOM elements based on selectors
        this.generateBtn = document.querySelector(buttonSelector);
        this.serialSpan = document.querySelector(serialSelector);
        this.copyBtn = document.querySelector(copyButtonSelector);
        this.colorInput = document.getElementById(colorInputSelector);

        // Attach event listeners once elements are initialized
        this.addEventListeners();
    }

    // Method to attach event listeners to relevant elements
    addEventListeners() {
        // Click event for generating a new serial number
        this.generateBtn.addEventListener('click', () => this.handleGenerateButtonClick());

        // Input event for changing the body background color
        this.colorInput.addEventListener('input', () => this.handleColorInput());
    }

    // Handle click event for generating a new serial number
    handleGenerateButtonClick() {
        const serial = this.generateRandomSerial(20); 
        this.displaySerial(serial); 
        this.showCopyButton(); 

        // Change the text of the generate button
        this.generateBtn.querySelector('span').innerText = 'Regenerate';
    }

    // Generate a random serial number of specified length
    generateRandomSerial(length) {
        const allCharacters = "abcdefghijklmnopqrstuvwxyz@ABCDEFGHIJKLMNOPQRSTUVWXYZ#0123456789$!&*(+=*-";
        let randomSerial = '';
        for (let i = 0; i < length; i++) {
            let randomIndex = Math.trunc(Math.random() * allCharacters.length);
            randomSerial += allCharacters[randomIndex];
        }
        return randomSerial;
    }

    // Display the generated serial number in the designated span element
    displaySerial(serial) {
        this.serialSpan.innerHTML = serial;
    }

    // Show the copy button if it's not already visible
    showCopyButton() {
        if (!this.copyBtn.classList.contains('show-copy')) {
            this.copyBtn.classList.add('show-copy');
            this.copyBtn.addEventListener('click', () => this.copyToClipboard());
        }
    }

    // Copy the serial number to the clipboard
    copyToClipboard() {
        const textToCopy = this.serialSpan.innerText;
        navigator.clipboard.writeText(textToCopy)
            .then(() => alert('Text copied to clipboard!'))
            .catch(err => console.error('Failed to copy text: ', err));
    }

    // Handle input event for changing the body background color
    handleColorInput() {
        document.body.style.backgroundColor = this.colorInput.value;
    }
}

// Instantiate the SerialGenerator with appropriate selectors
new SerialGenerator('button', '.serial span', '.copy', 'color');


// Current Year
const currentYear = new Date().getFullYear();
document.getElementById('copyright-year').innerText = currentYear;