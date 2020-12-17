const defaultPrimaryColor = document.documentElement.style
    .getPropertyValue('--primary-color');
const defaultSecondaryColor = document.documentElement.style
    .getPropertyValue('--secondary-color');

const primaryColorPicker = document.querySelector('#primary-picker');
const secondaryColorPicker = document.querySelector('#secondary-picker');
const resetButton = document.querySelector('.reset-button');

primaryColorPicker.addEventListener('input', OnPrimaryColorChanged);
secondaryColorPicker.addEventListener('input', OnSecondaryColorChanged);
resetButton.addEventListener('click', colorReset);

function OnPrimaryColorChanged() {
    let newColor = document.getElementById("primary-picker").value;
    document.documentElement.style
        .setProperty('--primary-color', newColor);
}

function OnSecondaryColorChanged() {
    let newColor = document.getElementById("secondary-picker").value;
    document.documentElement.style
        .setProperty('--secondary-color', newColor);
}

function colorReset() {
    document.documentElement.style
        .setProperty('--primary-color', defaultPrimaryColor);
    document.documentElement.style
        .setProperty('--secondary-color', defaultSecondaryColor);
}