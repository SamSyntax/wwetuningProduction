import React from "react"
import Navbar from "../components/Navbar"
import { ApolloClient, InMemoryCache } from "@apollo/client"
import { GET_ALL_POSTS } from "../graphql/queries"

// const URL = "http://localhost:1337"

// export async function getStaticProps(context) {
//   const fetchParams = {
//     method: "post",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify({
//       query: `
//       {
//         reviews {
//   	data {
//       attributes {
//         title
//         body
//         slug
//         splash {
//           data {
//             attributes {
//               url
//             }

//           }
//         }
//       }
//     }
//   }
//       }
//       `,
//     }),
//   }
//   const res = await fetch(`${URL}/graphql`, fetchParams)
//   const data = await res.json()
//   return {
//     props: data,
//   }
// }
export default function BlogTest(posts) {
  console.log(posts)
  return (
    <div className='flex flex-col'>
      <Navbar key='nav' />
    </div>
  )
}

export async function getServerSideProps() {
  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
  })

  const { data } = await client.query({
    query: GET_ALL_POSTS,
  })

  return {
    props: {
      posts: data.reviews.data,
    },
  }
}
