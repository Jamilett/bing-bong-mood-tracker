import { Schema, model, Document, ObjectId } from 'mongoose';

interface IFeelings_catalog extends Document {
    feeling: string;
    feeling_name: string;
}

// Schema to create User model
const feelingsCatalogSchema = new Schema<IFeelings_catalog>(
    {
        feeling: {
            type: String,
            unique: true,
            required: true,
        },
        feeling_name: {
            type: String,
            unique: true,
            required: true,
        },
    }
);

// Initialize our User model
const Feelings_Catalog = model('feelings_catalog', feelingsCatalogSchema);

export default Feelings_Catalog;
