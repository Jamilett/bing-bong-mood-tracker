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
        { _id: "67d0cd2ecdd8c1addba64561", feeling_name: "Sad", feeling: "4", comment: "Felt really unmotivated today. I stayed in bed for hours, just staring at the ceiling." },
        { _id: "67d0cd2ecdd8c1addba64562", feeling_name: "Angry", feeling: "2", comment: "Someone took my parking spot at work today, and I was fuming!" },
        { _id: "67d0cd2ecdd8c1addba64563", feeling_name: "Fear", feeling: "5", comment: "Had a panic attack in the middle of the day. It’s been a rough time lately." },
        { _id: "67d0cd2ecdd8c1addba64564", feeling_name: "Anxious", feeling: "3", comment: "My boss scheduled a last-minute meeting, and I’m worried it’s bad news." },
        { _id: "67d0cd2ecdd8c1addba64565", feeling_name: "Sad", feeling: "4", comment: "Missed an old friend today. We haven’t talked in years, and I wonder if they ever think of me." },
        { _id: "67d0cd2ecdd8c1addba64566", feeling_name: "Anxious", feeling: "3", comment: "Couldn’t focus on anything today. My mind keeps racing with a million worries." },
        { _id: "67d0cd2ecdd8c1addba64567", feeling_name: "Angry", feeling: "2", comment: "Got stuck in traffic for almost two hours. Absolutely infuriating!" },
        { _id: "67d0cd2ecdd8c1addba64568", feeling_name: "Fear", feeling: "5", comment: "Had a weird feeling that someone was watching me today. It made me so uneasy." },
        { _id: "67d0cd2ecdd8c1addba64569", feeling_name: "Sad", feeling: "4", comment: "Watched an old movie that reminded me of my childhood. It made me really emotional." },
        { _id: "67d0cd2ecdd8c1addba64570", feeling_name: "Anxious", feeling: "3", comment: "Had a lot of work piled up, and I felt overwhelmed all day." },
        { _id: "67d0cd2ecdd8c1addba64571", feeling_name: "Anxious", feeling: "3", comment: "Started journaling today. I don’t know if it helps yet, but it’s nice to write things down." },
        { _id: "67d0cd2ecdd8c1addba64572", feeling_name: "Fear", feeling: "5", comment: "Tried to meditate today, but I kept feeling uneasy. Hope it gets better." },
        { _id: "67d0cd2ecdd8c1addba64573", feeling_name: "Anxious", feeling: "3", comment: "Work stress is getting to me. I need to find a way to relax." },
        { _id: "67d0cd2ecdd8c1addba64574", feeling_name: "Happy", feeling: "1", comment: "Had a really good cup of coffee today. It’s the small things that make life enjoyable." },
        { _id: "67d0cd2ecdd8c1addba64575", feeling_name: "Anxious", feeling: "3", comment: "Tried to push myself to be more social today. It was hard, but I managed." },
        { _id: "67d0cd2ecdd8c1addba64576", feeling_name: "Happy", feeling: "1", comment: "Went for a walk in the park. The fresh air felt really nice." },
        { _id: "67d0cd2ecdd8c1addba64577", feeling_name: "Fear", feeling: "5", comment: "Had to speak in a meeting today. My hands were shaking, but I did it." },
        { _id: "67d0cd2ecdd8c1addba64578", feeling_name: "Sad", feeling: "4", comment: "Felt lonely today, but I reminded myself that it’s just a passing feeling." },
        { _id: "67d0cd2ecdd8c1addba64579", feeling_name: "Angry", feeling: "2", comment: "A coworker was really rude today, and it ruined my mood." },
        { _id: "67d0cd2ecdd8c1addba64580", feeling_name: "Happy", feeling: "1", comment: "Had a really nice conversation with an old friend. It made my day." },
        { _id: "67d0cd2ecdd8c1addba64581", feeling_name: "Happy", feeling: "1", comment: "Started noticing the good things around me. There’s a lot to be thankful for." },
        { _id: "67d0cd2ecdd8c1addba64582", feeling_name: "Happy", feeling: "1", comment: "Tried cooking a new recipe, and it turned out great!" },
        { _id: "67d0cd2ecdd8c1addba64583", feeling_name: "Happy", feeling: "1", comment: "Feeling motivated to keep making positive changes in my life." },
        { _id: "67d0cd2ecdd8c1addba64584", feeling_name: "Happy", feeling: "1", comment: "I smiled a lot today. Things are starting to feel brighter." },
        { _id: "67d0cd2ecdd8c1addba64585", feeling_name: "Happy", feeling: "1", comment: "Appreciating the little things. Life isn’t perfect, but it’s beautiful in its own way." },
        { _id: "67d0cd2ecdd8c1addba64586", feeling_name: "Happy", feeling: "1", comment: "Laughed a lot today! I forgot how good it feels to be genuinely happy." },
        { _id: "67d0cd2ecdd8c1addba64587", feeling_name: "Happy", feeling: "1", comment: "Looking forward to the weekend! I have plans with friends, and I can't wait." },
        { _id: "67d0cd2ecdd8c1addba64588", feeling_name: "Happy", feeling: "1", comment: "Feeling really lucky to have supportive people in my life." },
        { _id: "67d0cd2ecdd8c1addba64589", feeling_name: "Happy", feeling: "1", comment: "I’m in a much better place now than I was a month ago. Proud of myself!" }
    ];

    await Feelings_Catalog.insertMany(feelings_catalogs);  
    
    console.timeEnd('seeding complete 🌱');
    process.exit(0);
});