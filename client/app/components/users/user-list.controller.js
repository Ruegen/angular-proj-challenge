export default function UserListController() {
  const vm = this

  vm.select = function(id) {
    if (!vm.checkable) {
      return
    }

    vm.users = vm.users.map(user => {
      if (user.id == id) {
        user.checked = !user.checked
      }
      return user
    })
  }
}
