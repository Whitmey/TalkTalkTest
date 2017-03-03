angular.module('TalkTalkApp')
  .controller('MainController', MainController);

function MainController() {
  this.user = { name: 'TalkTalk' };
  return this;
}
