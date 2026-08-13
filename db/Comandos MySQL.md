# Comandos MySQL

## Aula 01

### Criando um banco de dados:
CREATE DATABASE sistema_vendas;

### Selecionando um banco de dados para usar:
USE sistema_vendas;

### Criando uma tabela no banco de dados:
CREATE TABLE clientes(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    data_cadastro DATE DEFAULT (CURRENT_DATE)
);

### Alterando uma tabela (Adicionando colunas):
ALTER TABLE clientes 
ADD COLUMN idade INT,
ADD COLUMN cidade VARCHAR(50),
ADD COLUMN condicao VARCHAR(20) DEFAULT 'ativo';

### Alterando uma tabela (Modificando o tipo das colunas):
ALTER TABLE clientes MODIFY COLUMN nome VARCHAR(150) NOT NULL;
ALTER TABLE clientes MODIFY COLUMN cidade VARCHAR(50) NOT NULL;

### Alterando uma tabela (Adicionando Check para verificação de inserções):
ALTER TABLE clientes ADD CONSTRAINT chk_idade CHECK (idade>=18);

### Inserindo dados na tabela:
INSERT INTO clientes (nome, email, idade, cidade) VALUES ('Gustavo2', 'guga@hotmail.com', 10, 'Itaperuna');
INSERT INTO clientes (nome, email) VALUES ('Guilherme Vieira', 'guilherminho_da_night@hotmail.com');
INSERT INTO clientes (nome, email, idade, cidade) VALUES
('Ana Silva', 'ana.silva@email.com', 25, 'Rio de Janeiro'),
('Bruno Costa', 'bruno.costa@email.com', 31, 'São Paulo'),
('Carla Souza', 'carla.souza@email.com', 28, 'Belo Horizonte'),
('Diego Lima', 'diego.lima@email.com', 22, 'Curitiba'),
('Eduarda Martins', 'eduarda.martins@email.com', 35, 'Salvador'),
('Felipe Rocha', 'felipe.rocha@email.com', 27, 'Fortaleza'),
('Gabriela Alves', 'gabriela.alves@email.com', 24, 'Recife'),
('Henrique Santos', 'henrique.santos@email.com', 29, 'Brasília'),
('Isabela Ferreira', 'isabela.ferreira@email.com', 33, 'Campinas'),
('João Pedro', 'joao.pedro@email.com', 20, 'Niterói');

### Atualizando um registro:
UPDATE clientes SET idade = 36, cidade = 'Itaperuna' WHERE id = 1;

### Removendo uma coluna:
ALTER TABLE clientes DROP COLUMN condicao;

### Removendo uma restrição:
ALTER TABLE clientes DROP CHECK chk_idade;

### Visualizar, filtrar e organizar os elementos de uma tabela:
SELECT * FROM clientes;
SELECT * FROM clientes WHERE cidade = 'Rio de Janeiro' AND idade > 30;

### Organizando a tabela por Ascendente ou Decrescente:
SELECT nome, idade, cidade FROM clientes ORDER BY idade ASC;

### Visualizando dados distintos:
SELECT DISTINCT idade FROM clientes;

### Deletando a tabela:
DROP TABLE clientes;

### Deletando o banco:
DROP DATABASE sistema_vendas;


## Aula 02

### Já visto anteriormente:
CREATE DATABASE IF NOT EXISTS LojaVirtual;

USE LojaVirtual;

CREATE TABLE clientes(
	id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cidade VARCHAR(50) NOT NULL
);

