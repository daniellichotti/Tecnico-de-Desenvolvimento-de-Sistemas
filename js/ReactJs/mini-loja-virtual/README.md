# Projeto Prático: Mini Loja Virtual / Cardápio Interativo

bibliotecas:
spinner: https://www.davidhu.io/react-spinners/
icons: https://phosphoricons.com/

## Disciplina: Desenvolvimento Front-end com React
Requisitos Técnicos: Componentes, props e useState
Entrega: Código-fonte do projeto (repositório no GitHub ou arquivo .zip)

## Objetivo
Desenvolver uma aplicação em React simulando o carrinho de compras de um e-commerce ou cardápio interativo. O objetivo principal é consolidar os conceitos de elevação de estado (lifting state up), passagem de dados por props e atualização de estado com useState.

## Restrições Obrigatórias
Não utilize useEffect, Context API, Redux ou bibliotecas de navegação (React Router).

Não utilize requisições HTTP (fetch/axios) ou APIs externas.

Toda a comunicação entre componentes deve ser feita exclusivamente via props (dados e funções de callback).

## Requisitos Funcionais
1. Exibição de Produtos
Exibir a lista de produtos disponíveis em tela a partir do array de dados fornecido abaixo.

Cada card de produto deve exibir: nome, preço formatado (ex: R$ 25,00), categoria e um botão "Adicionar ao Carrinho".

2. Filtro por Categoria
Criar botões no topo da lista para filtrar produtos por categoria (ex: "Todos", "Lanches", "Bebidas", "Acompanhamentos").

Ao clicar em uma categoria, a tela deve exibir apenas os produtos correspondentes.

3. Contador no Header
O componente de cabeçalho (Header) deve exibir a quantidade total de itens atualmente presentes no carrinho.

4. Gestão do Carrinho
Ao clicar em "Adicionar ao Carrinho", o item deve ser incluído na lista do carrinho.

O componente do carrinho deve exibir a lista de itens selecionados.

Cada item dentro do carrinho deve conter um botão "Remover" que exclui o item da lista.

Exibir o Valor Total da Compra em R$, calculado dinamicamente com base nos itens no carrinho.

## Estrutura de Componentes Sugerida
A aplicação deve ser dividida em pelo menos 5 componentes:
```
App (Gerencia os estados do carrinho e do filtro ativo)
├── Header (Recebe o número total de itens no carrinho)
├── FiltroCategoria (Recebe a categoria selecionada e a função de alterar filtro)
├── ListaProdutos (Recebe a lista filtrada e a função de adicionar ao carrinho)
│   └── CardProduto (Recebe o produto individual e lida com o clique)
└── Carrinho (Recebe a lista do carrinho, a função de remover e exibe o total)
```

## Dados Iniciais (mock)
Copie a constante abaixo e coloque-a no topo do seu arquivo App.js ou em um arquivo separado de dados:
```
const PRODUTOS = [
  { id: 1, nome: "Hambúrguer Artesanal", preco: 28.0, categoria: "lanches" },
  { id: 2, nome: "X-Salada", preco: 22.0, categoria: "lanches" },
  { id: 3, nome: "Batata Frita Rústica", preco: 14.0, categoria: "acompanhamentos" },
  { id: 4, nome: "Anéis de Cebola", preco: 16.0, categoria: "acompanhamentos" },
  { id: 5, nome: "Refrigerante Lata", preco: 6.0, categoria: "bebidas" },
  { id: 6, nome: "Suco Natural de Laranja", preco: 9.0, categoria: "bebidas" }
];
```

## Critérios de Avaliação

| Critério | Descrição |
| -------- | -------- |
| Elevação de Estado | O estado do carrinho está localizado no componente pai correto (App)? |
| Uso de Props | Funções de callback para adicionar e remover itens são passadas corretamente via props? |
| Renderização de Listas | O método .map() é utilizado corretamente com a prop key em elementos repetidos? | 
| Componentização | O código foi bem dividido em componentes menores e reutilizáveis? |
| Fidelidade aos Requisitos | Todas as funcionalidades (filtro, adição, remoção e cálculo de total) funcionam sem erros no console? |

## Desafios Bônus (Opcional)
Se você terminar os requisitos principais antes do tempo:

1. Botão Limpar Carrinho: Adicione um botão para esvaziar todos os itens do carrinho de uma só vez.

2. Cupom de Desconto: Crie um campo de input com um botão. Se o usuário digitar o código "DESCONTO10", aplique 10% de desconto no total da compra.

3. Contador de Quantidade: Modifique o carrinho para que, em vez de duplicar o produto na lista, ele incremente a quantidade do item existente.