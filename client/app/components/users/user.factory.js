export default function UserState(UserService) {
  let users = UserService.fetchUsers()

  const service = {
    all,
    allSelected
  }

  return service

  // service functions

  function all() {
    return users
  }

  function allSelected() {
    return users.then(users => users.filter(user => user.checked))
  }
}
