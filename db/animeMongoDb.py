from pymongo import MongoClient

#Criando a conexão com o MongoDB
client = MongoClient("mongodb://localhost:27017")

# Selecionando o banco e a collection
db = client["anime_db"]
colecao = db["personagens"]

def listarPersonagens():
    print("-------------------------------------")
    for personagem in colecao.find():
        print(personagem)
        for i in range(1, len(list(personagem.keys()))):
            print(f"{list(personagem.keys())[i]}: {list(personagem.values())[i]}")
        print("-------------------------------------")

def listarPersonagem():
    nome_do_personagem = input("Qual nome do personagem que voçê quer ver? ")
    if not colecao.find_one({ 'nome': nome_do_personagem }):
        print("Personagem não encontrado!")
        return None
    else: 
        personagem = colecao.find_one({ 'nome': nome_do_personagem })
        for i in range(1, len(list(personagem.keys()))):
            print(f"{list(personagem.keys())[i]}: {list(personagem.values())[i]}")
        print("-------------------------------------")
        return nome_do_personagem

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

def deletarPersonagem():
    listarPersonagens()
    personagem_para_deletar = input("Qual o nome do personagem que você deseja deletar?")

    try:
        if not colecao.find_one({ 'nome': personagem_para_deletar }):
                print("Personagem não encontrado!")
        else: 
            colecao.delete_one({ "nome":  personagem_para_deletar})
            print("Deletado com sucesso!")
    except:
        print("Erro ao deletar!")



print("Bem vindo ao Anime DB!!!")
while True:
    print("\n")
    print("=========================================================")
    print("Escolha: ")
    print("1. Para cadastrar o personagen")
    print("2. Para listar os personagens")
    print("3. Para listar um personagem")
    print("4. Para atualizar o personagen")
    print("5. Para deletar o personagen")
    print("0. Para sair")
    op = int(input())
    print("\n")

    match op:
        case 1:
            #Cadastra o personagem
            cadastrarPersonagem()
        case 2:
            #Lista o personagem
            listarPersonagens()
        case 3:
            #Lista o personagem
            listarPersonagem()
        case 4:
            #Atualiza o personagem
            print("Atualiza")
        case 5:
            #Deleta o personagem
            deletarPersonagem()
        case 0:
            print("Até mais!!!")
            break
        case _:
            print("Opção inválida! Tente novamente.")