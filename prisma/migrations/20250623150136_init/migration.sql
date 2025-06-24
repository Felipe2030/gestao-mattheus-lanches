-- CreateTable
CREATE TABLE "Mercadoria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "unidade" TEXT NOT NULL,
    "custo" REAL NOT NULL,
    "estoque" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "precoVenda" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "ProdutoIngrediente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "produtoId" INTEGER NOT NULL,
    "mercadoriaId" INTEGER NOT NULL,
    "quantidade" REAL NOT NULL,
    CONSTRAINT "ProdutoIngrediente_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProdutoIngrediente_mercadoriaId_fkey" FOREIGN KEY ("mercadoriaId") REFERENCES "Mercadoria" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Compra" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "mercadoriaId" INTEGER NOT NULL,
    "quantidade" REAL NOT NULL,
    "custoTotal" REAL NOT NULL,
    CONSTRAINT "Compra_mercadoriaId_fkey" FOREIGN KEY ("mercadoriaId") REFERENCES "Mercadoria" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Venda" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "produtoId" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "preco" REAL NOT NULL,
    CONSTRAINT "Venda_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
