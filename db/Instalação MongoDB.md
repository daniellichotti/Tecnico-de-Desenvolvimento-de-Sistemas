### Importe a chave pública do MongoDB:
```
sudo apt-get install gnupg curl
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg --dearmor --yes
```

### Adicione o repositório oficial do MongoDB:
```
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
```

### Atualize o gerenciador de pacotes e instale o MongoDB:
```
sudo apt-get update
sudo apt-get install -y mongodb-org
```

### Inicialização do Serviço no WSL
```
sudo systemctl start mongod
sudo systemctl status mongod
```

### Testando a Conexão
mongosh
test> 
```
// 1. Alternar para um novo banco
use aula_db

// 2. Inserir seu primeiro documento
db.usuarios.insertOne({ nome: "Seu Nome", criadoEm: new Date() })

// 3. Consultar o dado criado
db.usuarios.find()
```

### 1. Criar e Selecionar o Banco (use)
use loja_db
### 2. CREATE (Inserção de Dados)
Insere produtos na coleção produtos.

// Inserir um único documento
db.produtos.insertOne({
  nome: "Teclado Mecânico",
  categoria: "Periféricos",
  preco: 250.00,
  estoque: 15,
  tags: ["rgb", "gamer"]
})

// Inserir múltiplos documentos simultaneamente
db.produtos.insertMany([
  {
    nome: "Mouse Sem Fio",
    categoria: "Periféricos",
    preco: 120.00,
    estoque: 30,
    tags: ["produtividade"]
  },
  {
    nome: "Monitor 27 Polegadas",
    categoria: "Monitores",
    preco: 1300.00,
    estoque: 5,
    tags: ["4k", "gamer"]
  },
  {
    nome: "Cabo HDMI 2m",
    categoria: "Acessórios",
    preco: 35.00,
    estoque: 50,
    tags: ["cabos"]
  }
])

### 3. READ (Consultas e Filtros)
Exemplos de buscas simples, condicionais e por filtros específicos.

// A. Listar todos os produtos
db.produtos.find()

// B. Filtrar por categoria exata
db.produtos.find({ categoria: "Periféricos" })

// C. Filtrar com comparadores: preco maior que ($gt) 200
db.produtos.find({ preco: { $gt: 200 } })

// D. Buscar por um elemento dentro de um Array
db.produtos.find({ tags: "gamer" })

// E. Trazer apenas 'nome' e 'preco', ocultando o '_id'
db.produtos.find({}, { nome: 1, preco: 1, _id: 0 })
### 4. UPDATE (Atualização de Registros)
Modificação de campos existentes ou inclusão de novos dados.

// A. Atualizar o preço do 'Mouse Sem Fio' usando $set
db.produtos.updateOne(
  { nome: "Mouse Sem Fio" },
  { $set: { preco: 99.90 } }
)

// B. Diminuir o estoque do 'Monitor 27 Polegadas' em 1 unidade usando $inc
db.produtos.updateOne(
  { nome: "Monitor 27 Polegadas" },
  { $inc: { estoque: -1 } }
)

// C. Adicionar uma nova tag ao 'Teclado Mecânico' usando $push
db.produtos.updateOne(
  { nome: "Teclado Mecânico" },
  { $push: { tags: "promocao" } }
)
### 5. DELETE (Remoção de Dados)
Exclusão pontual ou em lote.

// A. Deletar apenas um produto pelo nome
db.produtos.deleteOne({ nome: "Cabo HDMI 2m" })

// B. Deletar todos os produtos que estão sem estoque ($eq: 0)
db.produtos.deleteMany({ estoque: { $lte: 0 } })
### 6. Verificação Final
Verifique como a coleção ficou após as alterações e remoções:

db.produtos.find().pretty()