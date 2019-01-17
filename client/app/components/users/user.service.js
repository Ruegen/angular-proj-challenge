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

export default function UserService($http, $q) {
  const uri = "http://localhost:1234/"
  const usersUrl = uri + "user-list.json"
  const userAvatarsUrl = uri + "user-avatar.json"

  this.fetchUsers = function() {
    const users = $q
      .all([
        $http.get(usersUrl).then(response => response.data),
        $http.get(userAvatarsUrl).then(response => response.data)
      ])
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
