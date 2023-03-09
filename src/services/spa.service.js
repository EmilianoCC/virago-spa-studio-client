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
    return this.api.post('/spa/create', requestBody)
  }

  // GET /api/examples
  getAll = async () => {
    return this.api.get('/api/examples')
  }

  // GET /api/examples/:id
  getOne = async (id) => {
    return this.api.get(`/api/examples/${id}`)
  }
  getAppointment = async (userid) => {
    return this.api.get(`/spa/citas/${userid}`)
  }

  getOneAppointment = async (userid) => {
    return this.api.get(`/citas/citas/${userid}`)
  }

  // PUT /api/examples/:id
  updateAppointment = async (id, requestBody) => {
    console.log(requestBody, id)
    return this.api.put(`/citas/update/${id.id}`, { requestBody })
  }

  // DELETE /api/examples/:id
  deleteAppointment = async (id) => {
    return this.api.delete(`/citas/citas/${id}`)
  }
}

// Create one instance of the service
const spaService = new SpaService()

export default spaService
