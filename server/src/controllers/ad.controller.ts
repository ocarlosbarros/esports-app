import { Request, Response, NextFunction } from "express";
import { AdService } from "../services";

const findOneBy = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { id } = request.params;
        const founded = await AdService.findOneBy(id)
        return response.status(200).json(founded);
    } catch (error) {
        next(error)
    }
    return response.status(200).json({ message: 'One Discord'});
}

export default {
    findOneBy,
};