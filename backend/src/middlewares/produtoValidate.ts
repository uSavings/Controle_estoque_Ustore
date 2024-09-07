// src/middlewares/validateProduct.ts
import { Request, Response, NextFunction } from 'express';
import { isFutureDate } from '../validators/isFutureDate';

const produtoValidate = (req: Request, res: Response, next: NextFunction) => {
  const { dtValidade } = req.body;

  if (!dtValidade || isNaN(Date.parse(dtValidade))) {
    return res.status(400).json({ message: 'Data de validade inválida' });
  }

  if (!isFutureDate(dtValidade)) {
    return res
      .status(400)
      .json({ message: 'A data de validade deve ser uma data futura' });
  }

  next();
};

export default produtoValidate;