CREATE TABLE pedidos(
	id_pedido INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    CONSTRAINT fk_pedidos_clientes FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

INSERT INTO clientes (nome, cidade) VALUES 
('Ana', 'Rio de Janeiro'), 
('Pedro', 'Itaperuna'),
('Matheus', 'Campos'),
('Gabriel', 'Italva');

INSERT INTO clientes (nome, cidade) VALUES ('Adalberto', 'São Fidelis');

INSERT INTO pedidos (id_cliente, valor) VALUES 
(1, 100.00), 
(4, 230.80),
(2, 122.75),
(3, 89.00);

INSERT INTO pedidos (id_cliente, valor) VALUES (NULL, 100.00);

### FUNÇÕES DE AGREGAÇÃO
SELECT 
	SUM(valor) AS soma_total, 
    AVG(valor) AS media_valores,
    MAX(valor) AS valor_maximo,
    MIN(valor) AS valor_minimo,
    COUNT(*) AS pedidos_totais
FROM pedidos;

### AGRUPAMENTO E FILTROS
SELECT
	id_cliente,
    SUM(valor) AS total_gasto
FROM pedidos 
WHERE id_cliente IS NOT NULL
GROUP BY id_cliente;

SELECT
	id_cliente,
    SUM(valor) AS total_gasto
FROM pedidos
GROUP BY id_cliente
HAVING SUM(valor) > 120.00;

### JUNÇÕES DE TABELAS (JOIN)
SELECT
	clientes.nome,
    pedidos.id_pedido,
    pedidos.valor
FROM clientes INNER JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente ORDER BY valor DESC;


SELECT
	clientes.nome,
    pedidos.id_pedido,
    pedidos.valor
FROM clientes LEFT JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente;

SELECT
	clientes.nome,
    pedidos.id_pedido,
    pedidos.valor
FROM clientes RIGHT JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente;

SELECT
	clientes.nome,
    pedidos.id_pedido,
    pedidos.valor
FROM clientes 
LEFT JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente
UNION
SELECT
	clientes.nome,
    pedidos.id_pedido,
    pedidos.valor
FROM clientes 
RIGHT JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente;

DROP TABLE IF EXISTS pedidos;
DROP TABLE IF EXISTS clientes;
DROP DATABASE IF EXISTS lojavirtual;


database biblioteca
tabelas 
    - categorias, id (PK), nome
    - livros, id (PK), titulo, autor, ano_publicacao, categoria_id (FK), status ENUM('disponivel', 'emprestado') DEFAULT 'disponivel'

-- SUBQUERY!!!
CREATE DATABASE IF NOT EXISTS empresa_db;

USE empresa_db;

DROP TABLE funcionarios;

CREATE TABLE IF NOT EXISTS funcionarios (
	id_funcionario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cargo VARCHAR(50),
    departamento VARCHAR(50) NOT NULL,
    salario DECIMAL(10, 2) NOT NULL,
    data_admissao DATE NOT NULL
);

INSERT INTO funcionarios (nome, cargo, departamento, salario, data_admissao) VALUES
('Ana Silva', 'Desenvolvedora Jr', 'TI', 3500.00, '2025-03-10'),
('Bruno Souza', 'Desenvolvedor Pl', 'TI', 5500.00, '2026-07-15'),
('Carla Dias', 'Gerente de TI', 'TI', 8000.00, '2024-01-20'),
('Diego Rocha', 'Assistente Adm', 'Administrativo', 2200.00, '2026-08-01'),
('Eduarda Lima', 'Analista de QA', 'TI', 4300.00, '2026-02-18'),
('Fernanda Ramos', 'Diretora Geral', 'Diretoria', 9500.00, '2023-05-10');

-- SUBQUERY COM UM COMPARADOR E AGREGAÇÃO
SELECT AVG(salario) FROM funcionarios;
SELECT nome, salario FROM funcionarios WHERE salario > ( SELECT AVG(salario) FROM funcionarios );


-- SUBQUERY COM UM OPERADOR ALL
SELECT nome, cargo, salario FROM funcionarios WHERE salario > ALL (SELECT salario FROM funcionarios WHERE departamento = 'TI');
SELECT salario FROM funcionarios WHERE departamento = 'TI';

-- SUBQUERY COM O OPERADOR IN
SELECT nome, departamento FROM funcionarios WHERE departamento IN (SELECT departamento FROM funcionarios WHERE data_admissao >= '2026-07-01');