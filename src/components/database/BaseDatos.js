
const array = [
    {
        id: "1001",
        name: "Crisitan Rendon",
        age: "21",
        phone: "320431",
        phone2: "8283132",
        address: "carrera 32 c d nort 21",
        email: "Cris@gmail.com",
        password: "56",
        confcontraseña: "56",
    },
    {
        id: "1002",
        name: "Juan Pablo",
        age: "34",
        phone: "310734",
        phone2: "2619809",
        address: "carrera 45  sur 45",
        email: "Juan@gmail.com",
        password: "34",
        confcontraseña: "34",
    }
];

export const Guardar = (usuario) =>{
    array.push(usuario);

    return( console.log(array));
};

export const GetArray = () =>{
    return(array);
};


