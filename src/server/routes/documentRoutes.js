// server/routes/documentRoutes.js

const express = require('express');
const router = express.Router();
const { getAllDocuments, createDocument } = require('../controllers/documentController');

// Get all documents
router.get('/documents', getAllDocuments);

// Create a new document
router.post('/documents', createDocument);

module.exports = router;
