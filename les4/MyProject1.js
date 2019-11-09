var current = "green";
let colors = 
    ["none","none","none","none","none","none","none","none","none"];

function turn(number) {
    $("#s" + number).css("background-color", current);
    colors[number - 1] = current;
    console.log(colors);
    if (current === "green") {
        current = "red";
    } else {
        current = "green";
    }
    $("#s" + number).prop("disabled", "true");
}
