const express = require('express');

const {
  getCheckoutSession,
  getAllBooking,
  createBooking,
  updateBooking,
  getBooking,
  deleteBooking,
} = require('../controllers/bookingControllers');
const { protect, restrictTo } = require('../controllers/authControllers');

const router = express.Router();

router.use(protect);

router.get('/checkout-session/:tourID', getCheckoutSession);

router.use(restrictTo('admin', 'lead-guide'));

router.route('/').get(getAllBooking).post(createBooking);
router.route('/:id').get(getBooking).patch(updateBooking).delete(deleteBooking);

module.exports = router;
