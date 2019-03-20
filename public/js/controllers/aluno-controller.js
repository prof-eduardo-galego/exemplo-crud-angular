angular.module('exemplo-crud-angular').controller('AlunoController', function($scope, $http, $routeParams) {

	$scope.aluno = {};
	$scope.mensagem = '';

	if($routeParams.alunoId) {
		$http.get('/v1/alunos/' + $routeParams.alunoId)
		.success(function(aluno) {
			$scope.aluno = aluno;
		})
		.error(function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível obter o aluno'
		});
	}

	$scope.submeter = function() {

		if ($scope.formulario.$valid) {

			if($routeParams.alunoId) {

				$http.put('/v1/alunos/' + $scope.aluno._id, $scope.aluno)
				.success(function() {
					$scope.mensagem = 'Aluno alterado com sucesso';
				})
				.error(function(erro) {
					console.log(erro);
					$scope.mensagem = 'Não foi possível alterar';
				});

			} else { 

				$http.post('/v1/alunos', $scope.aluno)
				.success(function() {
					$scope.aluno = {};
					$scope.mensagem = 'Aluno cadastrado com sucesso';
				})
				.error(function(erro) {
					console.log(erro);
					$scope.mensagem = 'Não foi possível cadastrar o aluno';
				})
			}
		}
	};
});