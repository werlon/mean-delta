const express = require('express');
const router = express.Router();
const LocalizacaoService = require('../services/localizacao.service');
const Localizacao = require('../model/localizacao.model');

router.post('/', (req, res, next) => {
    let localizacao = new Localizacao(req.body);

    LocalizacaoService
        .salvar(localizacao)
        .then((doc) => {
            res.status(201).json(doc);
        }, (err) => {
            res.status(500).json(err);
        });
});

router.get('/', (req, res, next) => {
    LocalizacaoService
        .consultar()
        .then((docs) => {
            res.status(200).json(docs);
        }, (err) => {
            res.status(500).json(err);
        });
});

router.put('/', (req, res, next) => {
    res.status(200).json({ nome: "Werlon" });
});

router.delete('/', (req, res, next) => {
    LocalizacaoService.excluir(req.param('id')).then(
        (doc) => {
            //excluido com sucesso
            res.status(200).json({situacao: "removido"})
        },
        (err) => {
            //erro ao excluir
            res.status(500).json(err)
        }
    );
});

module.exports = router;