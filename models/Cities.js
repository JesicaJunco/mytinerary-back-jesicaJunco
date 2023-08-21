import { Schema, model, Types } from "mongoose";

const collection = 'cities';

const schema = new Schema({
    country: { type: String, require: true },
    city: { type: String, require: true },
    detail: { type: String, require: true },
    image: { type: String, require: true },
    price: { type: Number, require: true },
    user:{type: Types.ObjectId, ref: 'users'}
},{
    timestamps: true
})

const Cities = model(collection, schema)

export default Cities;