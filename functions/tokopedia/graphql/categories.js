module.exports = {
  query: `
    query getCategoryAllList($categoryId: Int, $source: String) {
      categoryAllList(categoryID: $categoryId, catnav: false, source: $source) {
        categories {
          id
          name
          iconImageUrl
          iconImageUrlGray
          child {
            id
            name
            parent
            child {
              id
              name
              parent
            }
          }
        }
      }
    }
  `,
  variables: {
    "source": "home-page"
  }
}