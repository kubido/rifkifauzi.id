const axios = require('axios')
const paramsCategories = require('./graphql/categories')
const paramsTopSales = require('./graphql/top_sales')

const handler = async (event, context) => {
  try {
    let params, respData, resp
    const { path, perPage, cityId, lat, lng, userId, categoryId } = event.queryStringParameters
    const headers = {
      "Content-Type": "application/json",
      Accept: "*/*",
      origin: "https://www.tokopedia.com",
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
      cookie: "_SID_Tokopedia_=hGDMfaHiBjUR6o_swfbercB-nuJV4uN_b5gLsfgoJPxQSElpN6fvBkffUNqLa74EhOujsSqfGzhbf6in7nyHXpLmYklt2FiAE7yCpVSd0xmimu50w_WYLDX3BV0v4xcT;",
    }

    let validPath = ["categories", "top_sales"].includes(path)

    if (!validPath) throw (true)

    switch (path) {
      case "categories":
        params = {
          query: paramsCategories.query,
          variables: paramsCategories.query,
        }
        resp = await axios.post('https://gql.tokopedia.com', params, { headers })
        respData = resp.data.data.categoryAllList.categories
        break;
      case "top_sales":
        params = {
          query: paramsTopSales.query,
          variables: paramsTopSales.variables({
            "rpc_page_size": perPage || "",
            "rpc_UserCityId": cityId || "",
            "rpc_UserLat": lat || "",
            "rpc_UserLong": lng || "",
            "rpc_CategoryIDs": categoryId || "",
            "rpc_UserID": userId || "",
          })
        }
        resp = await axios.post('https://gql.tokopedia.com', params, { headers })
        respData = resp.data.data.componentInfo.data.component.data.map(product => {
          let { name, count_review, official_store, price, product_id, rating, rating_average, labels,
            shop_location, shop_name, shop_reputation, shop_url_desktop, stock } = product

          let terjual = labels.find(label => label.title.includes("Terjual")).title
          return {
            name, count_review, official_store, price, product_id, rating, rating_average, terjual,
            shop_location, shop_name, shop_reputation, shop_url_desktop, stock
          }
        })
        break
      default:
        params = null
        break;
    }

    return {
      statusCode: 200,
      body: JSON.stringify(respData),
      headers: headersCORS()
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Teu kapendak mangs", err: err.message }),
      headers: headersCORS()
    }
  }
}

function headersCORS() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, site, route',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Max-Age': '2592000',
    'Access-Control-Allow-Credentials': 'true',
  }
}

module.exports = { handler }
