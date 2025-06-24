const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.index = async (req, res) => {
    const produtos = await prisma.produto.findMany();
    res.render('products', { produtos, is_active_navbar: 'products' });
}

exports.create = async (req, res) => {
    // const { nome, unidade, custo, estoque } = req.body;
    // await prisma.mercadoria.create({ data: { nome, unidade, custo: parseFloat(custo), estoque: parseFloat(estoque) } });
    // res.redirect('/home/merchandise');
}

exports.update = async (req, res) => {
    // const { id } = req.params;
    // const { nome, unidade, custo, estoque } = req.body;
    // await prisma.mercadoria.update({ where: { id: parseInt(id) }, data: { nome, unidade, custo: parseFloat(custo), estoque: parseFloat(estoque) } });
    // res.redirect('/home/merchandise');
}

exports.delete = async (req, res) => {
    // const { id } = req.params;
    // await prisma.mercadoria.delete({ where: { id: parseInt(id) } });
    // res.redirect('/home/merchandise');
}
