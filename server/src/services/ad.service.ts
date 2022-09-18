import adModel from "../model/ad.model"

const findOneBy = async (id: string) => {
    const founded = await adModel.findOneBy(id)
    return founded;
}

export default {
    findOneBy
}