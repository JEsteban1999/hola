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

const getEmpleado = (id,callback) => {
    const empleado = empleados.find((e) => {
        return e.id === id;
    })?.nombre;

    if (empleado) {
        callback(null,empleado);
    } else {
        callback(`Empleado con id ${id} no existe`);
    }
}

const getSalario = (id,callback) => {
    const salario = salarios.find((s) => {
        return s.id === id;
    })?.salario;

    if (salario) {
        callback(null,salario);
    } else {
        callback(`Salario para empleado con id ${id} no existe`);
    }
}

const id = 10;

getEmpleado(id,(error,empleado) => {
    if (error) {
        return console.log(error);
    }

    getSalario(id,(error,salario) => {
        if (error) {
            return console.log(error);
        }
        console.log(`El empleado: ${empleado} tiene un salario de ${salario}`);
    })

})

