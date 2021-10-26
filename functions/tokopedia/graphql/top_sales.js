module.exports = {
  query: `
    query DiscoComponentDetailQuery(
      $identifier: String!,
      $component_id: String!,
      $device: String!,
      $version: String!,
      $filters: String
    ) {
      componentInfo(identifier: $identifier, component_id: $component_id, device: $device, version: $version, filters: $filters) {
        data
      }
    }
  `,
  variables(filters) {
    return {
      "filters": JSON.stringify(filters),
      "device": "ios",
      "identifier": "produk-terlaris-untukmu",
      "component_id": "74686",
      "version": "2.153.0"
    }
  }
}

// const filters = {
//   "rpc_next_page": "",
//   "rpc_page_size": "20",
//   "rpc_UserCityId": "168",
//   "rpc_UserWarehouseId": "0",
//   "rpc_UserLong": "106.803084",
//   "rpc_UserDistrictId": "2215",
//   "rpc_UserPostCode": "16158",
//   "rpc_CategoryIDs": "3385",
//   "rpc_page_number": "1",
//   "rpc_UserID": "10273489",
//   "rpc_UserLat": "-6.548694",
//   "rpc_UserAddressId": "101321462"
// }