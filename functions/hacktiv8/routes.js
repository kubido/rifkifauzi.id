module.exports = {
  instructors: {
    "method": "GET",
    "path": "/instructor"
  },
  lectureSchedules(batchName, phaseNumber = 1) {
    return {
      "method": "GET",
      "path": `/schedule-lecture/${batchName}/${phaseNumber}`
    }
  },
  login(email, password) {
    return {
      "method": "POST",
      "path": "/signin",
      "payloads": {
        "email": email,
        "password": password
      }
    }
  },
  assignments(phaseNumber = 1) {
    return {
      "method": "GET",
      "path": "/assignment",
      "qs": {
        "phase": `${phaseNumber}`
      }
    }
  },
  batches(isActive = true) {
    return {
      "method": "GET",
      "path": "/batch",
      "qs": {
        "isActive": isActive
      }
    }
  },
  batchDetail(batchName) {
    return {
      "method": "GET",
      "path": `/student/batch/${batchName}`
    }
  },
  headers: {
    cookie: 'token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYjQ4ZGFhZTIyZmFkZWQ3MWUxMWY1MSIsImlhdCI6MTYyOTc5MDcxNn0.W8gQbjlUKk6K7NNGSS6u9rmLUAXs9x5inaGxJwl2D28"'
  },
  headersCORS: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, site, route',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Max-Age': '2592000',
    'Access-Control-Allow-Credentials': 'true',
  }

}