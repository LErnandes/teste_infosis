const fs = require('fs');
var path = require('path');

var jsonPath = path.join(__dirname, '..', 'data', 'car.json');
var car = require(jsonPath);
var carschema = require("../models/car")



async function commit(car) {
    try {
        fs.writeFile(jsonPath, JSON.stringify(car), 'utf8', (error) => {
            if (error) {
                console.error(error);
                throw "Ocorreu um erro"
            }
        });
    } catch (error) {
        console.error(error)
        throw "Ocorreu um erro" 
    }
}


function checkschema(data) {
    let checkeddata = {};

    Object.keys(carschema).forEach(function (key) {
        let field = carschema[key];

        if (field.required && !(key in data)) {
            throw `Falta o campo ${key}`
        }

        if (typeof data[key] !== field.type) {
            throw `O campo ${key} tem que ser do tipo ${field.type}`
        }

        checkeddata[key] = data[key];
    });

    return checkeddata
}


async function getCars(id) {
    try {
        if (typeof id !== 'undefined') {
            return car[id]
        }

        return car
    } catch (error) {
        console.error(error)
        throw "Ocorreu um erro"
    }
}


async function updateCars(id, data) {
    try {
        if (id in car) {
            data = checkschema(data);

            if (!isNaN(data)) {
                throw "Ocorreu um erro"
            }

            data.id = car[id].id;
            car[id] = data;

            await commit(car)

            return data
        }
    } catch (error) {
        console.error(error)
        throw error
    }
}


async function deleteCars(id) {
    try {
        if (id in car) {
            delete car[id]
            await commit(car)
        }
    } catch (error) {
        console.error(error)
        throw "Ocorreu um erro"
    }
}


async function createCars(data) {
    try {
        let id = Date.now().toString(36);

        data = checkschema(data);

        if (!isNaN(data)) {
            throw "Ocorreu um erro"
        }

        data.id = id;
        car[id] = data;

        await commit(car)

        return id
    } catch (error) {
        console.error(error)
        throw "Ocorreu um erro"
    }
}


module.exports = { createCars, getCars, updateCars, deleteCars }
