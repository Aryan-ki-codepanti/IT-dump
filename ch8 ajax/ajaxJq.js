// load
$("#btn-html").on("click", function () {
    $(".content-html").load("data.html");
});

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

// .getJson
$("#btn-json").on("click", function () {
    $.getJSON("data.json")
        .done(function (data) {
            console.log(data);
        })
        .fail(function () {
            console.log("Errr");
        })
        .always(function () {
            console.log("done");
        });
});

$("input:submit").on("click", function (e) {
    var data = $("form").serialize();
    e.preventDefault();
    console.log("hiiii", data);
});
