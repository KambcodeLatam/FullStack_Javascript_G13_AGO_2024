import mongoose, { Schema } from "mongoose";


const movieSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    releaseYear: {
        type: Number,
        required: true,
    },
    directorId: {
        type: Schema.Types.ObjectId,
        ref: 'Director'
    }

});

export const Movie = mongoose.model('Movie', movieSchema);