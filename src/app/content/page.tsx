import ContentPage from "@/components/page/content";

import { getClient } from "@/lib/apolloClient";
import { gql } from "@apollo/client";

export default async function Content() {

    const query = gql`query ($id: Int, $page: Int, $perPage: Int, $search: String) {
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
      }`;
    const { data } = await getClient().query({ query });

  return (
    <ContentPage />
  )
}
