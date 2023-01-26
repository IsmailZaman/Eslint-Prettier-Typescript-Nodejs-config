import express, { NextFunction } from 'express';
import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
const router = express.Router();
const db = [];

router.get(
  '/api/signup',
  [
    body('email').isEmail().trim().withMessage('The email is invalid'),
    body('password').isLength({ min: 5 }).withMessage('The password must be atleast 5 characters long'),
  ],
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const validationErrors = validationResult(req);
      if (!validationErrors.isEmpty()) {
        console.log('validation error');
      }

      const { email, password } = req.body;
      db.push({ email, password });
      res.send('Your account was created');
    } catch (e) {
      next(e);
    }
  }
);
