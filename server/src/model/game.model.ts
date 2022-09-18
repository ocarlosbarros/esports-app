import { PrismaClient } from '@prisma/client';
import { Ad } from './interfaces';

const model  = new PrismaClient();

const findMany = async () => {
    const gamesList = await model.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true
                }
            }
        }
    })

    return gamesList;
}

export default {
    findMany,

}