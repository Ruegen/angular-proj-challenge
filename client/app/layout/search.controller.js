SearchController.$inject = ["$state", "users", "userState"]

export default function SearchController($state, users, userState) {
  const vm = this
  vm.search = ""
  vm.users = users.filter(user => user.full_name.includes(vm.search))

  // functions
  vm.go = function(path) {
    if (userState.getSelection().length > 0) {
      $state.go(path.replace("/", ""))
    }
  }

  vm.clearSelected = function() {
    vm.search = ""
    userState.clearSelection()
    vm.users = users
  }

  vm.searchUsers = function() {
    vm.users = users.filter(user => {
      // optional have users checked show in search
      // return user.full_name.toLowerCase().includes(vm.search) || user.checked
      return user.full_name.toLowerCase().includes(vm.search)
    })
  }
}
