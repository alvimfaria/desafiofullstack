# Desafio 1 - API Graphql

Aplicação construída em node.js utilizando os módulos:
* `axios`
* `cors`
* `express`
* `graphql`
* `express-graphql`

Para testar a API, primeiramente deverá acessar o diretório "back-end" e depois instalar todos os módulos:

```
cd back-end

yarn install
ou
npm install
```

Após instalar todos os pacotes, basta rodar a aplicação:
```
yarn start
ou
npm start
```

Dessa forma o servidor com a url http://localhost:4000/graphql estará pronto para ser utilizado.

## A aplicação possui 02 end-points para serem utilizadas:

### 01 questions
```
{
  questions {
    title
    tags
    is_answered
    view_count
    answer_count
    score
    last_activity_date
    creation_date
    last_edit_date
    question_id
    content_license
    owner {
      reputation
      user_id
      user_type
      accept_rate
      profile_image
      display_name
      link
    }
  }
}
```

### 02 filterQuestions
```
{
  filterQuestions(tag: "javascript" limit:12 score:4000 sort:"title") {
    title
    tags
    is_answered
    view_count
    answer_count
    score
    last_activity_date
    creation_date
    last_edit_date
    question_id
    content_license
    owner {
      reputation
      user_id
      user_type
      accept_rate
      profile_image
      display_name
      link
    }
  }
}
```

# Desafio 2 - Front-end
Aplicação construída em react.js utilizando:
* `axios`
* `styled-component`
* `react hooks`

Para testar a aplicação, primeiramente deverá acessar o diretório "front-end" e depois instalar todos os módulos:
```
cd front-end

yarn install
ou
npm install
```

Após instalar todos os pacotes, ligue o servidor back-end (conforme as instruções anteriores), em seguida basta rodar a aplicação:
```
yarn start
ou
npm start
```

A aplicação possui somente uma página com um forms com quatro campos para realizar a busca.