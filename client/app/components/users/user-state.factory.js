userState.$inject = ["userAPI"]

export default function userState(userAPI) {
  const users = userAPI.fetchUsers()
  let selection = []

  const service = {
    all,
    allSelected,
    getSelection,
    toggleSelection,
    clearSelection
  }

  return service

  // service functions

  function all() {
    return users
  }

  function allSelected() {
    return users.then(users => {
      return users.reduce((acc, user) => {
        if (selection.indexOf(user.id) !== -1) {
          acc.push(user)
        }
        return acc
      }, [])
    })
  }

  function getSelection() {
    return [...selection]
  }

  function toggleSelection(id) {
    const index = selection.indexOf(id)
    if (index !== -1) {
      selection.splice(index, 1)
    } else {
      selection.push(id)
    }
  }

  function clearSelection(id) {
    selection = []
  }
}
