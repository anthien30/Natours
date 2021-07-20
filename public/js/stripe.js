import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51JF0wbDFIKxihy6SFwgHYyIDlVTjTqDWnnjqcF0MsIYgRXSCGfMF65hNmtaNzyxv0wrMvZWyrdiD1r31jzX461Dx00oQzllrje'
);

export const bookTour = async (tourId) => {
  try {
    // get checkout session from endpoint/api
    const session = await axios(
      `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`
    );

    // create checkout form + carge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
