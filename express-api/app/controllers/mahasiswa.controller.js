const db = require("../models/mahasiswa.model")
const Mahasiswa = require('../models/mahasiswa.model'); 

exports.create = (req, res) => {
    req.body.tanggal_lahir = new Date(req.body.tanggal_lahir)
    Mahasiswa.create(req.body)
        .then(() => res.send({message: "data berhasil disimpan"}))
        .catch(err => res.status(500).send({message: err.message}));

}

exports.findAll = (req, res) => {
    Mahasiswa.find()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({message: err.message}))
}

exports.findAll2 = async (req, res) => {
    try {
        const data = await Mahasiswa.findAll();
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.show = (req, res) => {
    const id = req.params.id;
    Mahasiswa.findById(id)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({message: err.message}))
}

exports.update = (req, res) => {
    const id = req.params.id;
    req.body.tanggal_lahir = new Date(req.body.tanggal_lahir)
    Mahasiswa.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data){
                res.status(484).send({message: "tidak dapat mengupdate data"})
            }
            res.send({message: "data berhasil diupdate"})
        })
        .catch(err => res.status(500).send({message: err.message}))
}

exports.delete = (req, res) => {
    const id = req.params.id;
    Mahasiswa.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Tidak dapat menemukan data untuk dihapus" });
            } else {
                res.send({ message: "Data berhasil dihapus" });
            }
        })
        .catch(err => res.status(500).send({ message: err.message }));
};

