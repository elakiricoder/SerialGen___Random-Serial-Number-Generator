class SerialNumber {
    constructor() {
        this.generateBtn = document.querySelector('button');
        this.events();
        // this.generateSerial();
        // this.displaySerial();
        // this.copyBtn();
        // this.copyToClipboard();
    }
    // generate specific random number of charaters [20]
    events() {
        this.generateBtn.onclick = function() {
            console.log('ok [events]');
        }
    }
    // display random number in its span
    // Show copy button if it is hidden
    // copy to clipboard
}
new SerialNumber()