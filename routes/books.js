import express from 'express'; 
const router = express.Router();

import { BooksRepository } from '../repositories/booksRepository.js';
import { BooksService } from '../services/booksService.js';
import { CreateBookDTO } from '../dtos/createBookDTO.js';
import { UpdateBookDTO } from '../dtos/updateBookDTO.js';

const repository = new BooksRepository();
const service = new BooksService(repository);

// Find one
router.get('/:id', (req, res) => {
  const id = req.params['id'];
  return res.json(service.listOne(id));
});

// Find all
router.get('/', (_, res) => {
  return res.json(service.list());
});

// Create
router.post('/', (req, res) => {
  const book = req.body;
  const invalidProperties = CreateBookDTO.validate(book);
  if (invalidProperties.length) {
    return res.status(400).json({
      message: 'The book you are triyng to create is invalid',
      invalidProperties,
    });
  } else {
    return res.status(201).json({
      ...service.create(book),
    });
  }
});

// Delete
router.delete('/:id', (req, res) => {
  const id = req.params['id'];
  try {
    service.delete(id);
    return res.status(204).send();
  } catch (code) {
    return res.status(code).send();
  }
});

// Update
router.patch('/:id', (req, res) => {
  const id = req.params['id'];
  const book = req.body;
  const hasKeys = UpdateBookDTO.validate(book);

  if (hasKeys.length) {
    service.update(id, book);
    return res.status(204).send();
  } else {
    return res.status(400).json({
      message: 'You must send valid properties to be updated',
    });
  }
});

export default router;
