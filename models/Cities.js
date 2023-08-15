import { Schema, model, Types, Schema } from "mongoose";

const colecction = 'cities'
const schema = new Schema({
    name: { type: String, require: true },
    category: { type: String, require: true },
    date: { type: date, require: true },
    description: { type: String, require: true },
    image: { type: String, require: true },
    place: { type: String, require: true },
    price: { type: Number, require: true },
    capacity: { type: Number, require: true },
    assistance: { type: Number },
},{
    timestamps: true
})

const Cities = model(colecction, schema);

export default Cities;