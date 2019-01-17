UserListController.$inject = ["userState"]

export default function UserListController(userState) {
  const vm = this

  vm.isSelected = function(id) {
    return userState.getSelection().indexOf(id) !== -1 ? true : false
  }

  vm.select = function(id) {
    userState.toggleSelection(id)
  }
}
