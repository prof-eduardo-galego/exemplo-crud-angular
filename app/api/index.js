var db = require('../../config/database');

var api = {}

api.list = function(req, res) {
    db.find({}).sort({titulo: 1}).exec(function(err, dados) {
        if (err) 
			return console.log(err);
        res.json(dados);
    });
};

api.find = function(req, res) {
   db.findOne({_id: req.params.alunoId}, function(err, dados) {
        if (err) 
			return console.log(err);
        res.json(dados);
    });
};

api.add = function(req, res) {
    db.insert(req.body, function(err, dadosAluno) {
        if (err) 
			return console.log(err);
        
		console.log('Aluno adicionado com sucesso: ' + dadosAluno._id);
        res.json(dadosAluno._id);
    });
};

api.update = function(req, res) {
    db.update({_id : req.params.alunoId}, req.body, function(err, numReplaced) {
        if (err) 
			return console.log(err);
        
		if (numReplaced) 
			res.status(200).end();
		
		res.status(500).end();
        
		console.log('Aluno atualizado com sucesso: ' + req.body._id);      
		res.status(200).end();
    });  
};

api.remove = function(req, res) {
    db.remove({ _id: req.params.alunoId }, {}, function (err, numRemoved) {
        if (err) 
			return console.log(err);
        
		console.log('Aluno removido com sucesso');
        
		if (numRemoved) 
			res.status(200).end();
		
        res.status(500).end();
    });
};





module.exports = api;