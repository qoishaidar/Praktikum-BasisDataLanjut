const express = require("express")
const cors = require("cors")
const db = require("./app/models")
const app = express()
const mahasiswaController = require('./app/controllers/mahasiswa.controller')
const mahasiswaRouter = require('./app/routes/mahasiswa.routes')

const corsOptions = {
    origin: "*"
};

//register cors middleware
app.use(cors(corsOptions));
app.use(express.json());

//konek ke database
const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
db.mongoose.connect(db.url, mongooseConfig)
    .then(() => console.log("database connected"))
    .catch(err => {
        console.log('gagal konek ${err.message}');
        process.exit();
    });

//memanggil routes mahasiswa
require("./app/routes/mahasiswa.routes")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log('server started on port ${PORT}'));

app.get('/mahasiswa', mahasiswaController.findAll2);
app.get('/mahasiswa/:id', mahasiswaController.show);
app.patch('/mahasiswa/:id', mahasiswaController.update);
app.delete('/mahasiswa/:id', mahasiswaController.delete);
app.post('/mahasiswa/create', mahasiswaController.create);