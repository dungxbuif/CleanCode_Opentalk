function processOrder(order) {
   if (!isOrderValid(order)) {
      return false;
   }

   const totalPrice = calculateTotalPrice(order);
   if (totalPrice <= 0) {
      console.error('Total price is 0!');
      return false;
   }

   if (!isPaymentMethodValid(order)) {
      return false;
   }

   const paymentInfo = getPaymentInfo(order);
   if (!paymentInfo) {
      return false;
   }

   processPayment(totalPrice, paymentInfo);

   updateOrderStatus(order);
   return true;
}

function isOrderValid(order) {
   if (order.status !== 'pending') {
      console.error('Order is not pending!');
      return false;
   }

   if (order.items.length === 0) {
      console.error('No items in the order!');
      return false;
   }

   return true;
}

function calculateTotalPrice(order) {
   let totalPrice = 0;
   for (const item of order.items) {
      if (item.quantity > 0) {
         totalPrice += item.price * item.quantity;
      }
   }
   return totalPrice;
}

function isPaymentMethodValid(order) {
   if (
      order.paymentMethod !== 'creditCard' &&
      order.paymentMethod !== 'paypal'
   ) {
      console.error('Invalid payment method!');
      return false;
   }
   return true;
}

function getPaymentInfo(order) {
   let paymentInfo = null;
   if (order.paymentMethod === 'creditCard' && order.creditCardInfo) {
      const { cardNumber, expiryDate, cvv } = order.creditCardInfo;
      if (cardNumber && expiryDate && cvv) {
         paymentInfo = {
            cardNumber: cardNumber,
            expiryDate: expiryDate,
            cvv: cvv,
         };
      } else {
         console.error('Missing credit card information!');
      }
   } else if (order.paymentMethod === 'paypal' && order.paypalInfo) {
      const { email } = order.paypalInfo;
      if (email) {
         paymentInfo = {
            email: email,
         };
      } else {
         console.error('Missing PayPal information!');
      }
   } else {
      console.error('Invalid payment method!');
   }

   return paymentInfo;
}

// function getPaymentInfo(order) {
//    let paymentInfo = null;
//    if (isCreditCardInfo(order)) {
//       if (!isValidCreditCardInfo(cardNumber, expiryDate, cvv))
//          throw new Error('Missing credit card information!');

//       paymentInfo = createCreditCardPaymentInfo(cardNumber, expiryDate, cvv);
//    }

//    if (isPaypalInfo(order)) {
//       const { email } = order.paypalInfo;
//       if (!isValidPaypalInfo(email))
//          throw new Error('Missing PayPal information!');

//       paymentInfo = createPaypalPaymentInfo(email);
//    } else {
//       console.error('Invalid payment method!');
//    }

//    return paymentInfo;
// }
function isCreditCardInfo(order) {
   return order.paymentMethod === 'creditCard' && order.creditCardInfo;
}

function isPaypalInfo(order) {
   return order.paymentMethod === 'paypal' && order.paypalInfo;
}

function isValidCreditCardInfo(cardNumber, expiryDate, cvv) {
   return cardNumber && expiryDate && cvv;
}

function createCreditCardPaymentInfo(cardNumber, expiryDate, cvv) {
   return {
      cardNumber: cardNumber,
      expiryDate: expiryDate,
      cvv: cvv,
   };
}

function isValidPaypalInfo(email) {
   return email;
}

function createPaypalPaymentInfo(email) {
   return {
      email: email,
   };
}

// Declare and initiate at the beginning
let firstName = '';
let lastName = '';
let price = 0;
let discount = 0;
let fullPrice = 0;
const myArray = [];
const myObject = {};
