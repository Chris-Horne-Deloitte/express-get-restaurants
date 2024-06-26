const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

//TODO: Create your GET Request Route Below: 

app.use(express.json());

app.get("/restaurants", async(req, res) => {
    const restaurants = await Restaurant.findAll();
    res.json(restaurants)
})
app.get("/restaurants/:id", async(req, res) => {
    const id = await Restaurant.findByPk(req.params.id);
    res.json(id)
})

app.post("/restaurants", async (req, res) => {
    const restaurant = Restaurant.create(req.body);
    res.json(restaurant);
})

app.put("/restaurants/:id", async (req, res) => {
    const updatedRest = await Restaurant.update(req.body, {where: {id: req.params.id}});
    res.json(updatedRest);
})
app.delete("/restaurants/:id", async (req, res) => {
    const deletedRest = await Restaurant.destroy({where: {id : req.params.id}});
    res.json(deletedRest)
});




module.exports = app;