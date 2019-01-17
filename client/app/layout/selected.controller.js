SelectedController.$inject = ["$state", "users"]

export default function SelectedController($state, users) {
  const vm = this
  vm.users = users

  //functions
  vm.clearSelected = function() {
    vm.search = ""
    vm.users = users.map(user => {
      user.checked = false
      return user
    })
    $state.go("search")
  }
}
