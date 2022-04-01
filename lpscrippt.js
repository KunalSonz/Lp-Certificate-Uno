window.lpTag = window.lpTag || {};
lpTag.sdes = lpTag.sdes||[];
lpTag.sdes.push(
  {
    "type": "prodView", //MANDATORY
    "products": [{ //ARRAY OF PRODUCTS
      "product": {
        "name": "Product1", //PRODUCT NAME
        //"category": "shoes", //PRODUCT CATEGORY NAME
        //"sku": "10305020", //PRODUCT SKU OR UNIQUE IDENTIFIER
        "price": 100 //PRODUCT PRICE
      }
    }]
  }
);