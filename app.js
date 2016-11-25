var mainArray = [];

function aggregator() {
    var n = document.getElementById("name").value;
    var a = document.getElementById("age").value;
    var g = document.getElementById("gender").value.toLowerCase();
    if (n === " " || n === "") {
        alert("enter what is required");
    } else {
        var array = [];
        array.push(n, a, g);
        mainArray.push(array);
        cleaner();
    }
}

function cleaner() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "";
}

console.log(mainArray);
