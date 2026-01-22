// validation
function details(info){
    if(typeof info !== 'object' || !info.name || !info.age){
        return "please provide valid object information";
    }

    return `My name is: ${info.name} and my age is ${info.age} hehehehehehe`;
}
console.log(details({name: 'tutu', age: 2}));
