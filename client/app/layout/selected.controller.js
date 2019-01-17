export default function SelectedController(users, $state) {
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
