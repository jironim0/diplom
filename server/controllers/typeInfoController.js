const {TypeInfo} = require('../models/models.js')
const ApiError = require('../error/ApiError.js')
const { where } = require('sequelize')

class TypeInfoController {
    async create(req, res, next){
        try {
            let {name, level, data, description, place, main, pplcount, typeId} = req.body
            const typeInfo = await TypeInfo.create({name, level, data, description, place, main, pplcount, typeId})
            return res.json(typeInfo)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res){
        let {typeId} = req.query
        let info;
        if(!typeId){
            info = await TypeInfo.findAll()
        }
        if(typeId){
            info = await TypeInfo.findAndCountAll({where: {typeId}})
        }
        return res.json(info)
    }

    async getOne(req, res) {
        const {id} = req.params
        const device = await TypeInfo.findOne(
            {
                where: {id},
                include: [{model: TypeInfo, as: 'info'}]                
            }
        )
        return res.json(device)
    }


    async update(req, res){
        const {id} = req.query
        console.log('dssdfdsfsdfdsfdsdfssfdfsdfsd', req.body)
        const updateTypeInfo = await TypeInfo.update(req.body, {
            where: {id: id}
        });
        if(!updateTypeInfo){
            res.status(404).send({
                status: 'not found',
                message: `id ${id}`
            })
        }
        const getTypeInfo = await TypeInfo.findAll({
            where: {
                id: id
            }
        })
        return res.status(200).send({info: getTypeInfo})
    }
}

module.exports = new TypeInfoController()