import React, { FunctionComponent } from 'react'
import { graphql, Link } from 'gatsby'
import Text from 'components/Text'

type InfoPageProps = {
    data: {
        site: {
            siteMetadata: {
                title: string
                description: string
                author: string
            }
        }
    }
}

const InfoPage: FunctionComponent<InfoPageProps> = function ({
    data: {
        site: {
            siteMetadata: { title, description, author },
        },
    },
}) {
    return (
        <div>
            <Text text={title} />
            <Text text={description} />
            <Text text={author} />
            <Link to="/">To Main</Link>
        </div>
    )
}

export default InfoPage

// export하면 Gatsby 내부적으로 요청 보냄
// 요청에 대한 응답으로 데이터를 Props 전달해줌
export const metadataQuery = graphql`
    {
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`
// 반환값
// {
//     "data": {
//       "site": {
//         "siteMetadata": {
//           "title": "Gatsby Default Starter",
//           "description": "Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",
//           "author": "@gatsbyjs"
//         }
//       }
//     },
//     "extensions": {}
//  }
