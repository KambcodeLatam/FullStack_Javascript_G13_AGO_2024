import mongoose from'mongoose';


export class DataBaseNoSQL {

    constructor(){
        this._connect();
    }

    async _connect() {
        const mongoUri = 'mongodb://127.0.0.1:27017/demo';
        try {
            await mongoose.connect(mongoUri);
            console.log('connected');
        } catch (error) {
            console.error('DB_CONNECTION', error)
        }
        
    }
};
