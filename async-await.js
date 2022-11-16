const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Juan'
    },
    {
        id: 3,
        nombre: 'Esteban'
    },
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 500
    },
];

const getEmpleado = (id) => {
    const promesa = new Promise((resolve,reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;
        if (empleado) {
            resolve(empleado);
        } else {
            reject(`No existe el empleado con id ${id}`);
        }
    });
    return promesa;
}

const getSalario = (id) => {
    const promesa = new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;
        (salario)
            ? resolve(salario)
            : reject(`No existe salario para el empleado con id ${id}`);
    });
    return promesa;
}

const getInfoUsuario = async(id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado ${empleado} es de ${salario}`;
    } catch (error) {
        throw error;
    }
    
}

const id = 10;

getInfoUsuario(id)
    .then(msg => {
        console.log("TODO BIEN!");
        console.log(msg);
    }) 
    .catch(err => {
        console.log("TODO MAL!");
        console.log(err);
    }); 



