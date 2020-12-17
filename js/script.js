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