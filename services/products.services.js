const faker = require('faker');

class ProductsServices{

  constructor(){
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for(let i = 0; i < parseInt(limit); i++){
      this.products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.imageUrl()
      })
    }
  }

  find() {
    return this.products;
  }

}

module.exports = ProductsServices;
