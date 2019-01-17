const sortUsersByFirstName = users => {
  return users.sort((a, b) => {
    if (a.first_name < b.first_name) {
      return -1
    }
    if (a.first_name > b.first_name) {
      return 1
    }
    return 0
  })
}

userService.$inject = ["$http", "$q"]

export default function userService($http, $q) {
  this.fetchUsers = function() {
    const usersUrl = "/user-list.json"
    const userAvatarsUrl = "/user-avatar.json"

    const users = $q
      .all([
        $http.get(usersUrl).then(response => response.data),
        $http.get(userAvatarsUrl).then(response => response.data)
      ])
      .catch(err => {
        // no error handling just throwing
        throw new Error(err.message)
      })
      .then(([users, avatars]) => {
        return users.map(user => {
          const { avatar } = avatars.find(a => a.id === user.id)
          user.avatar = avatar
          user.checked = false
          return user
        })
      })
      .then(users => sortUsersByFirstName(users))
    return users
  }
}
