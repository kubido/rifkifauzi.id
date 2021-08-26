const axios = require('axios')
// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event, context) => {
  try {

    let { site } = event.headers
    let url, data
    switch (site) {
      case 'ngaji':
        url = 'https://script.googleusercontent.com/macros/echo?user_content_key=TaOgV0xY9ifi28ntq-NYRZFB4mltrRoa3Akw0zc00BPn6UP6Wabc6Kc6PehO72k89zQE6NrGU0Zthfbrr6lfzSNCMn1OgClam5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPUL2NRur9gUMVVOGxM0P_n5ITr-W5m90RKU2q2AhUc8rqbcfZPnBfb01ODrWXKMM8DVcE81Diki-xRMeLRGmc00rO_EHpBekQ&lib=MuOCJOjI1yUelDJujPz71z72m5vUBsRFV'
        break;
      case 'serial_islami':
        url = 'https://script.googleusercontent.com/macros/echo?user_content_key=6h-txMflOS-_w1ZWHB5gSJOQMSZoRcfHlnSz49AQHqS3BtOfKm4o_YyF0ufdVn3v_ccZyhY3zE2EWUFE6WKgF1XtTvF02Xyom5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJsTmFdjwiNCHJAJgktaVAvssemG0AQKZX2FyrPGGfWPei-oC1Z54_BVX9CGuZjAeJL8zQWgHwEWKMR3-H5MFlL6XJloi4AD5A&lib=MuOCJOjI1yUelDJujPz71z72m5vUBsRFV'
      default:
        break;
    }

    if (url) {
      let resp = await axios.get(url)
      data = resp.data
    } else {
      data = { message: "not found" }
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, site',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Max-Age': '2592000',
        'Access-Control-Allow-Credentials': 'true',
      }
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: error.toString(),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }
}


module.exports = { handler }
