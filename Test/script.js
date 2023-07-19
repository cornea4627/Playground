const main = document.querySelector("main");
const test = document.createElement("input");
main.append(test);
var x = 0;
setInterval(counter, 10)

function counter() {
    test.setAttribute("type","text");
    test.setAttribute("value",x);
    x++;
};