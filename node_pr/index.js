var fs = require("node:fs");

try {
    var data = fs.readFileSync("data.txt", "utf8");
    console.log(data);
} catch (err) {
    console.log("Errorhuweh");
}

fs.readFile("data.txt", "utf8", function (err, data) {
    if (err) {
        console.log("Error lol");
        return;
    }
    console.log(data);
});
