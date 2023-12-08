module.exports = app => {
    const mahasiswa = require("../controllers/mahasiswa.controller")
    const r = require("express").Router();

    r.get("/", mahasiswa.findAll);
    r.get("/:id", mahasiswa.show);
    r.get("/", mahasiswa.create);
    r.get("/:id", mahasiswa.update);
    r.get("/:id", mahasiswa.delete);

    app.use("/mahasiswa", r);
}