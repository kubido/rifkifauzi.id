const axios = require('axios')
const routes = require('./routes')
// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event, context) => {
  try {

    let { route } = event.headers
    let validRoute = Object.keys(routes).includes(route)
    let url = "https://academic-portal.hacktiv8.com/shuttle"
    let params = {}

    switch (route) {
      case 'login':
        const { email, password } = JSON.parse(event.body)
        params = routes.login(email, password)
        break;
      case 'batches':
        params = routes.batches()
        break
      case 'instructors':
        params = routes.instructors
        break
      case 'assignments':
        params = routes.assignments()
        break
      default:
        break;
    }

    if (validRoute) {
      let resp = await axios.post(url, params, { headers: routes.headers })
      data = resp.data
    } else {
      data = { message: "not found" }
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        ...routes.headersCORS
      }
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.toString() }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }
}


module.exports = { handler }
