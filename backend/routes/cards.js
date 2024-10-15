const cards = require('express').Router();
const { getCards, createCard, deleteCard, likeCard, dislikeCard } = require('../controllers/cards')
const { celebrate, Joi } = require('celebrate')
const auth = require('../middleware/auth')

cards.use(auth);
//GET para obtener las tarjetas
cards.get('/', getCards);

//POST para crear una nueva tarjeta
cards.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required()
  })
}) ,createCard);

//DELETE para eliminar una tarjeta
cards.delete('/:cardId', deleteCard)

// PUT para darle like a una tarjeta (cambia el orden de la ruta)
cards.put('/likes/:cardId', likeCard);

// DELETE para quitar el like a una tarjeta (cambia el orden de la ruta)
cards.delete('/likes/:cardId', dislikeCard);

module.exports = cards;