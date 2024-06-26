const { Indicador } = require("../model/models.js");
const { TipoIndicador } = require("../model/models.js")

const getIndicators = async (req, res) => {
    try {
        const indicators = await Indicador.findAll();
        if(!indicators || indicators.length === 0) {
            res.status(404).json({ error: 'Indicadores no encontrados' });
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(
                JSON.stringify({ found: indicators.length, indicators },
                null, 2
            ));
        }
    } catch (error) {
        res.status(400).json({ error: error });
        console.log(`Error al encontrar indicadores: ${error}`);
    }
};

const getIndicatorById = async (req, res) => {
    try {
        const indicator = await Indicador.findByPk(req.params.indicador_id);
        if(!indicator || indicator.length === 0) {
            res.status(404).json({ error: 'Indicador no encontrado' });
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(
                JSON.stringify({ found: 1, indicator },
                null, 2
            ));
        }
    } catch (error) {
        res.status(400).json({ error: error });
        console.log(`Error al encontrar indicador: ${error}`);
        }
};

const getIndicatorsByNumDoc = async (req, res) => {
    try {
        const indicators = await Indicador.findAll({
            where: { usuarios_num_doc: req.params.num_doc }
        });
        if (!indicators || indicators.length === 0) {
            res.status(404).json({ error: 'Indicadores no encontrados para el número de documento proporcionado' });
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(indicators);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(`Error al encontrar indicadores por número de documento: ${error}`);
    }
};

const createIndicator = async (req, res) => {
    try {
        const indicator = await Indicador.create(req.body);
        if(!indicator) {    
            res.status(404).json({ error: 'Indicador no creado' });
        } else {
            res.setHeader('Content-Type', 'application/json');  
            res.status(200).send(
                JSON.stringify({ created: { indicator } },
                null, 2
            ));
        }
    } catch (error) {
        res.status(400).json({ error: error });
        console.log(`Error al crear indicador: ${error}`);
    }
};

const updateIndicator = async (req, res) => {
    try {
        const indicator = await Indicador.update(req.body, {
            where: { id: req.params.indicador_id }
        });
        if(!indicator || indicator.length === 0) {
            res.status(404).json({ error: 'Indicador no actualizado' });
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(
                JSON.stringify({ updated: { indicator } },  
                null, 2
            ));
        }
    } catch (error) {
        res.status(400).json({ error: error });
        console.log(`Error al actualizar indicador: ${error}`);
    }
};

const deleteIndicator = async (req, res) => {
    try {
        const indicator = await Indicador.destroy({
            where: { id: req.params.indicador_id }
        });
        if(!indicator || indicator.length === 0) {
            res.status(404).json({ error: 'Indicador no borrado' });
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(
                JSON.stringify({ deleted: { indicator } },
                null, 2
            ));
        }
    } catch (error) {
        console.log(`Error al borrar indicador: ${error}`);
    }
};

module.exports = { 
    getIndicators, 
    getIndicatorById,
    getIndicatorsByNumDoc,
    createIndicator, 
    updateIndicator, 
    deleteIndicator 
}
