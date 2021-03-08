const express = require("express");
const router = express.Router();

const carService = require("../services/carService")


router.get("/", async (req, res) => {
    try {
        let response = await carService.getCars();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get("/:id", async (req, res) => {
    try {
        let response = await carService.getCars(req.params.id);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post("/", async (req, res) => {
    try {
        let response = await carService.createCars(req.body);
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put("/:id", async (req, res) => {
    try {
        let response = await carService.updateCars(req.params.id, req.body);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        let response = await carService.deleteCars(req.params.id);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;
