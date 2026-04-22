








var products = [];

while (true) {
var choice = prompt(
  "=== MENU ===\n" +
  "1. Add product\n" +
  "2. Show products\n" +
  "3. Edit product\n" +
  "4. Delete product\n" +
  "5. Exit\n\n" +
  "Enter number:"
);

  if (choice == "1") {
    var newProduct = prompt("Enter product name:");
    products.push(newProduct);
    console.log("Product added");

  } else if (choice == "2") {
    
    if (products.length === 0) {
      console.log("No products");
    } else {
      console.log("Products list:");
      for (var i = 0; i < products.length; i++) {
        console.log(i + " - " + products[i]);
      }
    }

  } else if (choice == "3") {
    var index = prompt("Enter product number:");
    if (products[index]) {
      var newName = prompt("Enter new name:");
      products[index] = newName;
      console.log("Product updated");
    } else {
      console.log("Product not found");
    }

  } else if (choice == "4") {
    var index = prompt("Enter product number:");
    if (products[index]) {
      products.splice(index, 1);
      console.log("Product deleted");
    } else {
      console.log("Product not found");
    }

  } else if (choice == "5") {
    console.log("Exit");
    break;

  } else {
    console.log("Wrong choice");
  }
}