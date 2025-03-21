import connection from '../config/connection';
import { User, Password, Feelings_User, Feelings_Catalog } from '../models/index.js';

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
    let passswordCheck = await connection.db?.listCollections({ name: 'passwords' }).toArray();
    if (passswordCheck?.length) {
        await connection.dropCollection('passwords');
    }

    // Delete the feelings_users DB if it exists
    let Feelings_UserCheck = await connection.db?.listCollections({ name: 'feelings_users' }).toArray();
    if (passswordCheck?.length) {
        await connection.dropCollection('feelings_users');
    }

    // Delete the feelings_catalogs DB if it exists
    let Feelings_CatalogCheck = await connection.db?.listCollections({ name: 'feelings_catalogs' }).toArray();
    if (passswordCheck?.length) {
        await connection.dropCollection('feelings_catalogs');
    }

    //seed the users 
    const users: any[] = [
        { _id: "67d0cd2ecdd8c5addba64561", username: "Jam", email: "jam@gmail.com", password: "67d0cd2ecdd8c3addba64561" },
        { _id: "67d0cd2ecdd8c5addba64562", username: "Gera", email: "gera@gmail.com", password: "67d0cd2ecdd8c3addba64562" },
        { _id: "67d0cd2ecdd8c5addba64563", username: "Carlos", email: "carlos@gmail.com", password: "67d0cd2ecdd8c3addba64563" },
        { _id: "67d0cd2ecdd8c5addba64564", username: "Alberto", email: "alberto@gmail.com", password: "67d0cd2ecdd8c3addba64564" },
        { _id: "67d0cd2ecdd8c5addba64565", username: "Leo", email: "leo@gmail.com", password: "67d0cd2ecdd8c3addba64565" },
        { _id: "67d0cd2ecdd8c5addba64566", username: "Miguel", email: "miguel@gmail.com", password: "67d0cd2ecdd8c3addba64576" },
        { _id: "67d0cd2ecdd8c5addba64567", username: "Fabian", email: "fabiansm@gmail.com", password: "67d0cd2ecdd8c3addba64577" },
    ];

    await User.insertMany(users);

    //seed the paswords
    const passwords: any[] = [
        { _id: "67d0cd2ecdd8c3addba64561", password: "password", username: "67d0cd2ecdd8c5addba64561" },
        { _id: "67d0cd2ecdd8c3addba64562", password: "password", username: "67d0cd2ecdd8c5addba64562" },
        { _id: "67d0cd2ecdd8c3addba64563", password: "password", username: "67d0cd2ecdd8c5addba64563" },
        { _id: "67d0cd2ecdd8c3addba64564", password: "password", username: "67d0cd2ecdd8c5addba64564" },
        { _id: "67d0cd2ecdd8c3addba64565", password: "password", username: "67d0cd2ecdd8c5addba64565" },
        { _id: "67d0cd2ecdd8c3addba64566", password: "password", username: "67d0cd2ecdd8c5addba64566" },
        { _id: "67d0cd2ecdd8c3addba64567", password: "password", username: "67d0cd2ecdd8c5addba64567" },  
    ];

    await Password.insertMany(passwords);

    //seed the feeling_users
    const feeling_users: any[] = [
        { _id: "67d0cd2ecdd8c8addba64561", feelings: ["67d0cd2ecdd8c1addba64561"], username: "67d0cd2ecdd8c5addba64561", comment: "This is fun" },
        { _id: "67d0cd2ecdd8c8addba64562", feelings: ["67d0cd2ecdd8c1addba64562"], username: "67d0cd2ecdd8c5addba64562", comment: "This is sad" },
        { _id: "67d0cd2ecdd8c8addba64563", feelings: ["67d0cd2ecdd8c1addba64563"], username: "67d0cd2ecdd8c5addba64563", comment: "This is super" },
        { _id: "67d0cd2ecdd8c8addba64564", feelings: ["67d0cd2ecdd8c1addba64564"], username: "67d0cd2ecdd8c5addba64564", comment: "This is crying" },
        { _id: "67d0cd2ecdd8c8addba64565", feelings: ["67d0cd2ecdd8c1addba64565"], username: "67d0cd2ecdd8c5addba64565", comment: "This is nice" },
        { _id: "67d0cd2ecdd8c8addba64566", feelings: ["67d0cd2ecdd8c1addba64566"], username: "67d0cd2ecdd8c5addba64566", comment: "This is something" },
        { _id: "67d0cd2ecdd8c8addba64567", feelings: ["67d0cd2ecdd8c1addba64567"], username: "67d0cd2ecdd8c5addba64567", comment: "This is another something" },
    ];

    await Feelings_User.insertMany(feeling_users);  

    //seed the feeling_catalog
    const feeling_catalogs: any[] = [
        { _id: "67d0cd2ecdd8c1addba64561", feeling_name: "angry", feeling: "1" },
        { _id: "67d0cd2ecdd8c1addba64562", feeling_name: "happy", feeling: "2" },
        { _id: "67d0cd2ecdd8c1addba64563", feeling_name: "sad", feeling: "3" },
        { _id: "67d0cd2ecdd8c1addba64564", feeling_name: "fear", feeling: "4" },
        { _id: "67d0cd2ecdd8c1addba64565", feeling_name: "disgust", feeling: "5" }, //quitar
        { _id: "67d0cd2ecdd8c1addba64566", feeling_name: "anxiety", feeling: "6" },
        { _id: "67d0cd2ecdd8c1addba64567", feeling_name: "grief", feeling: "7" }, //quitar
    ];

    await Feelings_Catalog.insertMany(feeling_catalogs);  
    console.timeEnd('seeding complete 🌱');
    process.exit(0);
});