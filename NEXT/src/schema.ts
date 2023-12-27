import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Response {
        info: Info
        results: [Result]
    }

    type Info {
        count: Int
        pages: Int
        next: String
        prev: String
    }
    
    type Result {
        id: Int
        name: String
        status: String
        species: String
        type: String
        gender: String
    }

    type Query {
        filterCharacters(species: String!, page: Int!): Response
    }

    `);

export default schema;