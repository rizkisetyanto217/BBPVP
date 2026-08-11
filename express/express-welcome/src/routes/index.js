const express = require('express');
const router = express.Router();
const movieRoutes = require('./movies');

router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

router.use('/movies', movieRoutes);

module.exports = router;