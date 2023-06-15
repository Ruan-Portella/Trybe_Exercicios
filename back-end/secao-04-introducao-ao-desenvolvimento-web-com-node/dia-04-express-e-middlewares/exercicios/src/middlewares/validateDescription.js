const validateDescription = (req, res, next) => {
    const {description} = req.body;
    if (description && description.createdAt && description.rating && description.difficulty) {
        next()
    } else {
        return res.status(400).json({message: 'O campo description, createdAt, rating e difficulty são obrigatórios'})
    }
}

module.exports = validateDescription;