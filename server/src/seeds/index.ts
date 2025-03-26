import mongoose from 'mongoose';
import connection from '../config/connection';
import { User, Feelings_Catalog } from '../models/index.js';

// Start the seeding runtime timer
console.time('seeding');

connection.on('error', (err) => err);
// Creates a connection to mongodb

// Define possible feeling names and example comments
const feelingNames = ["Happy", "Angry", "Anxious", "Sad", "Fear"];
const feelingComments: Record<typeof feelingNames[number], string[]> = {
    Happy: ["I feel great today!", "Such a beautiful day!", "Everything is going well.", "Feeling amazing!", "Smiling all day!"],
    Angry: ["I'm so frustrated!", "This is so annoying!", "I can't believe this happened!", "Feeling mad today.", "Ugh, this sucks."],
    Anxious: ["I'm feeling really nervous.", "My heart is racing.", "I can't stop overthinking.", "Feeling uneasy today.", "I'm really stressed out."],
    Sad: ["I feel down today.", "Feeling really lonely.", "Everything feels heavy.", "I'm not okay today.", "Just feeling blue."],
    Fear: ["I'm really scared.", "Feeling a bit paranoid.", "I don't feel safe.", "Something feels off.", "This situation is terrifying."],
};

// Generate a random date between February 4th, 2025, and March 24th, 2025
const getRandomDate = () => {
    const start = new Date("2025-02-04").getTime();
    const end = new Date("2025-03-24").getTime();
    return new Date(start + Math.random() * (end - start));
};

const feelings_catalogs = Array.from({ length: 50 }, () => {
    const randomFeeling = feelingNames[Math.floor(Math.random() * feelingNames.length)];
    return {
        feeling_name: randomFeeling,
        feeling: Math.floor(Math.random() * 5) + 1, // Random number between 1 and 5
        comment: feelingComments[randomFeeling][Math.floor(Math.random() * feelingComments[randomFeeling].length)], // Random comment for the feeling
        user: new mongoose.Types.ObjectId("67d0cd2ecdd8c5addba64561"),
        createdAt: getRandomDate(),
    };
});



