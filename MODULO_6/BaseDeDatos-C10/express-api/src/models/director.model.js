import mongoose from "mongoose";


const directorSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },

});

export const Director = mongoose.model('Director', directorSchema);