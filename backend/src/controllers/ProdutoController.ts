import { Request, Response } from 'express';
import { AppDataSource } from '../database';
import { Produto } from '../entities/Produto';


export const getProduto = async (req: Request, res: Response) => {
    try{
        const produtos = await Produto.find();
        res.json(produtos);
    } catch(error){
        res.status(500).json({message: 'Erro ao buscar produtos', error});
    }
};

export const addProduto = async (req: Request, res: Response) => {
    const { nome, dtValidade, qtEstoque } = req.body;
  
    const produto = new Produto();
    produto.nome = nome;
    produto.dtValidade = new Date(dtValidade);
    produto.qtEstoque = qtEstoque;
  
    try {
      await produto.save();
      res.status(201).json(produto);
    } catch (error) {
      res.status(500).json({ message: 'Error adding product', error });
    }
  };

export const updateProduto = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nome, dtValidade, qtEstoque} = req.body;

    try{
        const produto = await Produto.findOneBy({ id: parseInt(id) });

        if (!produto) return res.status(404).json({ message: 'Produto não encontrado' });

        produto.nome = nome;
        produto.dtValidade = new Date(dtValidade);
        produto.qtEstoque = qtEstoque;
        
        
        await produto.save();
        res.json(produto);
      } catch (error) {
        res.status(500).json({ message: 'Não foi possível atualizar o produto', error });
      }
    };

    export const deleteProduto = async (req: Request, res: Response) => {
        const { id } = req.params;
      
        try {
          const produto = await Produto.findOneBy({ id: parseInt(id) });
      
          if (!produto) return res.status(404).json({ message: 'Product not found' });
      
          await produto.remove();
          res.json({ message: 'Produto deletado com sucesso' });
        } catch (error) {
          res.status(500).json({ message: 'Erro ao deletar produto', error });
        }
      };