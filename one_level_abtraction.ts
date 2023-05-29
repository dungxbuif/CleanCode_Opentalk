function parseBetterJSAlternative(code) {
   const REGEXES = [
      // ...
   ];

   const statements = code.split(' ');
   const tokens = [];
   REGEXES.forEach((REGEX) => {
      statements.forEach((statement) => {
         // ...
      });
   });

   const ast = [];
   tokens.forEach((token) => {
      // lex...
   });

   ast.forEach((node) => {
      // parse...
   });
}

//Good
function parseBetterJSAlternative(code) {
   const tokens = tokenize(code);
   const syntaxTree = parse(tokens);
   syntaxTree.forEach((node) => {
      // parse...
   });
}

function tokenize(code) {
   const REGEXES = [
      // ...
   ];

   const statements = code.split(' ');
   const tokens = [];
   REGEXES.forEach((REGEX) => {
      statements.forEach((statement) => {
         tokens.push(/* ... */);
      });
   });

   return tokens;
}

function parse(tokens) {
   const syntaxTree = [];
   tokens.forEach((token) => {
      syntaxTree.push(/* ... */);
   });

   return syntaxTree;
}

function processOrder(order) {
   if (!order.isValid) {
      throw new Error('Invalid order. Cannot process.');
   }
   console.log('Processing order:');
   let totalPrice = 0;
   for (const item of order) {
      totalPrice += calculateItemPrice(item);
   }
   console.log('Order processed successfully.');
   return totalPrice;
}

function calculateItemPrice(item) {
   if (item.quantity <= 0) {
      return 0;
   }
   return item.price * item.quantity;
}
