const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Grupo-19:grupo19@cursadanodejs.ls9ii.mongodb.net/Node-js')
.then(() => console.log('Conexion exitosa a MongoDB'))
.catch(error => console.error('Error al conectar a MongoDB', error));

const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido' },
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    createdAt: { type: Date, default: Date.now },
    creador: String
  }, { collection: 'Grupo-19' });
  
  const SuperHero = mongoose.model('SuperHero', superheroSchema);


  /*
  async function insertSuperHero() {
    const hero = new SuperHero({
      nombreSuperHeroe: 'Mujer Maravilla',
      nombreReal: 'X',
      edad: 37,
      planetaOrigen: 'Tierra',
      debilidad: 'Antonela',
      poderes: ['Regate', 'Agilidad', 'Presicion'],
      aliados: ['Scaloni', 'Di Maria'],
      enemigos: ['Gary Medel'],
      creador: 'Fabricio'
    });
    await hero.save();
    console.log('Superhéroe insertado:', hero);
}
  
insertSuperHero();
*/

/*
async function updateSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.updateOne(
      { nombreSuperHeroe: nombreSuperHeroe },
      { $set: { creador: 'X' } }
    );
    console.log('Resultado de la actualización:', result);
}
  
updateSuperHero('Robin');
*/


/*
async function deleteSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.deleteOne({ nombreSuperHeroe: nombreSuperHeroe });
    console.log('Superhéroe eliminado:', result);
}

deleteSuperHero('Robin');
*/

async function findSuperHeroes() {
    const heroes = await SuperHero.find({ planetaOrigen: 'Tierra' });
    console.log('Superhéroes encontrados:', heroes);
}

findSuperHeroes();