import mysql.connector
from mysql.connector import Error

db_config = {
    'host': 'localhost',
    'database': 'loja_db',
    'user': 'root',
    'password': '1234'
}

conexao = mysql.connector.connect(**db_config)

cursor = conexao.cursor()

def cadastrarCliente():
    id_clientes = int(input('Entre com o id do cliente: '))
    nome = input('Entre com o nome do cliente: ')


    sql = "INSERT INTO clientes (id_clientes, nome) VALUES (%s, %s);"
    cursor.execute(sql, (id_clientes, nome))
    conexao.commit()


def lerClientes():
    cursor.execute('SELECT * FROM clientes;')



registros = cursor.fetchall()

for item in registros:
    print(item)

cursor.close()
conexao.close()
