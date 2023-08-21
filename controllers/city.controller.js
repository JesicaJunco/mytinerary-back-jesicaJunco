import City from '../models/Cities.js'

const controller = {
    getCities: async (req, res) => {

        let queries = {}
        if (req.query.city) {
            queries.city = new RegExp(`^${req.query.city}`, 'i')
        }

        if(req.query.country) {
            queries.country = req.query.country
        }

        try {
            const cities = await City.find(queries)

            if (cities.length > 0) {
                return res.status(200).json({
                    success: true,
                    cities: cities
                }) 
            }
            return res.status(404).json({
                success: false,
                message: 'No se encontraron ciudades'
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error al obtener las ciudades'
            })
        }
    },
    getEventById: async (req, res) => {
        try {
            // console.log(req.params)
            const oneCity = await City.findById(req.params.id)

            if(oneCity) {
                return res.status(200).json({
                    success: true,
                    city: oneCity
                })
            }

            return res.status(404).json({
                success: false,
                message: 'No se pudo encontrar la ciudad'
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error al obtener la ciudad'
            })
        }
    },
    createCities: async (req, res) => {
        try {
            const newCity = await City.create(req.body);

            return res.status(201).json({
                success: true,
                message: 'City created'
            })
        }
        catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error al crear la ciudad'
            })
        }

    }
}

export default controller;