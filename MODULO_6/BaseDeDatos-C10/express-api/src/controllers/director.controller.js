import { serverError } from "../helpers/http.js";
import { Director, Movie } from "../models/index.js";

export class DirectorController {

    getDirectors = async (req, res) => {
        try {
            const directors = await Director.find({})
            res.json(directors);
        } catch (e) {
            serverError(e.message, res);
        }
    }

    // getMoviesByDirector = async (req, res) => {
    //     try {
    //         const id = Number(req.params.id);
    //         const directors = await Director.findAll({
    //             where: { 
    //                 id: id,
    //              },
    //             include: {
    //                 model: Movie,
    //                 attributes: ['id','title']
    //             }
    //         });
    //         res.json(directors);
    //     } catch (e) {
    //         serverError(e.message, res);
    //     }
    // }

    // getMoviesByReleaseyear = async (req, res) => {
    //     try {
    //         const releaseYear = Number(req.params.releaseYear);
    //         const directors = await Director.findAll({
    //             attributes: ['id', 'name'],
    //             include: {
    //                 model: Movie,
    //                 attributes: ['title', 'releaseYear'],
    //                 where: {
    //                     releaseYear:  { [Op.gte]: releaseYear }
    //                 }
    //             }
    //         });
    //         res.json(directors);
    //     } catch (e) {
    //         serverError(e.message, res);
    //     }
    // }
   
    create = async (req, res) => {
        try {

            const {email, name} = req.body;
        
            const director = await Director.findOne({email});

            console.log(director)

            if (director) return res.status(400).json({msg: 'email already exists'});

            //const newDirector = await Director.create(req.body);
            
            const newDirector = new Director({
                email,
                name
            });

            await newDirector.save();
            
            res.status(201).json(newDirector);
        } catch (e) {
            serverError(e.message, res);
        }
    }


};