connection.once('open', async () => {

    // Delete the User DB if it exists
    //let userCheck = await connection.db?.listCollections({ name: 'users' }).toArray();
    //if (userCheck?.length) {
    //    await connection.dropCollection('users');
    //}

    // Delete the Password DB if it exists
    //let passswordCheck = await connection.db?.listCollections({ name: 'feelings_catalogs' }).toArray();
    //if (passswordCheck?.length) {
    //    await connection.dropCollection('feelings_catalogs');
    //}

    // Delete the feelings_users DB if it exists
    //if (passswordCheck?.length) {
    //    await connection.dropCollection('feelings_users');
    //}

    // Delete the feelings_catalogs DB if it exists
    //if (passswordCheck?.length) {
    //    await connection.dropCollection('feelings_catalogs');
    //}

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

/*     const users: any[] = [
        {
            _id: "67d0cd2ecdd8c5addba64561", username: "caballo", email: "caballo@gmail.com", password: "$2b$10$Yl6JyzJTq3Bap3J986Vpe.kYP/oudfueEYNOwY7KvhxA5OHD6RBIC", feelings: [
                new mongoose.Types.ObjectId("67d0cd2ecdd8c1addba64561"), // Manually set Feeling ID
                new mongoose.Types.ObjectId("67d0cd2ecdd8c1addba64562"), // Another Feeling ID
                new mongoose.Types.ObjectId("67d0cd2ecdd8c1addba64566"), // Another Feeling ID
                new mongoose.Types.ObjectId("67d0cd2ecdd8c1addba64567"), // Another Feeling ID
            ],
         },
        { _id: "67d0cd2ecdd8c5addba64562", username: "Jam", email: "jam@gmail.com", password: "password" },
        { _id: "67d0cd2ecdd8c5addba64563", username: "Gera", email: "gera@gmail.com", password: "67d0cd2ecdd8c3addba64562" },
        { _id: "67d0cd2ecdd8c5addba64564", username: "Carlos", email: "carlos@gmail.com", password: "67d0cd2ecdd8c3addba64563" },
        { _id: "67d0cd2ecdd8c5addba64565", username: "Alberto", email: "alberto@gmail.com", password: "password" },
        { _id: "67d0cd2ecdd8c5addba64566", username: "Leo", email: "leo@gmail.com", password: "67d0cd2ecdd8c3addba64565" },
        { _id: "67d0cd2ecdd8c5addba64567", username: "Miguel", email: "miguel@gmail.com", password: "67d0cd2ecdd8c3addba64576" },
        { _id: "67d0cd2ecdd8c5addba64568", username: "Fabian", email: "fabiansm@gmail.com", password: "67d0cd2ecdd8c3addba64577" },
    ];

    await User.insertMany(users); */

    //seed the feeling_catalog

    /* 
    const feelings_catalogs: any[] = [
        { _id: "67d0cd2ecdd8c1addba64561", feeling_name: "Happy", feeling: "1", comment: "Hola", user: new mongoose.Types.ObjectId("67d0cd2ecdd8c5addba64561") },
        { _id: "67d0cd2ecdd8c1addba64562", feeling_name: "Angry", feeling: "2", comment: "Hola", user: new mongoose.Types.ObjectId("67d0cd2ecdd8c5addba64561") },
        { _id: "67d0cd2ecdd8c1addba64563", feeling_name: "Anxious", feeling: "3", comment: "Hola", user: new mongoose.Types.ObjectId("67d0cd2ecdd8c5addba64562") },
        { _id: "67d0cd2ecdd8c1addba64564", feeling_name: "Sad", feeling: "4", comment: "Hola", user: new mongoose.Types.ObjectId("67d0cd2ecdd8c5addba64563") },
        { _id: "67d0cd2ecdd8c1addba64565", feeling_name: "Fear", feeling: "5", comment: "Hola", user: new mongoose.Types.ObjectId("67d0cd2ecdd8c5addba64564") },
        { _id: "67d0cd2ecdd8c1addba64566", feeling_name: "Happy", feeling: "1", comment: "Adios", user: new mongoose.Types.ObjectId("67d0cd2ecdd8c5addba64561") },
        { _id: "67d0cd2ecdd8c1addba64567", feeling_name: "Happy", feeling: "1", comment: "ESto es un comentario", user: new mongoose.Types.ObjectId("67d0cd2ecdd8c5addba64561") },
    ]; */

/*     const feelings_catalogs: any[] = [
        { feeling_name: "Happy", feeling: "1", comment: "Hola", user: new mongoose.Types.ObjectId("67d0cd2ecdd8c5addba64561") },
        {  feeling_name: "Angry", feeling: "2", comment: "Hola", user: new mongoose.Types.ObjectId("67d0cd2ecdd8c5addba64561") },
        {  feeling_name: "Anxious", feeling: "3", comment: "Hola", user: new mongoose.Types.ObjectId("67d0cd2ecdd8c5addba64562") },
        {  feeling_name: "Sad", feeling: "4", comment: "Hola", user: new mongoose.Types.ObjectId("67d0cd2ecdd8c5addba64563") },
        {  feeling_name: "Fear", feeling: "5", comment: "Hola", user: new mongoose.Types.ObjectId("67d0cd2ecdd8c5addba64564") },
        {  feeling_name: "Happy", feeling: "1", comment: "Adios", user: new mongoose.Types.ObjectId("67d0cd2ecdd8c5addba64561") },
        {  feeling_name: "Happy", feeling: "1", comment: "ESto es un comentario", user: new mongoose.Types.ObjectId("67d0cd2ecdd8c5addba64561") },
    ]; 
    
    await Feelings_Catalog.insertMany(feelings_catalogs);  */ 
    await Feelings_Catalog.insertMany(feelings_catalogs);
    console.log("✅ Seeded 50 feelings_catalogs successfully!");
    //await User.updateOne({ _id: ObjectId("67d0cd2ecdd8c5addba64561") }, )
    
    console.timeEnd('seeding complete 🌱');
    process.exit(0);
});