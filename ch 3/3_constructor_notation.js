// or var hotel = {}
var hotel = new Object();
hotel.name = "hehe";
hotel.rooms = 40;
hotel.booked = 25;

console.log(hotel);
console.log(hotel.rooms);
delete hotel.rooms;
console.log(hotel.rooms);
