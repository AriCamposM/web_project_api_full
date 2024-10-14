const cards = require('express').Router();
const { getCards, createCard, deleteCard, likeCard, dislikeCard } = require('../controllers/cards')
const { celebrate, Joi } = require('celebrate')
//GET para obtener las tarjetas
cards.get('/cards', getCards);

//POST para crear una nueva tarjeta
cards.post('/cards', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().uri().required
  })
}) ,createCard);

//DELETE para eliminar una tarjeta
cards.delete('/cards/:cardId', deleteCard)

//PUT para darle like a una tarjeta
cards.put('/cards/:cardId/likes',likeCard);

//DELTE para quitar el like a una tarjeta
cards.delete('/cards/:cardId/likes',dislikeCard)

module.exports = cards;