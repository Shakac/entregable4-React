import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUsers from './components/formUsers'
import UserCard from './components/UserCard'

function App() {

  const [updateInfo, setUpdateInfo] = useState()

  const baseUrl = 'https://users-crud.academlo.tech/'
  const [ 
    Users, 
    getAllUsers, 
    createNewUser, 
    deleteUserById,
    updateUserById]
    = useFetch(baseUrl)

    useEffect(() => {
      getAllUser('/users')
    }, [])
  

  return (
    <div>
      <h1>Users CRUD</h1>
      <div className='form__container'>
      <FormUsers 
      createNewUser={createNewUser}
      updateInfo={updateInfo}
      updateUserById={updateUserById}
      setUpdateInfo={setUpdateInfo}
      />
      </div>
      <div>
        {
          users?.map(user => (
        <UserCard 
         key={user.id}
         user={user}
         deleteUserById={deleteUserById}
        />
          ))
        }
      </div>
    </div>
  )
}

export default App
