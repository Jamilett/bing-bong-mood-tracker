import { Schema, model, Document, ObjectId } from 'mongoose';

interface IPassword extends Document {
    username: ObjectId;
    password: string;
}

// Schema to create User model
const passwordSchema = new Schema<IPassword>(
    {
        password: {
            type: String,
            required: true,
        },
        username:{
                type: Schema.Types.ObjectId,
                ref: 'username',
            },
    },
);

// Initialize our User model
const Password = model('password', passwordSchema);

export default Password;
