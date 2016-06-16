(function () {

    var movies = [];
    var numOfMovies = 5;

    var app = angular.module('topBox', []);


    app.controller('MovieController', function ($scope, $http) {

        // Used for ng-repeat on rating value
        $scope.getTimes=function(n){
            return new Array(n);
        };

        // The Movie DB API - Most Popular
        var url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=08b5d2ec7ac05e1a512f2152954d31f2';

        $http.get(url).success( function(response) {
            $scope.movies = response;
            console.log(response['results'][0]);
            for (i = 0; i < numOfMovies; i++) {
                var baseURL = 'http://image.tmdb.org/t/p/w500/';
                var linkBaseURL = 'https://www.themoviedb.org/movie/';
                movies.push({title: response['results'][i].original_title,
                            description: response['results'][i].overview,
                            imageURL: baseURL + response['results'][i].poster_path,
                            rating: Math.ceil(parseInt(response['results'][i].vote_average) / 2),
                            link: linkBaseURL + response['results'][i].id});
            }
        });
        this.movies = movies;
    });
})();
