export const typeDefs = `#graphql
    type Link {
        id: String
        title: String
        description: String
        url: String
        imageURL: String
        createdAt: String
        categories: String
        userId: String
        user : User
    }

    type User {
        id : String!
        email : String!
        name : String
        image : String
        createdAt : String
        role : String
        links: [Link]
        bookmarks: [Link]
    }

    type Query {
        link(id: String!): Link
        links: [Link]!

        users : [User]
    }

    type Mutation {

        addLink(
        id: String
        title: String!
        description: String!
        categories: String!
        imageURL: String!
        url: String!
        userId: String!
        ): Link

        addToBookmark(
            userId: String!
            linkId: String!
        ): Link

        updateLink (
            id: String!
            title: String
            description: String
            url: String
            categories: String
            imageURL: String
        ) : Link

        deleteLink (
            id: String!
        ) : Link

    }
`;
