exports.schemaTypes = `

type Questions{
    tags: [String!]
    is_answered: Boolean!
    view_count: Int!
    answer_count: Int!
    score: Int!
    last_activity_date: Int!
    creation_date: Int!
    last_edit_date: Int
    question_id: Int!
    content_license: String
    link: String!
    title: String!
    owner: Owner
}
type Owner{
    reputation: Int
    user_id: Int
    user_type: String
    accept_rate: Int
    profile_image: String
    display_name: String
    link: String
}


type Query {
    questions: [Questions]
    filterQuestions( score: Int sort:String limit: Int tag: String!): [Questions]
}
`