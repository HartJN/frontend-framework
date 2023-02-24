import { User, UserProps } from './models/User'
import axios, { AxiosResponse } from 'axios'
import { Collection } from './models/Collection'
import { UserForm } from './views/UserForm'
import { UserEdit } from './views/UserEdit'
import { UserList } from './views/UserList'

const user = User.buildUser({ name: 'Billy', age: 59 })

const root = document.getElementById('root')

if (root) {
  const userEdit = new UserEdit(root, user)

  userEdit.render()

  console.log(userEdit)
} else {
  throw new Error('Root element not found')
}
