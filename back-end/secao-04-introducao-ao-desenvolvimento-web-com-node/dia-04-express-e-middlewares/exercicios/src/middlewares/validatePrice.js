const validatePrice = (req, res, next) => {
    const {price} = req.body;
    if (price && typeof price === 'number' && price > 0) {
        next()
    } else {
        return res.status(400).json({message: 'O campo price é obrigatório, deve ser número maior que zero'});
    }
}

module.exports = validatePrice;