str = "100 грн";
let value = Number(str.replace("грн","").trim());
console.log(value);