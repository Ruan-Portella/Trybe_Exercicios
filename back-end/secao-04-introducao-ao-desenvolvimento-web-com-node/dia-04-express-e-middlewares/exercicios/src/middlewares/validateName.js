const validateName = (req, res, next) => {
    const {name} = req.body;
    if (name && name.length > 4) {
        next()
    } else {
        return res.status(400).json({message: 'O campo name é obrigatório e deve possuir 4 caracteres'});
    }
}

module.exports = validateName;