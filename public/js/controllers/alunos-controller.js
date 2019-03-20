angular.module('exemplo-crud-angular').controller('AlunosController', function($scope, $http) {
	
	$scope.alunos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	$http.get('/v1/alunos')
	.success(function(retorno) {
		console.log(retorno);
		$scope.alunos = retorno;
	})
	.error(function(erro) {
		console.log(erro);
	});

	$scope.remover = function(aluno) {

		$http.delete('/v1/alunos/' + aluno._id)
		.success(function() {
			var indice = $scope.alunos.indexOf(aluno);
			$scope.alunos.splice(indice, 1);
			$scope.mensagem = 'Aluno ' + aluno.nome + ' removido com sucesso!';
		})
		.error(function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível excluir dados do aluno ' + aluno.nome;
		});
	};

});