const assert = require('assert');
const api = require("../services/api");


var car = {
    "modelo": "HYUNDAI HB20",
    "marca": "HYUNDAI",
    "ano": 2013,
    "placa": "KAV1008",
    "chassi": "5yM Et0TAA pm Rp2552",
    "renavam": "15261076114"
}

describe('Teste das rotas car', function () {
    describe("Rota create", function () {
        it(`Passando um carro de modelo ${car.modelo} para rota create`, async function () {
            let res = await api.post("/car/", car);

            car.id = res.data

            assert.strictEqual(res.status, 201);
        });
    });

    describe("Rota update", function () {
        it(`Passando um ano diferente para o ${car.modelo} na rota update`, async function () {
            car.ano = 2012
            let res = await api.put(`/car/${car.id}`, car);

            assert.strictEqual(res.status, 200);
        });
    });

    describe("Rota read", function () {
        it('Chamando a rota read para pegar os carros do arquivo', async function () {
            let res = await api.get("/car/");

            assert.strictEqual(res.status, 200);
            assert.ok(car.id in res.data);
        });

        it('Chamando a rota read para pegar om carro do arquivo', async function () {
            let res = await api.get(`/car/${car.id}`);

            assert.strictEqual(res.status, 200);
        });
    });

    describe("Rota delete", function () {
        it(`Deletando o ${car.modelo} na rota delete`, async function () {
            let res = await api.delete(`/car/${car.id}`);

            assert.strictEqual(res.status, 200);
        });
    });
});
