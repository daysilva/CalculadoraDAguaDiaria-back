import { Person } from "../models/person.js";

export async function registerPerson(req, res) {
    try {
        const {name, quantAgua} = req.body
        if (!name || !quantAgua) {
            return res.status(400).json("o corpo da requisicao nao pode conter valores nulos!")
        }
        await Person.create({ 
            name,
            quantAgua 
        });
        return res.status(200).json('cadastrado')

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Errro no servidor'
        })
    }
}

export async function getPerson(req, res) {
    try {
        const data = await Person.findAll()
        return res.status(200).json({data})

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Errro no servidor'
        })
    }
}