const { Doacao: DoacaoModel } = require("../models/doacao")

const doacaoController = {

    create: async(req, res) => {
        try{

            const doacao = {

                date: req.body.date,
                type: req.body.type,
                description: req.body.description,
                validity: req.body.validity,
                status: req.body.status,
                donor: req.body.donor

            }

            const response = await DoacaoModel.create(doacao)

            res.status(201).json({response, msg: "Doação Incluida com Sucesso!"})

        }catch(error){
            console.log(error)
        }
    },

    getAll: async(req,res) => {
        try{

            const doacoes = await DoacaoModel.find()

            res.json(doacoes)

        }catch(error){
            console.log(error)
        }
    },

    getByDonor: async(req,res) =>{

        try{

            const honorId = req.params.honor


            const doacoes = await DoacaoModel.find({donor: honorId})

            res.status(200).json({doacoes})
        }

    catch(error){
        console.log(error)
    }

}}

module.exports = doacaoController