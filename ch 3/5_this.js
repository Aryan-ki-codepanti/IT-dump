const my_func = () => {
    console.log(this);
};
const my_func2 = function () {
    console.log(this);
};
console.log(this);
my_func();
my_func2();
