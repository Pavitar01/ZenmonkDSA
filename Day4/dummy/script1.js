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
  


  // Existing code goes here
p=document.getElementById('login');
r=document.getElementById('reg');
list=document.getElementById('list');
function registerUser() {
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    loginSystem.register(username, password);
  r .innerHTML=username+"successfully Registered"  

  }
list.innerHTML=
  function loginUser() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    loginSystem.login(username, password);
  p.innerHTML=username+"successfully login"  

  }
  
  function addItem() {
    const username = document.getElementById('loginUsername').value;
    const product = prompt('Enter the product name:');
    const price = parseFloat(prompt('Enter the product price:'));
    const id = parseInt(prompt('Enter the product ID:'));
    const newProduct = new Product(product, price, id);
    const user = loginSystem.findUser(username);
    if (user) {
      user.shoppingCart.addItem(newProduct);
      displayShoppingCart(user.shoppingCart);
    }
  }
  
  function removeItem() {
    const username = document.getElementById('loginUsername').value;
    const id = parseInt(prompt('Enter the ID of the item to remove:'));
    const user = loginSystem.findUser(username);
    if (user) {
      user.shoppingCart.removeItemById(id);
      displayShoppingCart(user.shoppingCart);
    }
  }
  
  function checkout() {
    const username = document.getElementById('loginUsername').value;
    const user = loginSystem.findUser(username);
    if (user) {
      user.shoppingCart.checkout(username);
      displayShoppingCart(user.shoppingCart);
    }
  }
  
  function displayShoppingCart(cart) {
    const shoppingCartElement = document.getElementById('shoppingCart');
    shoppingCartElement.innerHTML = '';
    for (const item of cart.items) {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      shoppingCartElement.appendChild(listItem);
    }
  }
  
  function startShopping(username, products) {
    const availableProductsElement = document.getElementById('availableProducts');
    availableProductsElement.innerHTML = '<h3>Available Products:</h3>';
  
    for (const product of products) {
      const productInfo = `<p>ID: ${product.id}, Name: ${product.name}, Price: $${product.price.toFixed(2)}</p>`;
      availableProductsElement.innerHTML += productInfo;
    }
  
    availableProductsElement.innerHTML += '<hr>';
  
    // Rest of the code...
  }
  