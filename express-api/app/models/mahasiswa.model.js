// mahasiswa.model.js
const mongoose = require('mongoose');

const schema = mongoose.Schema(
    {
        nama_lengkap: String,
        jenis_kelamin: String,
        tanggal_lahir: Date,
        tempat_lahir: String,
        alamat: String,
    },
    {
        timestamps: true
    }
);

schema.method("toJSON", function () {
    const { _id, __v, ...object } = this.toObject();
    object.id = _id;
    return object;
});

const Mahasiswa = mongoose.model("Mahasiswa", schema);

module.exports = Mahasiswa;
