import React from "react"
import { ApolloWrapper } from "../../apollo/ApolloWrapper"

export default ({ element }) => {
    return (
        <ApolloWrapper>
            {element}
        </ApolloWrapper>
    )
}