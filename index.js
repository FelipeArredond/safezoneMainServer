const express = require('express');
const faker = require('faker');
const app = express();
const port = 3500;

app.get('/',(req,res)=>{
  res.send('Hola, servidor en express funcionando');
});

app.get('/products',(req,res)=>{
  const {size} = req.query;
  const limit = size || 10;
  const products =  [];
  for(let i = 0; i < parseInt(limit); i++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl()
    })
  }
  res.json(products)
})

app.get('/products/:id',(req,res)=>{
  const { id } = req.params;
  res.json({
    id:id   ,
    name: 'Producto',
    price: 1000
  })
})

app.get('/categories/:categoryId/products/:productId',(req,res)=>{
  const { categoryId } = req.params;
  const { productId } = req.params;
  res.json({
    name1: categoryId,
    name2: productId
  })
})

app.get('/users',(req,res)=>{
  const { limit, offset } = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    });
  }else{
    res.send('No hay queries')
  }
})

app.listen(port,()=>{
  console.log('Server running at port ' + port);
});
