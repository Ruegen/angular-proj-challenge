import angular from "angular"
import uiRouter from "angular-ui-router"

import utilDirective from "./utils/util.directive"
import UserService from "./components/users/user.service"
import UserFactory from "./components/users/user.factory"

// layouts
import SearchController from "./layout/search.controller"
import SelectedController from "./layout/selected.controller"

// components
import UserListController from "./components/users/user-list.controller"
import UserDetailController from "./components/users/user-detail.controller"

angular
  .module("app", [uiRouter])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state("search", {
        url: "/",
        templateUrl: "search.html",
        controller: "SearchController",
        controllerAs: "vm",
        resolve: {
          users: function(UserState) {
            return UserState.all()
          }
        }
      })
      .state("selected", {
        url: "/selected",
        templateUrl: "selected.html",
        controller: "SelectedController",
        controllerAs: "vm",
        resolve: {
          users: function(UserState) {
            return UserState.allSelected()
          }
        }
      })

    $urlRouterProvider.otherwise("/")
    $locationProvider.html5Mode({ enabled: true, requireBase: false })
  })
  .factory("UserState", UserFactory)
  .service("UserService", UserService)
  .directive("ngEnter", utilDirective)
  .controller("SearchController", SearchController)
  .controller("SelectedController", SelectedController)
  .component("userList", {
    templateUrl: "users/user-list.html",
    controller: UserListController,
    controllerAs: "vm",
    bindings: {
      users: "<",
      checkable: "<?"
    }
  })
  .component("userDetail", {
    templateUrl: "users/user-detail.html",
    bindings: {
      user: "<",
      select: "=?",
      checkable: "<?"
    },
    controller: UserDetailController,
    controllerAs: "vm"
  })

export default angular
