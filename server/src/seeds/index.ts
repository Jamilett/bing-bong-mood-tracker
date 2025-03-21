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
    let passswordCheck = await connection.db?.listCollections({ name: 'passwords' }).toArray();
    if (passswordCheck?.length) {
        await connection.dropCollection('passwords');
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
        {  username: "tes", email: "test@gmail.com", password: "password" },
        {  username: "Jam", email: "jam@gmail.com", password: "password" },
        {  username: "Gera", email: "gera@gmail.com", password: "67d0cd2ecdd8c3addba64562" },
        {  username: "Carlos", email: "carlos@gmail.com", password: "67d0cd2ecdd8c3addba64563" },
        {  username: "Alberto", email: "alberto@gmail.com", password: "password" },
        {  username: "Leo", email: "leo@gmail.com", password: "67d0cd2ecdd8c3addba64565" },
        {  username: "Miguel", email: "miguel@gmail.com", password: "67d0cd2ecdd8c3addba64576" },
        {  username: "Fabian", email: "fabiansm@gmail.com", password: "67d0cd2ecdd8c3addba64577" },
    ];

    await User.insertMany(users);

    //seed the feeling_catalog

    /*
    const feeling_catalogs: any[] = [
        { _id: "67d0cd2ecdd8c1addba64561", feeling_name: "anger", feeling: "1" },
        { _id: "67d0cd2ecdd8c1addba64562", feeling_name: "happy", feeling: "2" },
        { _id: "67d0cd2ecdd8c1addba64563", feeling_name: "sad", feeling: "3" },
        { _id: "67d0cd2ecdd8c1addba64564", feeling_name: "fear", feeling: "4" },
        { _id: "67d0cd2ecdd8c1addba64565", feeling_name: "disgust", feeling: "5" },
        { _id: "67d0cd2ecdd8c1addba64566", feeling_name: "anxiety", feeling: "6" },
        { _id: "67d0cd2ecdd8c1addba64567", feeling_name: "grief", feeling: "7" },
    ];

    await Feelings_Catalog.insertMany(feeling_catalogs);  
    */
    console.timeEnd('seeding complete 🌱');
    process.exit(0);
});