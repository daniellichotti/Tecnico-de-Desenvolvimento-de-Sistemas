Exercício 1: Criação e Seleção do Banco
Crie um banco de dados chamado livraria_db.
Selecione o banco livraria_db para uso.
Crie uma tabela chamada livros com a seguinte estrutura inicial:
id: Inteiro, Chave Primária, Auto Incremento.
titulo: Texto de até 150 caracteres, obrigatório.
autor: Texto de até 100 caracteres, obrigatório.
preco: Número decimal (10 dígitos no total, 2 casas decimais).

Exercício 2: Alteração de Tabela (ALTER) e Validação (CHECK)
A gerência da livraria pediu ajustes na estrutura da tabela:
Use o comando ALTER TABLE para adicionar três novas colunas à tabela livros:
categoria (Texto de até 50 caracteres).
ano_publicacao (Inteiro).
estoque (Inteiro, com valor padrão 0).
Adicione uma regra CHECK garantindo que o preco de qualquer livro seja maior que zero.

Exercício 3: Inserção de Registros (INSERT)
Insira 6 livros na tabela livros:

Exercício 4: Consultas de Dados (WHERE, ORDER BY, DISTINCT)
Escreva os comandos SELECT para atender aos relatórios solicitados pelo gerente:
Filtro (WHERE): Liste o título, autor e preço de todos os livros da categoria 'Fantasia' com preço superior a 50.00.
Ordenação (ORDER BY): Liste todos os livros da tabela ordenando do mais recente para o mais antigo (com base na coluna ano_publicacao).
Valores Únicos (DISTINCT): Exiba uma lista contendo apenas as categorias cadastradas no banco, sem repetir nenhuma.

Exercício 5: Limpeza e Remoção (DROP)
Para finalizar a manutenção do sistema:
Remova a coluna estoque da tabela livros.
Escreva os comandos para apagar a tabela livros e, em seguida, o banco de dados livraria_db.