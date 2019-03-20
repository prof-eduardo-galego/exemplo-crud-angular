var api = require('../api'),
    path = require('path');

module.exports  = function(app) {
    
    app.route('/v1/alunos')
        .post(api.add)
        .get(api.list);

    app.route('/v1/alunos/:alunoId')
        .delete(api.remove)
        .get(api.find)
        .put(api.update);

    // habilitando HTML5MODE
    app.all('/*', function(req, res) {
        res.sendFile(path.resolve('public/index.html'));
    });
};