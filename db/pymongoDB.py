from pymongo import MongoClient

#CRIANDO A CONTEXÃO COM O SERVIDOR
client = MongoClient("mongodb://localhost:27017")

# SELECIONAR OU CRIAR O BANCO DE DADOS E A COLEÇÃO
db = client["loja_db"]
colecao = db["produtos"]

#listar produtos
def listaProdutos():
    for produto in colecao.find():
        print(f"Nome: {produto['nome']}, Preço (R$): {produto['preco']}")

#Lista 1 produto
def listarUmProduto(umProduto):
    try:
        produto = colecao.find_one({ 'nome': umProduto })
        print(produto['estoque'])
    except TypeError:
        print("deu ruim")



#Adicionar produto
def adicionaProduto():
    nome_novo_produto = input("Entre com o nome do produto")
    novo_produto = {
        'nome': nome_novo_produto, 
        'categoria': 'PCs', 
        'preco': 5000, 
        'estoque': 1, 
        'tags': ['note', 'gamer'], 
        'preco_promocao': 3999.9
        }

    colecao.insert_one(novo_produto)
    listaProdutos()

#UPDATE DE UM ITEM
def atualizarEstoqueItem(item):
    listarUmProduto(item)
    colecao.update_one({ "nome": item }, { "$set": {"estoque": 9} })
    listarUmProduto(item)

def deletarItem(item):
    colecao.delete_one({ "nome": item })

listarUmProduto("Fone")

deletarItem("Fone")

listarUmProduto("Fone")
