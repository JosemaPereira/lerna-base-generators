import { MainServices } from "../services";

export const MainController = {
    get: async(req, res, next) => {
        try {
            const message = await MainServices.get();
            res.status(200).json(message);
        } catch (err) {
            next(err);
        }
    },
};