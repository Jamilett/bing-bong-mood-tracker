import connection from '../config/connection';
import { User, Feelings_Catalog } from '../models/index.js';

// Start the seeding runtime timer
console.time('seeding');

connection.on('error', (err) => err);
// Creates a connection to mongodb
connection.once('open', async () => {

    // Delete the User DB if it exists
    let userCheck = await connection.db?.listCollections({ name: 'users' }).toArray();
    if (userCheck?.length) {
        await connection.dropCollection('users');
    }

    // Delete the Password DB if it exists
    let passswordCheck = await connection.db?.listCollections({ name: 'feelings_catalogs' }).toArray();
    if (passswordCheck?.length) {
        await connection.dropCollection('feelings_catalogs');
    }

    // Delete the feelings_users DB if it exists
    if (passswordCheck?.length) {
        await connection.dropCollection('feelings_users');
    }

    // Delete the feelings_catalogs DB if it exists
    if (passswordCheck?.length) {
        await connection.dropCollection('feelings_catalogs');
    }

    //seed the users 
    /*
    const users: any[] = [
        { _id: "67d0cd2ecdd8c5addba64561", username: "Jam", email: "jam@gmail.com", password: "67d0cd2ecdd8c3addba64561" },
        { _id: "67d0cd2ecdd8c5addba64562", username: "Gera", email: "gera@gmail.com", password: "67d0cd2ecdd8c3addba64562" },
        { _id: "67d0cd2ecdd8c5addba64563", username: "Carlos", email: "carlos@gmail.com", password: "67d0cd2ecdd8c3addba64563" },
        { _id: "67d0cd2ecdd8c5addba64564", username: "Alberto", email: "alberto@gmail.com", password: "67d0cd2ecdd8c3addba64564" },
        { _id: "67d0cd2ecdd8c5addba64565", username: "Leo", email: "leo@gmail.com", password: "67d0cd2ecdd8c3addba64565" },
        { _id: "67d0cd2ecdd8c5addba64566", username: "Miguel", email: "miguel@gmail.com", password: "67d0cd2ecdd8c3addba64576" },
        { _id: "67d0cd2ecdd8c5addba64567", username: "Fabian", email: "fabiansm@gmail.com", password: "67d0cd2ecdd8c3addba64577" },
    ];
    */

    const users: any[] = [
        { _id: "67d0cd2ecdd8c5addba64561", username: "caballo", email: "caballo@gmail.com", password: "password" },
        { _id: "67d0cd2ecdd8c5addba64562", username: "Jam", email: "jam@gmail.com", password: "password" },
        { _id: "67d0cd2ecdd8c5addba64563", username: "Gera", email: "gera@gmail.com", password: "67d0cd2ecdd8c3addba64562" },
        { _id: "67d0cd2ecdd8c5addba64564", username: "Carlos", email: "carlos@gmail.com", password: "67d0cd2ecdd8c3addba64563" },
        { _id: "67d0cd2ecdd8c5addba64565", username: "Alberto", email: "alberto@gmail.com", password: "password" },
        { _id: "67d0cd2ecdd8c5addba64566", username: "Leo", email: "leo@gmail.com", password: "67d0cd2ecdd8c3addba64565" },
        { _id: "67d0cd2ecdd8c5addba64567", username: "Miguel", email: "miguel@gmail.com", password: "67d0cd2ecdd8c3addba64576" },
        { _id: "67d0cd2ecdd8c5addba64568", username: "Fabian", email: "fabiansm@gmail.com", password: "67d0cd2ecdd8c3addba64577" },
    ];

    await User.insertMany(users);

    //seed the feeling_catalog

    
    const feelings_catalogs: any[] = [
        { _id: "67d0cd2ecdd8c1addba64561", feeling_name: "Happy", feeling: "1", comment: "Hola" },
        { _id: "67d0cd2ecdd8c1addba64562", feeling_name: "Angry", feeling: "2", comment: "Hola" },
        { _id: "67d0cd2ecdd8c1addba64563", feeling_name: "Anxious", feeling: "3", comment: "Hola" },
        { _id: "67d0cd2ecdd8c1addba64564", feeling_name: "Sad", feeling: "4", comment: "Hola" },
        { _id: "67d0cd2ecdd8c1addba64565", feeling_name: "Fear", feeling: "5", comment: "Hola" },
    ];

    await Feelings_Catalog.insertMany(feelings_catalogs);  
    
    console.timeEnd('seeding complete 🌱');
    process.exit(0);
});