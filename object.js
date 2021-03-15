/*let bus={
    wheel : 4,
    color : "red",
    honk : function(){
        return "bus is honking";
    },
};
bus.capacity=98;
/*console.log(bus.wheel);
console.log(bus.color);
console.log(bus.honk());
bus.capacity=4;
console.log(bus.capacity);
console.log(bus);
bus.wheel=6;
console.log(bus.wheel);*/

/*let capacity="wheel";
console.log(bus["capacity"]);
console.log(bus[capacity]);
bus["wheel"]=100;
console.log(bus["wheel"]);*/

let bus={
    id :{
        prop : "red",
    },

};

let id =349;
let prop="prop";
console.log(bus.id.prop);
console.log(bus[id]);
console.log(bus.id[prop]);