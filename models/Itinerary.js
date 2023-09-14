import { Schema, model, Types } from "mongoose";

let collection = 'itineraries';

let schema = new Schema({
    city: {
        type: Schema.Types.ObjectId,
        ref: 'cities',
        required: true
    },
    name: { type: String, required: true },
    duration: { type: Number, required: true },
    price: { type: Number, required: true },
    likes: {
        type: Number, default: 0,
        required: true
    },
    hashtags: [{ type: String }],
    user: { type: Schema.Types.ObjectId, ref: 'users' },
    activities: [{ type: Schema.Types.ObjectId, ref: 'activities' }],
    comments: [{
        comment: { type: String },
        user: { type: Schema.Types.ObjectId, ref: 'users' }
    }],
}, {
    timestamps: true
})

const Itinerary = model(collection, schema);
export default Itinerary;