SelectedController.$inject = ["$state", "users", "userState"]

export default function SelectedController($state, users, userState) {
  const vm = this
  vm.users = users

  //functions
  vm.clearSelected = function() {
    vm.search = ""
    userState.clearSelection()
    $state.go("search")
  }
}
