var express = require('express');
const cors = require('cors');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var axios = require('axios');
var { schemaTypes } = require('./schema');

//Buscando os valores no StackOverFlow
const getQuestions = async () => {
    try {
        return await axios.get('https://api.stackexchange.com/2.2/questions?pagesize=100&order=desc&sort=votes&site=stackoverflow')
    } catch (error) {
        console.error(error)
    }
}

const startAll = async () => {
    const res = await getQuestions()
    var questions = res.data.items

    // Construct a schema, using GraphQL schema language
    var schema = buildSchema(schemaTypes)

    // The root provides a resolver function for each API endpoint
    var root = {
        questions: questions,
        filterQuestions: (args) => {

            //score = 0 como default
            if (!args.score) {
                args.score = 0
            }
            //Buscando a TAG
            var tagFilter = questions.filter((questions) =>
                questions.tags.indexOf(args.tag) >= 0
            )
            //Buscando os Scores maiores que
            var scoreFilter = tagFilter.filter((questions) => questions.score >= args.score)

            //Ordenando de acordo com o item desejado
            switch (args.sort) {
                case 'score':
                    var sortFilter = scoreFilter.sort(function (a, b) { return a.score > b.score ? 1 : -1; });
                    break;
                case 'creation_date':
                    var sortFilter = scoreFilter.sort(function (a, b) { return a.creation_date > b.creation_date ? 1 : -1; });
                    break;
                default:
                    var sortFilter = scoreFilter.sort(function (a, b) { return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1; });
            }

            //Caso insira limite
            if (args.limit) {
                return sortFilter.slice(0, args.limit)
            } else {
                return sortFilter
            }
        }
    };




    var app = express();
    app.use(cors());
    app.use('/graphql', graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    }));
    app.listen(4000);
    console.log('Running a GraphQL API server at http://localhost:4000/graphql');
}

startAll()
