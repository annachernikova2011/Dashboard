const express = require('express');
const { Order, User } = require('../db/models');

const router = express.Router();

router.get('/orders', async (req, res) => {
  const allOrders = await Order.findAll();
  res.json(allOrders);
});
router.get('/users', async (req, res) => {
  const allUsers = await User.findAll();
  res.json(allUsers);
});
module.exports = router;
