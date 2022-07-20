import React, { FunctionComponent } from 'react'
import { graphql, Link } from 'gatsby'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'

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
// 1. global style
const globalStyle = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-size: 20px;
    }
`

// 2. Tagged Template Literal 방식을 이용해 정의한 css 적용
const TextStyle = css`
    font-size: 18px;
    font-weight: 700;
    color: gray;
`
// 3. Tagged Template Literal 방식을 이용해 Styled Component 생성
// Kebab Case 적용
const Text1 = styled.div<{ disable: Boolean }>`
    font-size: 20px;
    font-weight: 700;
    text-decoration: ${({ disable }) => (disable ? 'line-through' : 'none')};
`

// 4. 객체를 통한 Styled component 생성방법
const Text2 = styled('div')<{ disable: Boolean }>(({ disable }) => ({
    fontSize: '15px',
    color: 'blue',
    textDecoration: disable ? 'line-through' : 'none',
}))

const InfoPage: FunctionComponent<InfoPageProps> = function ({
    data: {
        site: {
            siteMetadata: { title, description, author },
        },
    },
}) {
    return (
        <div>
            <Global styles={globalStyle} />
            <div css={TextStyle}>{title}</div>
            <Text1 disable={true}>{description}</Text1>
            <Text2 disable={true}>{author}</Text2>
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
