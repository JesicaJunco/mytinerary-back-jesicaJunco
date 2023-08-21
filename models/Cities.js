import { Schema, model, Types } from "mongoose";

const colecction = 'cities'
const schema = new Schema({
    country: { type: String, require: true },
    city: { type: String, require: true },
    detail: { type: String, require: true },
    image: { type: String, require: true },
    price: { type: Number, require: true },
},{
    timestamps: true
})

const Cities = model(colecction, schema);

export default Cities;