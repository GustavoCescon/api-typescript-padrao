# PROJETO PADRÃO SEQUELIZE POSTGRESQL

Esse é um projeto padrão para criação de api usando o typescript com sequelize para o POSTGRESQL

## Stack utilizada

**Back-end:** Node, Express, Sequelize, PostgreSql

## Instalação

Para rodar este projeto em sua máquina, você precisa ter o Node.js instalado. Execute os seguintes comandos:

```bash

# Inicie o projeto
npm init -y

# Instale as dependências de desenvolvimento
npm install --save-dev @types/cors @types/express
 @types/joi @types/sequelize nodemon ts-node-dev typescript jest ts-jest @types/jest @types/swagger-ui-express

# Instale as dependências de produção
npm install cors dotenv express joi pg sequelize sequelize-cli swagger-ui-express
```

## Configuração do tsconfig

```javascript
{
  "compilerOptions": {
    "target": "es2022",
    "rootDir": "./src",
    "outDir": "./dist"
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Configuração do package.json

```javascript
"scripts": {
    "test": "jest",
    "dev": "ts-node-dev src/server.ts",
    "build": "npx tsc",
    "clean": "tsc --build --clean"
  },
```

## Desenvolvendo

Inicie o servidor, digite o seguinte comando

```bash
  npm run dev
```

## Teste

Para rodar os testes, digite o seguinte comando

```bash
  npm run test
```

## Deploy

Para rodar o deploy, digite o seguinte comando

```bash
  npm run build
```

## Contribuindo

Contribuições são sempre bem-vindas!

Veja `contribuindo.md` para saber como começar.

Por favor, siga o `código de conduta` desse projeto.

## Licença

MIT License

Copyright (c) 2023 Gustavo Cescon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
