from pymongo import MongoClient

#Criando a conexão com o MongoDB
client = MongoClient("mongodb://localhost:27017")

# Selecionando o banco e a collection
db = client["anime_db"]
colecao = db["personagens"]

def listarPersonagens():
    for personagem in colecao.find():
        print(personagem)

def cadastrarPersonagem():
    nome_novo_personagem = input("Entre com o nome do personagem: ")

    novo_personagem = {
        "nome": nome_novo_personagem,
    }

    while True:
        op_novo_personagem = int(input("Deseja adicionar mais uma característica (1-Sim, 0-Não)?"))
        if op_novo_personagem == 1:
            novo_campo = input("Qual característica você deseja adicionar?")
            chave = novo_campo
            novo_campo = input("Qual valor dessa característica você deseja adicionar?")
            valor = novo_campo
            novo_personagem[chave] = valor
        else:
            break

    colecao.insert_one(novo_personagem)
    print(novo_personagem, "adicionado com sucesso!")

print("Bem vindo ao Anime DB!!!")
while True:
    print("Escolha: ")
    print("1. Para cadastrar o personagen")
    print("2. Para listar os personagens")
    print("3. Para atualizar o personagen")
    print("4. Para deletar o personagen")
    print("0. Para sair")
    op = int(input())

    match op:
        case 1:
            #Cadastra o personagem
            cadastrarPersonagem()
        case 2:
            #Lista o personagem
            listarPersonagens()
        case 3:
            #Atualiza o personagem
            print("Atualiza")
        case 4:
            #Deleta o personagem
            print("Deleta")
        case 0:
            print("Até mais!!!")
            break
        case _:
            print("Opção inválida! Tente novamente.")