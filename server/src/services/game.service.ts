import adModel from "../model/ad.model";
import gameModel from "../model/game.model"
import { Ad } from "../model/interfaces";
import { convertMinutesToHourString } from "../utils";

const findMany = async () => {
    const gamesList = await gameModel.findMany()

    return gamesList;
}

const findManyBy = async (id: string) => {
    const adsList = await adModel.findManyBy(id)

    return adsList.map((ad) => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(','),
            hourStart: convertMinutesToHourString(ad.hourStart),
            hourEnd: convertMinutesToHourString(ad.hourEnd),
        }
    });
}

const create = async (ad: Ad) => {
    const created = await adModel.create(ad); 
    return created;
}

export default {
    findMany,
    findManyBy,
    create
}