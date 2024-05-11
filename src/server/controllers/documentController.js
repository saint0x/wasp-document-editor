// server/controllers/documentController.js

const Document = require('../models/Document');

// Get all documents
const getAllDocuments = async (req, res) => {
  try {
    const documents = await Document.find();
    res.json(documents);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching documents' });
  }
};

// Create a new document
const createDocument = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newDocument = await Document.create({ title, content });
    res.status(201).json(newDocument);
  } catch (error) {
    res.status(500).json({ message: 'Error creating document' });
  }
};

module.exports = { getAllDocuments, createDocument };
