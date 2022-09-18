import { PrismaClient } from '@prisma/client';
import { Ad } from './interfaces';
import { convertHourStringToMinutes } from '../utils'

const model  = new PrismaClient();

const findManyBy = async (id: string) => {
    const gamesList = await model.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd:true,
        },
        where: {
            gameId: id
        },
        orderBy:{
            createdAt: "desc"
        }
    })

    return gamesList;
}

const findOneBy = async (id: string) => {
    const founded = await model.ad.findUniqueOrThrow({
        select: {
            discord: true,
        },
        where: {
            id,
        }
    })

    return founded;
}

const create = async (ad: Ad) => {
    const created = await model.ad.create({
        data: {
            gameId: ad.id,
            name: ad.name,
            yearsPlaying: ad.yearsPlaying,
            discord: ad.discord,
            weekDays: ad.weekDays.join(","),
            hourStart: convertHourStringToMinutes(ad.hourStart),
            hourEnd: convertHourStringToMinutes(ad.hourEnd),
            useVoiceChannel: ad.useVoiceChannel,
        }
    });
    return created;
};

export default {
    findManyBy,
    findOneBy,
    create,
}