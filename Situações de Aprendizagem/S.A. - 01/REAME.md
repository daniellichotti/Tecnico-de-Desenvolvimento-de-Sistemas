# TechStock - Sistema de Controle de Inventário
## Contexto da Situação-Problema
A startup "TechSolutions" está crescendo rapidamente e o departamento de suporte perdeu o controle dos equipamentos (notebooks, monitores, mouses) emprestados aos funcionários. Atualmente, o controle é feito em planilhas que frequentemente travam, ficam desatualizadas ou são apagadas por engano. A diretoria solicitou à equipe de desenvolvimento a criação do TechStock, um sistema web completo para catalogar e listar os ativos da empresa de forma segura, escalável e de fácil navegação.

## Especificações Técnicas e Requisitos
1. Infraestrutura e Banco de Dados (Docker)

O banco de dados (PostgreSQL ou MySQL) deve obrigatoriamente rodar em um contêiner utilizando Docker.

Devem guardar os comandos e queries de criação do banco em um arquivo .md

2. Back-end (API RESTful)

Rotas e Regras de Negócio: A API deve conter um CRUD completo (Create, Read, Update, Delete) para a entidade Equipamentos. Os campos mínimos são: ID, nome, categoria, número de série, status (disponível/emprestado/manutenção) e data de aquisição.

Conexão: Implementar a conexão com o banco de dados hospedado no Docker.

Paginação na API: A rota de listagem (Read) não pode retornar todos os registros de uma vez. Ela deve aceitar parâmetros de query (ex: ?page=1&limit=10), calcular o offset no banco de dados e devolver apenas a fatia solicitada juntamente com metadados (total de itens e total de páginas).

3. Front-end (SPA - Single Page Application)

Interface: Criar um painel administrativo (dashboard) simples e responsivo para cadastrar, editar, excluir e visualizar os equipamentos.

Hooks: O gerenciamento de estado e ciclo de vida deve ser feito utilizando Hooks (como useState e useEffect em React).

Paginação na Interface: A tabela ou grade de listagem de equipamentos deve incluir controles de paginação (botões "Anterior", "Próximo" e numeração das páginas). Ao interagir com esses controles, um Hook deve atualizar o estado da página atual, disparando uma nova requisição ao Back-end de forma assíncrona.