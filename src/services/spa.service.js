import axios from 'axios'

class SpaService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || 'http://localhost:5005'
    })

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem('authToken')

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` }
      }

      return config
    })
  }

  // POST /api/examples

  createOne = async (requestBody) => {
    // Appointment.create(requestBody)
    //       .then(dbpost =>  {

    //         return User.findByIdAndUpdate(req.session.currentUser._id, { $push: { Appointment: dbpost._id  } });})
    //       }
    // .then(() => {
    return this.api.post('/spa/create', requestBody)
    // })
  }

  // GET /api/examples
  getAll = async () => {
    return this.api.get('/api/examples')
  }

  // GET /api/examples/:id
  getOne = async (id) => {
    return this.api.get(`/api/examples/${id}`)
  }

  // PUT /api/examples/:id
  updateOne = async (id, requestBody) => {
    return this.api.put(`/api/examples/${id}`, requestBody)
  }

  // DELETE /api/examples/:id
  deleteProject = async (id) => {
    return this.api.delete(`/api/examples/${id}`)
  }
}

// Create one instance of the service
const spaService = new SpaService()

export default spaService
