import { Router } from 'express';
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductById,
} from '../controllers/ProductController';
import validateProduct from '../middlewares/ValidateProduct';

const router = Router();

router.get('/', getProducts);
router.post('/', validateProduct, addProduct);
router.get('/:id', getProductById);
router.put('/:id', validateProduct, updateProduct);
router.delete('/:id', deleteProduct);

export default router;