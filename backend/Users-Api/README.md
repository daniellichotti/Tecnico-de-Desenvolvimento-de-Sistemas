## Criando o container com MySQL e modelando o banco:

1. docker run -d --name user-db-sql -e MYSQL_ROOT_PASSWORD=123 -e MYSQL_DATABASE=my-data-base -p 3307:3306 mysql:8
2. docker ps (Use esse comando para listar os containers e verificar o CONTAINER ID que será utilizado no comando seguinte)
3. docker exec -it (CONTAINER ID) mysql -u root -p
4. Depois de aparecer o 'mysql>' basta inserir as seguintes queries de exemplo para modelar o banco:
    ```
    use my-data-base

    CREATE TABLE usuarios (
         id VARCHAR(36) PRIMARY KEY,
         name VARCHAR(100) NOT NULL,
         email VARCHAR(100) NOT NULL UNIQUE,
         password VARCHAR(255) NOT NULL,
         createdAt VARCHAR(20) NOT NULL
     );

     INSERT INTO usuarios (id, name, email, password, createdAt)
     VALUES ('123e4567-e89b-12d3-a456-426614174000', 'Pedro', 'pedrinho@yahoo.com', '123', '10-10-10');
    ```

## API com FASTIFY
1. Crie uma pasta e entre nela
2. Insira o comando a seguir para iniciar um projeto node:
    `
   npm init -y
    `
    1. Entrar no package.json e alterar "type" para "module"
    2. Adicionar ',' depois de "test" e acrescentar:
        `
        "dev": "node --watch server.js"
        `
4. Instalar as bibliotecas que iremos utilizar com o comando:
    `
    npm install fastify uuid dotenv mysql2 @fastify/cors
    `

