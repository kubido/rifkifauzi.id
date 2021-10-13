const axios = require('axios')
const routes = require('./routes')
// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event, context) => {
  try {

    let { route } = event.headers
    let validRoute = Object.keys(routes).includes(route)
    let url = "https://academic-portal.hacktiv8.com/shuttle"

    try {
      const { email, password, batchName, phaseNumber } = JSON.parse(event.body)
      switch (route) {
        case 'login':
          params = routes.login(email, password)
          break;
        case 'batches':
          params = routes.batches()
          break
        case 'batchDetail':
          params = routes.batchDetail(batchName)
          break
        case 'batchStudents':
          params = routes.batchStudents(batchName, phaseNumber)
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
    } catch (error) {
      console.log('------------x', error);
    }



    if (validRoute) {
      let resp = await axios.post(url, params, { headers: routes.headers })
      console.log(resp.data, params);
      data = resp.data
    } else {
      data = { message: "not found" }
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: routes.headersCORS
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.toString() }),
      headers: routes.headersCORS
    }
  }
}


module.exports = { handler }
