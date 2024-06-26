const express = require('express');
const router = express.Router();

const {
    getIndicatorTypes,
    getIndicatorTypeById,
    createIndicatorType,
    updateIndicatorType,
    deleteIndicatorType
} = require('../controllers/indicator.type.controller.js');

router.use(express.json());

router.get('/indicators/types', getIndicatorTypes);
router.get('/indicators/types/:tipo_id', getIndicatorTypeById);
router.post('/indicators/types/create', createIndicatorType);
router.put('/indicators/types/edit:tipo_id', updateIndicatorType);
router.delete('/indicators/types/delete/:tipo_id', deleteIndicatorType);

module.exports = router;