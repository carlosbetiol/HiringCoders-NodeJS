# Hiring Coders - exemplo de REST e SOAP

Este exemplo utiliza o postgresql rodando em docker, para rodar:
```
docker run --name database -e ALLOW_EMPTY_PASSWORD=no -e POSTGRESQL_PASSWORD=docker -p 5432:5432 bitnami/postgresql:13
```
Instalar o express, framework 
```
npm i express
```
Instalar o pacote de desenvolvimento sucrase
```
npm i sucrase -D
```

Instalar o pacote de desenvolvimento nodemon que server para manter rodando a api
```
npm i nodemon -D
```
Criar e configurar o nodemon.json na raiz com o seguinte:
```
{
    "execMap": {
        "js": "sucrase-node"
    }
}
```
Colocar no package.json dentro de scripts:
```
  "scripts": {
    "dev": "nodemon src/server"
  }
```
Para rodar:
```
npm run dev
```
Instalar o sequelize (ORM para nodejs) e também o sequelize client. (importante: o sequelize só aceita exports usando module.exports)
```
npm i sequelize
npm install --save-dev sequelize-cli
```
Instalar também para conectar via postgresql (dialeto)
```
npm i pg pg-hstore
```
Depois de criados os arquivos necessários para o sequelize, para criar o migrations, rodar:
```
npx sequelize migration:create --name=create-users
```
Para criar as tabelas no database de acordo com o migrations via sequelize:
```
npx sequelize db:migrate (cria as tabelas)
npx sequelize db:migrate:undo (remove as tabelas)
npx sequelize db:migrate:undoAll (remove todas as tabelas ???)
```
O arquivo .sequelizerc deve estar na raiz do projeto, facilmente se equivoca e coloca no src.
