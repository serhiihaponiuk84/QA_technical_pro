let heightOftriangle = 5;
let drawingSymbol = "*";
max_heightOftriangle = 50

function drawChristmasTree (heightOftriangle = 5, drawingSymbol = "*") {
    if (typeof heightOftriangle != 'number') {
        heightOftriangle = Number(heightOftriangle);
    }
    if (isNaN(heightOftriangle) || heightOftriangle < 2) {
        console.log("Висота трикутника повинна бути числом більше 1, інакше кінцева фігура не буде схожа на трикутник.");
        return NaN;
    }
    if (heightOftriangle > max_heightOftriangle) {
        console.log("Висота трикутника повинна бути числом не більше 50.");
        return NaN;
    }
    if (!drawingSymbol) {
        console.log("Не можна намалювати трикутник, використовуючи замість символа для малювання порожній рядок.");
        return NaN;
    }
    if (typeof drawingSymbol !== "string") {
        drawingSymbol = String(drawingSymbol)
    }
    if (drawingSymbol.length !== 1) {
        console.log("Довжина символа для малювання буде скорочена до одного (першого) символа введеного рядка.");
        drawingSymbol = drawingSymbol[0];
    }

    let triangleString = "";
    for (let i = 1; i <= heightOftriangle; i++){
        for (let j =1; j <= i; j++) {
            triangleString += drawingSymbol;
        }
        console.log(triangleString)
        triangleString = "";
    }
    console.log();
}

drawChristmasTree(heightOftriangle, drawingSymbol)
drawChristmasTree();
drawChristmasTree(-1, "+++");
drawChristmasTree("3", "q");
drawChristmasTree(3, "");
drawChristmasTree(0, "");
drawChristmasTree(undefined, 505);