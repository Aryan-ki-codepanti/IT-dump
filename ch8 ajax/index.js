var htmlCon = document.querySelector(".content-html");
var jsonCon = document.querySelector(".content-json");
var htmlBut = document.getElementById("btn-html");
var jsonBut = document.getElementById("btn-json");

var handleHtml = function () {
    var xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (xhr.status == 200) {
            htmlCon.innerHTML = xhr.responseText;
        }
    };

    xhr.open("GET", "data.html", true);
    xhr.send(null);
};

var render = function (data) {
    htm = "";
    for (let i = 0; i < data.length; i++) {
        var todo = data[i];
        console.log(data);
        htm += `
            <p>Loc : ${todo.title} at ${todo.completed}</p>
        `;
    }
    jsonCon.innerHTML = htm;
};

var handleJson = function () {
    var xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (xhr.status == 200) {
            var data = JSON.parse(xhr.response);
            render(data);
        }
    };

    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhr.send(null);
};

htmlBut.addEventListener("click", handleHtml);
jsonBut.addEventListener("click", handleJson);
