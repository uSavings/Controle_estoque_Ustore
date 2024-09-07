import { Router } from 'express';
import {
  getProduto,
  addProduto,
  updateProduto,
  deleteProduto,
} from '../controllers/ProdutoController';
import validateProduct from '../middlewares/produtoValidate';

const router = Router();

router.get('/', getProduto);
router.post('/', validateProduct, addProduto);
router.put('/:id', validateProduct, updateProduto);
router.delete('/:id', deleteProduto);

export default router;