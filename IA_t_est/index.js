$(document).ready(function () {
    $(".car-form").submit(function (e) {
        e.preventDefault();

        var car = {
            manufacturer: $("#manufacturer").val(),
            year: $("#year").val(),
            seating: $("#seating").val(),
            fuel: $("input[type='radio']:checked").val()
        };

        console.log("JS OBJECT");
        console.log(car);
        console.log("JSON OBJECT");
        console.log(JSON.stringify(car));
    });
});
