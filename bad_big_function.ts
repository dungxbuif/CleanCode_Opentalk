function processOrder(order) {
   if (order.status === 'pending') {
      if (order.items.length > 0) {
         let totalPrice = 0;
         let itemCount = 0;
         for (let i = 0; i < order.items.length; i++) {
            const item = order.items[i];
            if (item.quantity > 0) {
               const itemPrice = item.price * item.quantity;
               totalPrice += itemPrice;
               itemCount += item.quantity;
            }
         }
         if (totalPrice > 0) {
            if (order.paymentMethod === 'creditCard') {
               if (
                  order.creditCardInfo &&
                  order.creditCardInfo.cardNumber &&
                  order.creditCardInfo.expiryDate &&
                  order.creditCardInfo.cvv
               ) {
                  processPayment(totalPrice, order.creditCardInfo);
                  order.status = 'completed';
                  order.completedAt = new Date();
                  order.itemCount = itemCount;
                  return true;
               } else {
                  console.error('Missing credit card information!');
                  return false;
               }
            } else if (order.paymentMethod === 'paypal') {
               if (order.paypalInfo && order.paypalInfo.email) {
                  processPayment(totalPrice, order.paypalInfo);
                  order.status = 'completed';
                  order.completedAt = new Date();
                  order.itemCount = itemCount;
                  return true;
               } else {
                  console.error('Missing PayPal information!');
                  return false;
               }
            } else {
               console.error('Invalid payment method!');
               return false;
            }
         } else {
            console.error('Total price is 0!');
            return false;
         }
      } else {
         console.error('No items in the order!');
         return false;
      }
   } else {
      console.error('Order is not pending!');
      return false;
   }
}
