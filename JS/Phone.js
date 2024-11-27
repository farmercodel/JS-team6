function padNumber(num, length) {
    return String(num).padStart(length, '0');
}

function increment(displayId, max) {
    const display = document.getElementById(displayId);
    let current = parseInt(display.textContent);
    current = current >= max ? 0 : current + 1;
    const length = max.toString().length;
    display.textContent = padNumber(current, length);
}

function saveNumber() {
    const phone1 = document.getElementById('display1').textContent;
    const phone2 = document.getElementById('display2').textContent;
    const phone3 = document.getElementById('display3').textContent;

    const fullNumber = `${ phone1 } - ${ phone2 } - ${ phone3 }`;
    document.getElementById('savedPhoneNumber').innerText = fullNumber;
    localStorage.setItem('savedPhoneNumber', fullNumber);
    signUpButton.disabled = false;
}