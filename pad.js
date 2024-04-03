function pad(str = "", symbol  = " ", count  = 0, start = true) {
    if (typeof str !== 'string') {
        str = String(str);
    }
    if (typeof symbol !== 'string') {
        symbol = String(symbol);
    }
    if (typeof count !== 'number') {
        count = Number(count);
    }
    if (isNaN(count)) {
        throw new Error("Error: Ошибка входных данных.");
    }
    if (typeof start !== 'boolean') {
        start = Boolean(start);
    }
    if (symbol.length !== 1) {
        throw new Error("Error: символ должен быть одиночным.");
    }
    if (str.length >= count) {
        return str;
    }
    let padding = symbol.repeat(count - str.length);
    return start ? padding + str : str + padding;
}

try {
    let new_str;
    // new_str = pad(NaN, NaN, NaN,NaN); // Error: Ошибка входных данных.
    // new_str = pad("", "", 0, 1); // Error: символ должен быть одиночным.
    new_str = pad("", "*", 0, 1); // new_str = ""
    new_str = pad("google", "*", 7, 1); // *google
    new_str = pad("google", "*", 7, 0); // google*
    new_str = pad("google", "*", "7", 1); // *google
    // new_str = pad("google", "**", "7", 1); // Error: символ должен быть одиночным.
    new_str = pad(undefined, "*", 10, 1); // **********
    new_str = pad("google", undefined, "7", 1); // " google"
    new_str = pad("google", "+", 7, "text"); // +google
    // new_str = pad("google", "+", "text", 1); // Error: Ошибка входных данных.
    console.log(new_str)
} catch (e) {
    console.error(e.message)
}