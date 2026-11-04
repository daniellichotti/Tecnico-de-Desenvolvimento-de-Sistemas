1. npm init -y
    a. Entrar no package.json e alterar "type" para "module"
    b. Adicionar ',' depois de "test" e acrescentar:
        `
        "dev": "node --watch server.js"
        `
2. npm install fastify uuid dotenv mysql2

3. docker run -d --name user-db-sql -e MYSQL_ROOT_PASSWORD=123 -e MYSQL_DATABASE=my-data-base -p 3307:3306 mysql:8


4. 
    1. docker ps (lista os containers)
    2. docker exec -it <id do container> mysql -u root -p
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