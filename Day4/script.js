class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
      this.shoppingCart = new ShoppingCart();
    }
  
    authenticate(username, password) {
      return this.username === username && this.password === password;
    }
  }
  
  class LoginSystem {
    constructor() {
      this.users = [];
      this.products = [
        new Product('Shirt', 25.99, 1),
        new Product('Pants', 39.99, 2),
        new Product('Shoes', 59.99, 3),
        new Product('Hat', 19.99, 4)
      ];
    }
  
    register(username, password) {
      const user = new User(username, password);
      this.users.push(user);
      console.log(`User '${username}' successfully registered.`);
    }
  
    login(username, password) {
      const user = this.findUser(username);
      if (user && user.authenticate(username, password)) {
        console.log(`User '${username}' successfully logged in.`);
        user.shoppingCart.startShopping(username, this.products); // Pass the products as a parameter
      } else {
        console.log('Invalid username or password.');
      }
    }
  
    findUser(username) {
      return this.users.find(user => user.username === username);
    }
  }
  
  class Product {
    constructor(name, price, id) {
      this.name = name;
      this.price = price;
      this.id = id;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(product) {
      this.items.push(product);
      console.log(`Added ${product.name} to the shopping cart.`);
    }
  
    removeItemById(id) {
      const index = this.items.findIndex(item => item.id === id);
      if (index !== -1) {
        const removedItem = this.items.splice(index, 1)[0];
        console.log(`Removed ${removedItem.name} from the shopping cart.`);
      } else {
        console.log('Item not found in the shopping cart.');
      }
    }
  
    getTotalPrice() {
      let total = 0;
      for (const item of this.items) {
        total += item.price;
      }
      return total;
    }
  
    checkout(username) {
      const totalPrice = this.getTotalPrice();
      console.log(`Total price: $${totalPrice.toFixed(2)}`);
      console.log(`Thank you ${username} for shopping with us!`);
      this.items = [];
    }
  
    startShopping(username, products) {
      console.log('Available products:');
      for (const product of products) {
        console.log(`ID: ${product.id}, Name: ${product.name}, Price: $${product.price.toFixed(2)}`);
      }
      console.log('-------------------------------------');
  
      // Example: Add items to the shopping cart based on the user's selection
      if (username === 'pavi') {
        this.addItem(products[0]);
        this.addItem(products[1]);
        console.log('Current items in the shopping cart:', this.items);
        this.removeItemById(2);
        console.log('Current items in the shopping cart:', this.items);
        this.checkout(username);
      } else if (username === 'James') {
        this.addItem(products[2]);
        this.addItem(products[3]);
        console.log('Current items in the shopping cart:', this.items);
        this.removeItemById(3);
        console.log('Current items in the shopping cart:', this.items);
        this.checkout(username);
      }
    }
  }
  
  // Example usage
  const loginSystem = new LoginSystem();
  
  loginSystem.register('pavi', 'hello');
  loginSystem.register('James', 'hello');
  
  loginSystem.login('James', 'hello');
  loginSystem.login('pavi', 'hello');
  