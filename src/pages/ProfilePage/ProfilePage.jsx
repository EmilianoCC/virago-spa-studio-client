import { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/auth.context'
import spaService from '../../services/spa.service'
import './ProfilePage.css'

function ProfilePage() {
  const { user } = useContext(AuthContext)
  useEffect(() => {
    const getCitas = async () => {
      const { data: citasGuardadas } = await spaService.getAppointment(user._id)
      console.log(citasGuardadas)
    }

    getCitas()
  }, [])
  return (
    <div>
      <h1>Profile page</h1>
    </div>
  )
}

export default ProfilePage
