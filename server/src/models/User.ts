import { Schema, model, Document, ObjectId } from 'mongoose';
import bcrypt from 'bcrypt';

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    isCorrectPassword: (password: string) => Promise<boolean>;
    feelings: ObjectId[];
}

// Schema to create User model
const userSchema = new Schema<IUser>(
    {
        username: {
            type: String,
            unique: true,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            //TODO: check for valid mail
        },
        password: {
            type: String,
            required: true,
        },
/*        password:{
                type: Schema.Types.ObjectId,
                ref: 'password',
            },*/
        feelings: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Feelings_Catalog',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// set up pre-save middleware to create password
userSchema.pre<IUser>('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

  // compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
};


//** Create a virtual property `fullName` that gets and sets the user's full name
// userSchema
 //   .virtual('friendCount')
    // Getter
   // .get(function () {
    //    return `${this.friends.length}`;
   // })
// */

// Initialize our User model
const User = model<IUser>('user', userSchema);

export default User;


