const carschema = {
    modelo: {
        type: "string",
        required: true,
    },
    marca: {
        type: "string",
        required: true,
    },
    ano: {
        type: "number",
        required: true,
    },
    placa: {
        type: "string",
        required: true,
    },
    chassi: {
        type: "string",
        required: true,
    },
    renavam: {
        type: "string",
        required: true,
    }
};

module.exports = carschema;
