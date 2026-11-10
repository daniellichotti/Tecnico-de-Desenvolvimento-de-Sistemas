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

## Etapas de Desenvolvimento (Milestones)
Fase 1: Modelagem e Infraestrutura

Levantamento e definição da tabela de equipamentos no banco de dados.

Setup do projeto Back-end e teste da conexão com o banco conteinerizado.

Fase 2: Construção da API e Integração com DB

Criação da estrutura de pastas do Back-end (Controllers, Models, Routes).

Desenvolvimento das rotas de criação, edição e exclusão.

Implementação da lógica de paginação (limit/offset) na rota de listagem.

Testes e validação de todos os endpoints via Insomnia.

Fase 3: Interface e Conectividade

Setup do projeto Front-end e criação dos componentes base (Formulários, Tabela, Botões de Paginação).

Implementação dos Hooks de estado e efeitos para consumir a API REST.

Tratamento de estados de carregamento (Loading) e erros (Feedbacks visuais) ao transitar entre as páginas da tabela de listagem.

### Entregáveis e Critérios de Avaliação

A avaliação final do projeto ocorrerá por meio da apresentação da aplicação rodando e revisão do código-fonte armazenado em um repositório Git.

Lógica de Back-end: O CRUD obedece às boas práticas de API REST (verbos HTTP corretos, retornos de status HTTP adequados)? A conexão ORM/SQL está segura contra injeções?

Domínio de Hooks: O estado da aplicação no front-end foi gerenciado via Hooks corretamente, evitando vazamento de memória ou renders em loop infinito?

Paginação Real: A paginação está ocorrendo de fato no nível do banco de dados (o payload de resposta da API traz apenas 10 itens por vez, por exemplo) ou os alunos cometeram o erro de trazer o banco todo e fatiar apenas visualmente no Front-end? A interface responde com precisão aos botões numéricos?