console.log(`%c ________________________________________
<     I find this amoosing.    >
 ----------------------------------------
 \\
  \\   \\_\\_    _/_/
   \\      \\__/
          (oo)\_______
          (__)\       )\\/\\
              ||----w |
              ||     ||`, "font-family: monospace; color: rgb(32, 121, 199);");


(function(){
  angular
    .module('LucyApp', [
    "ui.router",
    "duScroll"
  ])

  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home',{
        url: '/',
        views: {
          'about': {
            templateUrl: '/templates/partials/about.html'
          },
          'projects': {
            templateUrl: '/templates/partials/projects.html'
          },
          'skills': {
            templateUrl: '/templates/partials/skills.html'
          },
          'experience': {
            templateUrl: '/templates/partials/experience.html'
          },
          'edu': {
            templateUrl: '/templates/partials/edu.html',
            controller: 'MainController'
          },
          'interests': {
            templateUrl: '/templates/partials/interests.html'
          },
          'contact': {
            templateUrl: '/templates/partials/contact.html'
          }
        }
      })
  });
})();
