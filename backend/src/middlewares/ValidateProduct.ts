import { Request, Response, NextFunction } from 'express';
import { isFutureDate } from '../validators/isFutureDate';


const validateProduct = (req: Request, res: Response, next: NextFunction) => {
    console.log('Passou aqui')

    const { expirationDate } = req.body;

  if (!expirationDate || isNaN(Date.parse(expirationDate))) {
    return res.status(400).json({ message: 'Data de validade inválida' });
  }

  if (!isFutureDate(expirationDate)) {
    return res
      .status(400)
      .json({ message: 'A data de validade deve ser uma data futura' });
  }
  next();
};

export default validateProduct;