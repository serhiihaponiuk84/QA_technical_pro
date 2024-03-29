let heightOftriangle = 5;
let drawingSymbol = "*";

function drawChristmasTree (heightOftriangle = 5, drawingSymbol = "*") {
    if (isNaN(heightOftriangle) || (!heightOftriangle)) {
        console.log("Висота трикутника повинна бути числом.");
        console.log("Для малювання трикутника буде використано висота за умовчанням - 5.");
        drawChristmasTree(undefined, drawingSymbol);
        return;
    }
    if (heightOftriangle < 2) {
        console.log("Висота трикутника повинна бути більше 1, інакше кінцева фігура не буде схожа на трикутник.");
        console.log("Для малювання трикутника буде використано висота за умовчанням - 5.");
        drawChristmasTree(undefined, drawingSymbol);
        return;
    }
    if (!drawingSymbol) {
        console.log("Не можна намалювати трукутник, використовуючи замість символа для малювання порожній рядок.");
        console.log("Для малювання трикутника буде використано символ за умовчанням - * (зірочка).");
        drawChristmasTree(heightOftriangle)
        return;
    }
    if (String(drawingSymbol).length !== 1) {
        console.log("Довжина символа для малювання буде скорочена до одного (першого) символа введеного рядка.");
        drawingSymbol = String(drawingSymbol)[0];
    }

    let triangleString = "";
    for (let i = 1; i <= heightOftriangle; i++){
        for (let j =1; j <= i; j++) triangleString += drawingSymbol;
        console.log(triangleString)
        triangleString = "";
    }
    console.log();
}

drawChristmasTree(heightOftriangle, drawingSymbol)
drawChristmasTree();
drawChristmasTree(-1, "+++");
drawChristmasTree(3, "q");
drawChristmasTree(undefined, 505);
