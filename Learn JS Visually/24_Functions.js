var inches = convertToInches(10);
document.write(inches);

function convertToInches(centimeters) {
    return Math.round(centimeters*0.39370) + "\"";
}
