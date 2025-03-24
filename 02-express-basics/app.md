# Setup e Inicialização

1. passo

   nodemon é uma ferramenta que ajuda no desenvolvimento utilizando NodeJS, automaticamente reiniciando a aplicação quando são detectadas novas alterações no diretório do projeto.

   Consulte a documentação: https://www.npmjs.com/package/nodemon

```
npm install nodemon
```

2. passo

```js
// package.json
"scripts": {
    "start": "nodemon app.js"
  },

  "devDependencies": {
    "nodemon": "^3.1.9"
  }
```

3. passo

```
npm start
```

# Mensagens HTTP

Mensagens HTTP são um mecanismo usado para fazer conexões de dados entre o serivdor e o cliente utilizando o protocolo HTTP.
Existem dois tipos de mensagem: `requests`, que são as requisições que o cliente está enviando para o servidor, e `response` que é a resposta do servidor para esta requisição.

## Métodos HTTP

|        |                 |
| ------ | --------------- |
| GET    | ler dados       |
| POST   | inserir dados   |
| PUT    | atualizar dados |
| DELETE | deletar dados   |

# Express

O express é um framework para desenvolvimento web utilizado em conjunto com o NodeJS.O módulo express não é built-in, então precisamos baixá-lo antes de utilizar.

```javascript
npm install express --save
```

OBS: caso não funcione, consulte a documentação: https://expressjs.com/

## Fundamentos do express

Para utilizar o express, é necessário primeiramente importar o express para o seu projeto.

```js
const express = require("express");
const app = express();
```

OU

```js
const app = require("express")();
```

Você pode adotar a sintaxe que mais lhe agradar, porém a primeira é o modo como a documentação utiliza e acredito que deixe o código mais legível.

### app.listen(caminho, [callback])

### app.get('/', [callback])

### app.all('\*', [callback...], callback)

```js
router.all("/api/(.*)", requireAuthentication, loadUser);
```

### app.status(number)

```js
app.status(404).all("*", makeSomething);
```

### Para estilizações, imagens e outros arquivos estáticos, por convenção, devemos criar uma pasta chamada public e colocar todos os arquivos lá.

```js
app.use(express.static("./public"));
```
