## Instalar Marquina:
`wsl --install`

## Atualizar sistema:
`sudo apt update`

## Instalar o sqlite3 na WSL:
`sudo apt install sqlite3 -y`

## Criar um banco:
`sqlite3 meubanco.db`

## Criando uma tabela de usuários
```
CREATE TABLE usuarios(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT UNIQUE
); 
```

## Inserindo alguns Registros
```
INSERT INTO usuarios (nome, email) VALUES ('Gustavo Erthal', 'gustavinhodolol67@hotmail.com');
INSERT INTO usuarios (nome, email) VALUES ('Gabriel Borgath', 'gabizinho_cliente_do_claudio@hotmail.com');
```

## Lendo os registros de uma tabela
```
SELECT * FROM USUARIOS;
```

## Ler um registro específico
```
SELECT * FROM USUARIOS WHERE email='moisesinho_de_campos@hotmail.com';
```

## Comandos úteis
```
.mode table - Deixa bonitinho
.tables - Lista tabelas
.databases - Lista o banco
.shell clear - Limpa o terminal sqlite3
.schema - mostra as colunas
.quit ou .exit - sair
```

## Criando uma tabela para Clientes

### Criando uma tabela, inserindo valores e verificando se deu certo!
```
CREATE TABLE clientes (
    id_cliente INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT UNIQUE
);

INSERT INTO clientes (nome, email) VALUES('Gustavo', 'gustavo@example.com');
INSERT INTO clientes (nome, email) VALUES('Pedro', 'pedro@example.com');
INSERT INTO clientes (nome, email) VALUES('Thiago', 'thiago@example.com');
INSERT INTO clientes (nome, email) VALUES('Lucao', 'lucao@example.com');

SELECT * FROM clientes;
```

### Introduzindo uma tabela com Chave Estrangeira

Comando do SQLite3 para ativar chaves estrangeiras:
`PRAGMA foreign_keys = ON;`

```
CREATE TABLE pedidos (
    id_pedido INTEGER PRIMARY KEY AUTOINCREMENT,
    data_pedido DATETIME DEFAULT CURRENT_TIMESTAMP,
    valor REAL NOT NULL,
    id_cliente INTEGER,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

INSERT INTO pedidos (valor, id_cliente) VALUES (17.60, 1);
INSERT INTO pedidos (valor, id_cliente) VALUES (22.23, 2);
INSERT INTO pedidos (valor, id_cliente) VALUES (70.15, 3);

SELECT * FROM pedidos;
```

### Adicionando uma coluna em uma tabela já existente e adicionando valores em registros já existentes.
```
ALTER TABLE clientes ADD COLUMN telefone TEXT;

UPDATE clientes SET telefone = '22 99384-6666' WHERE id_cliente=1; NUNCA RODE UPDATE SEM WHERE
```

### Alterando nome ou colunas da tabela
`ALTER TABLE clientes RENAME TO cliente;`
`ALTER TABLE cliente RENAME COLUMN id_cliente TO id_clientes;`

### Apagar uma coluna
`ALTER TABLE cliente DROP COLUMN telefone;`

### Apagando um registro
`DELETE FROM pedidos WHERE id_pedido=3;`

### Apagando uma tabela
`DROP TABLE cliente;`