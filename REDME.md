#Iniciando o typescript
npm init -y
npm install typescript
npm i express

#configuração do typescript
npx tsc --init

#criando pasta build e configurando no tsconfig
desmarcar => "outDir": "./build" |  "rootDir": "./src" | "moduleResolution": "node"

#configurando os types do express
npm install @types/express

#Buidar projeto
npx tsc

#Start projeto
node build/index.js

#Script para start
npm install ts-node-dev

#Faz o mesmo trabalho do nodemon
"dev":"ts-node-dev --respawn --transpileOnly --ignore-watch node_modules  ./src/index.ts"

npm run dev

#Migrations

https://typeorm.io/#/
https://typeorm.io/#/using-cli/installing-cli

npx typeorm

#Iniciando estrutura do type orm
npx typeorm init

#criando migrations
npx typeorm migration:create --name User
npx typeorm migration:generate --name User
yarn typeorm migration:generate --database User
yarn typeorm migration:run 