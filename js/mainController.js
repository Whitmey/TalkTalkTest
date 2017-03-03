angular.module('TalkTalkApp')
  .controller('MainController', MainController);

  MainController.$inject = ['$http'];

function MainController($http) {

  this.all = [
    {
        "name": "leanne graham",
        "email": "leanne@gmail.com",
        "job": "web developer",
        "location": "london",
        "tag": "friends",
        "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
    },
    {
        "name": "ervin howell",
        "email": "ervin@gmail.com",
        "job": "tech lead",
        "location": "london",
        "tag": "friends",
        "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
    },{
        "name": "clementine bauch",
        "email": "clementine@gmail.com",
        "job": "web developer",
        "location": "liverpool",
        "tag": "following",
        "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
    },{
        "name": "chelsey dietrich",
        "email": "chelsey@gmail.com",
        "job": "baker",
        "location": "london",
        "tag": "family",
        "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
    },{
        "name": "dennis schulist",
        "email": "dennis@gmail.com",
        "job": "pen tester",
        "location": "manchester",
        "tag": "acquaintance",
        "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
    }
];

  console.log(this.all);

  // this.all = [];
  //
  // function getUsers() {               // Get request to API for list of users
  //   $http.get('http://www.mocky.io/v2/58b92a980f00008609f09be1')
  //   .then(function(response) {
  //     this.all = response.data;
  //     console.log(this.all);
  //   });
  // }
  // getUsers();           // Object already displayed to page by the time the response had come back.

};
