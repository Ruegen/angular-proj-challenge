appRoutes.$inject = [
  "$stateProvider",
  "$urlRouterProvider",
  "$locationProvider"
]

function appRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state("search", {
      url: "/",
      templateUrl: "search.html",
      controller: "SearchController",
      controllerAs: "vm",
      resolve: {
        users: [
          "userState",
          function(userState) {
            return userState.all()
          }
        ]
      }
    })
    .state("selected", {
      url: "/selected",
      templateUrl: "selected.html",
      controller: "SelectedController",
      controllerAs: "vm",
      resolve: {
        users: [
          "userState",
          function(userState) {
            return userState.allSelected()
          }
        ]
      }
    })

  $urlRouterProvider.otherwise("/")
  $locationProvider.html5Mode({ enabled: true, requireBase: false })
}

export default appRoutes
