import React from 'react';
import axios from 'axios';

function MyComponent() {
  const handlePayment = async () => {
    try {
      const orderResponse = await axios.post('http://localhost:5000/createOrder');
      const { amount, id: order_id, currency } = orderResponse.data;

      const options = {
        key: 'rzp_test_cmG33Jntv9ZrCE',
        amount: amount.toString(),
        currency: currency,
        name: 'Your Company Name',
        description: 'Test Transaction',
        order_id: order_id,
        handler: async function (response) {
          const data = {
            orderCreationId: order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };

          const result = await axios.post('http://localhost:5000/paymentSuccess', data);
          alert(result.data.msg);
        },
        prefill: {
          name: 'Your Name',
          email: 'your.email@example.com',
          contact: '9999999999',
        },
        notes: {
          address: 'Your Address',
        },
        theme: {
          color: '#61dafb',
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handlePayment}>Pay Now</button>
      </header>
    </div>
  );
}

export default MyComponent;