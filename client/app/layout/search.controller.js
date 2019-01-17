SearchController.$inject = ["$state", "users"]

export default function SearchController($state, users) {
  const vm = this
  vm.search = ""
  vm.users = users.filter(user => user.full_name.includes(vm.search))

  // functions
  vm.go = function(path) {
    const selectedUsers = vm.users.filter(user => user.checked)
    if (selectedUsers.length > 0) {
      $state.go(path.replace("/", ""))
    }
  }

  vm.clearSelected = function() {
    vm.search = ""
    vm.users = users.map(user => {
      user.checked = false
      return user
    })
  }

  vm.searchUsers = function() {
    vm.users = users.filter(user => {
      // optional have users checked show in search
      // return user.full_name.toLowerCase().includes(vm.search) || user.checked
      return user.full_name.toLowerCase().includes(vm.search)
    })
  }
}
