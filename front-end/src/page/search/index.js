import React, { useState } from "react";
import { Form, Table, Title } from "./styles";

import api from '../../services/api'

function SearchPage() {
    const [tag, setTag] = useState('');
    const [score, setScore] = useState(null);
    const [sort, setSort] = useState(null);
    const [limit, setLimit] = useState(null);
    const [data, setData] = useState([]);
    const [callback, setCallback] = useState(false);

    function handleSubmit(event) {
        setCallback(true); 
        event.preventDefault();
        var body =   `{filterQuestions (tag: "${tag}" sort:"${sort}" score: ${score} limit: ${limit})
                        { question_id title score tags link view_count content_license is_answered answer_count last_activity_date creation_date last_edit_date
                            owner {reputation user_id user_type accept_rate profile_image display_name link} 
                        }
                    }`;
        api.post("/graphql", {
            query: body, headers: {
                Accept: 'application/json'
            }
        })
            .then(response => {
                console.log(response)
                setData(response.data.data.filterQuestions);
            });
    }

    console.log(data)

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h3>Filtro de buscas das questions do StackOverFlow:</h3>
                <div>
                    <input
                        name="tag"
                        type="text"
                        placeholder="Qual tag?"
                        onChange={e => setTag(e.target.value)}
                        required
                    />
                    <input
                        name="score"
                        type="number"
                        placeholder="Qual score?"
                        onChange={e => setScore(e.target.value)}
                    />
                    <input
                        name="limit"
                        type="number"
                        placeholder="Quantidade de resultados?"
                        onChange={e => setLimit(e.target.value)}
                    />
                    <select onChange={e => setSort(e.target.value)}>
                        <option>Ordenar por:</option>
                        <option value="title">title</option>
                        <option value="score">score</option>
                        <option value="creation_date">creation_date</option>
                    </select>
                    <button type="submit">Filtrar</button>
                </div>
            </Form>

            {callback &&
                <Title>Quantidade de Questions encontrados: {data.length}</Title>
            }

            {data.map((question, index) => (
                <Table key={index}>
                    <tr>
                        <td>question_id</td>
                        <td>{question.question_id}</td>
                    </tr>
                    <tr>
                        <td>title</td>
                        <td>{question.title}</td>
                    </tr>
                    <tr>
                        <td>score</td>
                        <td>{question.score}</td>
                    </tr>
                    <tr>
                        <td>tags</td>
                        <td>{question.tags.toString()}</td>
                    </tr>
                    <tr>
                        <td>title</td>
                        <td>{question.title}</td>
                    </tr>
                    <tr>
                        <td>link</td>
                        <td>{question.link}</td>
                    </tr>
                    <tr>
                        <td>view_count</td>
                        <td>{question.view_count}</td>
                    </tr>
                    <tr>
                        <td>content_license</td>
                        <td>{question.content_license}</td>
                    </tr>
                    <tr>
                        <td>is_answered</td>
                        <td>{question.is_answered}</td>
                    </tr>
                    <tr>
                        <td>answer_count</td>
                        <td>{question.answer_count}</td>
                    </tr>
                    <tr>
                        <td>last_activity_date</td>
                        <td>{question.last_activity_date}</td>
                    </tr>
                    <tr>
                        <td>creation_date</td>
                        <td>{question.creation_date}</td>
                    </tr>
                    <tr>
                        <td>last_edit_date</td>
                        <td>{question.last_edit_date}</td>
                    </tr>
                    <tr>
                        <td>owner</td>
                        <td>
                            reputation: {question.owner.reputation} <br />
                            user_id: {question.owner.user_id} <br />
                            user_type: {question.owner.user_type} <br />
                            accept_rate: {question.owner.accept_rate} <br />
                            profile_image: {question.owner.profile_image} <br />
                            display_name: {question.owner.display_name} <br />
                            link: {question.owner.link}
                        </td>
                    </tr>
                </Table>
            ))}


        </>


    );
}

export default SearchPage;