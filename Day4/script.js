class User {
    constructor(username, password, email) {
      this.username = username;
      this.password = password;
      this.email = email;
      this.shoppingCart = new ShoppingCart();
    }
  
   authenticate(username, password, email) {
  return (
    this.username === username &&
    this.password === password &&
    this.email === email
  );
}
}
  
  
  class LoginSystem {
    constructor() {
      this.users = [];
      this.isUnlocked = false; 
      this.products = [
        new Product('Shirt', 25.99, 1,4.3),
        new Product('Shirt2', 25.99, 2,4.2),
        new Product('Shirt3', 25.99, 3,4.3),
        new Product('Pants', 39.99, 4,3.2),
        new Product('Pants2', 39.99, 6,3.2),
        new Product('Pants3', 39.99, 7,3.2),
        new Product('Shoes', 59.99, 8,4.3),
        new Product('Shoes2', 59.99, 9,4.3),
        new Product('Shoes3', 59.99, 10,1.3),
        new Product('Hat', 19.99,11,5)
      ];
    }


    //items filter fucntion
    filterProductsByName(productName) {
        const filteredProducts = this.products.filter(product =>
          product.name.toLowerCase().includes(productName.toLowerCase())
        );
    
        if (filteredProducts.length > 0) {
          console.log(`Filtered products with name '${productName}':`);
          for (const product of filteredProducts) {
            console.log(`Name: ${product.name}, Rating: ${product.rating}`);
          }
        } else {
          console.log(`No products found with name '${productName}'.`);
        }
      }
      //to unlock the rating filter fucntionality
    unlock() {
        this.isUnlocked = true;
        console.log('You have unlocked the functionality.');
        this.showAvailableProductsByRating();
      }
//code for rating fucntionality
      showAvailableProductsByRating() {
        const sortedProducts = this.products.slice().sort((a, b) => b.rating - a.rating);
        console.log('Available products sorted by rating:');
        for (const product of sortedProducts) {
          console.log(`Name: ${product.name}, Rating: ${product.rating}`);
        }
      }
      // user to register fucntionality
    register(username, password, email) {
        const existingUser = this.users.find(user => user.email === email);
      
        if (existingUser) {
          console.log(`User with email '${email}' already exists.`);
        } else {
          const user = new User(username, password, email);
          this.users.push(user);
          console.log(`User '${username}' successfully registered.`);
        }
      }
      
  //login fucntianality
      login(username, password, email) {
        const user = this.findUser(username);
        if (user && user.authenticate(username, password, email)) {
          console.log(`User '${username}' successfully logged in.`);
          user.shoppingCart.startShopping(username, this.products); // Pass the products as a parameter
        } else {
          console.log('Invalid username, password, or email.');
        }
      }
//check the user is present or not      
    findUser(username) {
      return this.users.find(user => user.username === username);
    }
  }
  

// Product class


  class Product {
    constructor(name, price, id,rating) {
      this.name = name;
      this.price = price;
      this.id = id;
      this.rating=rating;
    }
  }
  
//shooping cart class
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
//items for adding to cart
    addItem(product) {
      this.items.push(product);
      console.log(`Added ${product.name} to the shopping cart.`);
    }
  //removing items from card using id
    removeItemById(id) {
        const removedItems = this.items.filter(item => item.id !== id);
      
        if (removedItems.length > 0) {
          const removedItem = removedItems[0];
          console.log(`Removed ${removedItem.name} from the shopping cart.`);
          this.items = removedItems;
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
        console.log(`ID: ${product.id}, Name: ${product.name}, Price: $${product.price.toFixed(2)} Rating: ${product.rating}`);
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
  

//chatbot
// ChatBot class
class ChatBot {
    constructor() {
      this.userQuery = null;
    }
   
    handleQuery(query) {
        this.userQuery = query;
        console.log(`User query: ${this.userQuery}`);
    
        if (this.userQuery.toLowerCase().includes('problem')) {
          console.log("Thank you for contacting us. Your query about the problem will be resolved within a few hours.");
        } else if (this.userQuery.toLowerCase().includes('product id')) {
          console.log("Thank you for your query. To assist you better, please provide the product ID.");
        } else {
          console.log("Thank you for your query. Our support team will get back to you with a response within a few hours.");
        }
      }
    }
    
    // Example usage

    // Example usage

  const loginSystem = new LoginSystem();
  
  loginSystem.register('pavi', 'hello',"pavi@gmail.com");
  loginSystem.register('James', 'hello',"james@gmail.com");
  loginSystem.login('James', 'hello',"james@gmail.com");

  
//  _________________________________________ adnvance features___________________________________________________________________


  //sort by rating
  loginSystem.unlock();
  const chatBot = new ChatBot();
    
//   chat bot is checking the word using includes after thet it generating the response
  chatBot.handleQuery("I have a problem");
//   chatBot.handleQuery("Track product Id is 123");
//   chatBot.handleQuery("Can i track my parcel");


//filter property

loginSystem.filterProductsByName("shoes")
//reviews
