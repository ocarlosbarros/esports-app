import { Request, Response, NextFunction } from "express";
import { GameService } from '../services';


const findMany = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const gamesList = await GameService.findMany();
        return response.status(200).json(gamesList);
    } catch (error) {
        next(error)
    }
}

const findManyBy = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { id } = request.params;
        const adsList = await GameService.findManyBy(id)
        return response.status(200).json(adsList);
    } catch (error) {
        next(error)
    }
}

const create = async (request: Request, response: Response, next: NextFunction) => {
    const { id } = request.params;
    const ad = request.body;
    const created = await GameService.create({ id, ...ad });
    return response.status(201).json(created);
}

export default {
    findMany,
    findManyBy,
    create,
};