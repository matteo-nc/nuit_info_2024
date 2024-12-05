import {Express, Router} from "express";

export default {
    setup: (app:Express) => {
        let router = Router();

        router.get('', (req, res) => {
           res.json("Hello");
        });

        app.use('/hello', router);
    }
}