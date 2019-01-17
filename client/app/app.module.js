import angular from "angular"
import uiRouter from "angular-ui-router"

import appRoutes from "./app-routes.config"
import ngEnter from "./utils/ng-enter.directive"
import userAPI from "./components/users/user-api.service"
import userState from "./components/users/user-state.factory"

// layouts
import SearchController from "./layout/search.controller"
import SelectedController from "./layout/selected.controller"

// components
import UserListController from "./components/users/user-list.controller"
import UserDetailController from "./components/users/user-detail.controller"

angular
  .module("app", ["ui.router", uiRouter])
  .config(appRoutes)
  .factory("userState", userState)
  .service("userAPI", userAPI)
  .directive("ngEnter", ngEnter)
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
      checked: "<",
      checkable: "<?"
    },
    controller: UserDetailController,
    controllerAs: "vm"
  })

export default angular
