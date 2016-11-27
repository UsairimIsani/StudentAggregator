var mainArray = [];
var array = [];
var part ="";
function aggregator() {
    var n = document.getElementById("name").value;
    var a = document.getElementById("age").value;
    var g = document.getElementById("gender").value.toLowerCase();
    if (n === " " || n === "") {
        alert("enter what is required");
    } else {
        array = [];
        array.push(n, a, g);
        mainArray.push(array);
        cleaner();
        writer();
    }
}

function cleaner() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "";
}

function writer() {
    todoList = document.getElementById("list");
    list = "";
    for (var i = 0; i < mainArray.length; i++) {
        part = mainArray[i];
        for (var j = 0; j < part.length; j++) {
            list += "<div id='"+part+j+"'>" + part[j] +"</div>"

        }
    }


    // // index = i;
    // // list += "<li>" + mainArray[i] + "</li>" + "<button onclick = 'removeOne()'>Remove item</button>";
    // // todoList.innerHTML = list;
    // var array = "";
    // array = mainArray[i];
    // // array = array.split(",");
    // list += "<div class='mainArray>" + array[i] + "</div>";
    // list += "<div class='mainArray>" + array[i+1] + "</div>";
    // list += "<div class='mainArray>" + array[i+2] + "</div>";
    todoList.innerHTML = list;

}


function removeOne() {

}

function removeAll() {
    mainArray = [];
    todoList.innerHTML = "";
}