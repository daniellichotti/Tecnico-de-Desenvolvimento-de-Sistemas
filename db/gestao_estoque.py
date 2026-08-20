import mysql.connector
from mysql.connector import Error

def conexaoDb():
    db_config = {
        'host': 'localhost',
        'database': 'gestao_estoque',
        'user': 'root',
        'password': '1234'
    }

    conexao = mysql.connector.connect(**db_config)
    cursor = conexao.cursor()
    return conexao, cursor


def listaProdutos(cursor):
    cursor.execute('SELECT * FROM produtos;')

    registros = cursor.fetchall()

    print("------------------Produtos--------------------")
    for item in registros:
        print(f"Produto {item[0]}: {item[1]}")
        print(f"Quantidade: {item[2]}")
        print(f"Preço: {item[3]}")
        print("------------------------------------------")

def cadastroProdutos(cursor):
    nomeDoProduto = input('Entre com o nome do produto: ')
    quantidade = int(input('Entre com a quantidade do produto: '))
    preco = float(input('Entre com o preço do produto: '))


    sql = "INSERT INTO produtos (nome, quantidade, preco) VALUES (%s, %s, %s);"
    cursor.execute(sql, (nomeDoProduto, quantidade, preco))
    conexao.commit()

    print("Produto adicionado com sucesso!")

conexao, cursor = conexaoDb()

while True:
    print("Entre com a opção desejada:")
    print("1. Cadastrar produto.")
    print("2. Listar produtos.")
    print("0. Sair.")
    opt = int(input())

    match opt:
        case 1:
            cadastroProdutos(cursor)
        case 2:
            listaProdutos(cursor)
        case 0:
            print("Saindo...")
            cursor.close()
            conexao.close()
            break
        case _:
            print("Opção inválida! Escolha novamente")

    
