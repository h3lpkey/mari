/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

// exports.createPages = async function ({ actions, graphql }) {
//   const { data } = await graphql(`
//     query {
//       allStrapiAlbum {
//         nodes {
//           id
//           title
//         }
//       }
//     }
//   `)
//   data.allStrapiAlbum.nodes.forEach(album => {
//     actions.createPage({
//       path: `/${album.title}`,
//       component: require.resolve(`./src/pages/index.tsx`),
//       context: { album: album },
//     })
//   })
// }
