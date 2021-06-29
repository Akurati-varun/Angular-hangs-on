// JavaScript source code
var app = angular.module('Book Managment', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: "Home.html",
            controller: "HomeController"
        })

        .when('/Book', {
            templateUrl: "Book.html",
            controller: "BookController"
        })

        .when('/Author', {
            templateUrl: "Author.html",
            controller: "AuthorController"
        })

        .when('/PopularBooks', {
            templateUrl: "PopularBooks.html",
            controller: "PopularController"
        })

        .when('/Contact', {
            templateUrl: "Contact.html",
            controller: "ContactController"
        })

        .otherwise({ redirectTo: "/" })
});

app.controller("HomeController", function ($scope) {
    $scope.message = "Hello Welcome to the Varun Online Book";
    $scope.caption = "A perfect place for the book lovers.";
});
app.controller("BookController", function ($scope) {
    $scope.message = "Welcome to the Book Shelf";
    $scope.caption = "Find Wide variety of book collection in one place";
});
app.controller("AuthorController", function ($scope) {
    $scope.message = "Welcome to the Author section";
    $scope.caption = "Find your faviroute writer here";
});
app.controller("PopularController", function ($scope) {
    $scope.message = "Welcome to the Popular book section";
    $scope.caption = "We got you one of the finest books out there";
});
app.controller("ContactController", function ($scope) {
    $scope.message = "Contact Information";
    $scope.caption = "Contact us through";
});