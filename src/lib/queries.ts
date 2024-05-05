export const contentQuery: string = `query ($id: Int, $page: Int, $perPage: Int, $search: String) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (id: $id, search: $search) {
        id
        title {
          english
        }
        description
        status
        coverImage {
          extraLarge
          large
          medium
          color
        }
        siteUrl
      }
    }
  }`
