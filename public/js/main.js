angular.module('exemplo-crud-angular', ['ngRoute'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/alunos', {
			templateUrl: 'partials/principal.html',
			controller: 'AlunosController'
		});

		$routeProvider.when('/alunos/new', {
			templateUrl: 'partials/aluno.html',
			controller: 'AlunoController'
		});

		$routeProvider.when('/alunos/edit/:alunoId', {
			templateUrl: 'partials/aluno.html',
			controller: 'AlunoController'
		});

		$routeProvider.otherwise({redirectTo: '/alunos'});

	});