angular.module('TalkTalkApp')
  .controller('MainController', MainController);

  MainController.$inject = ['$http'];

function MainController($http) {

  this.all = [];

  function getUsers() {               // Get request to API for list of users
    $http.get('http://www.mocky.io/v2/58b92a980f00008609f09be1')
    .then(function(response) {
      this.all = response.data;
      console.log(this.all);
    });
  }
  getUsers();

};
