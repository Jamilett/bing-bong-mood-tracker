import { Schema, model, Document, Types } from 'mongoose'; // Assuming you're using Mongoose
import bcrypt from 'bcrypt';

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    feelings: Types.ObjectId[];
    isCorrectPassword(password: string): Promise<boolean>;
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
        password:{
                type: String,
                required: true,
            },
        feelings: [
            {
                type: Schema.Types.ObjectId,
                ref: 'feelings_user',
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

// Add the password checking method
userSchema.methods.isCorrectPassword = async function(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
};

// Initialize our User model
const User = model<IUser>('User', userSchema);

export default User;
