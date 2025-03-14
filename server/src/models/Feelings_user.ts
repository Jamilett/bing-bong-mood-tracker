import { Schema, model, Document, ObjectId } from 'mongoose';

interface IFeelings_user extends Document {
    username: ObjectId;
    createdAt: Date;
    feelings: ObjectId[];
    comment: string;
}

// Schema to create User model
const feelingsUserSchema = new Schema<IFeelings_user>(
    {
        username: {
            type: Schema.Types.ObjectId,
            ref: "user",
            unique: true,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        feelings: [
            {
                type: Schema.Types.ObjectId,
                ref: 'feelings_catalog',
            },
        ],
        comment: {
            type: String,
            maxlength: 280,
        },
    },
);

// Initialize our User model
const Feelings_User = model('feelings_user', feelingsUserSchema);

export default Feelings_User;
