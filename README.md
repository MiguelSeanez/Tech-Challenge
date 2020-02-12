Setup
-----
This CRUD works in [NodeJS](https://nodejs.org/es/) v. 10.15.1  <br/>
Install all dependencies using npm command prompt using:

	$ npm install
  
  
Run
-----
On project root run:

	$ npm run dev
  
* By default the app runs in:
    * http://localhost:3000
    * In other case in command prompt prints the port where's running

Database
-----
Folder database contains dump's file.
Database keys are in the file src/keys.js

## Requests & Responses Examples

### API Resources

  - [POST /createProduct](#post-createproduct)
  - [GET /getAllProducts](#get-getallproducts)
  - [GET /getProductId/[id]](#get-getproductidid)
  - [GET /getProductName/[name]](#get-getproductnamename)
  - [PUT /updateProduct/[id]](#put-updateproductid)	
  - [DELETE /deleteProduct/[id]](#delete-deleteproductid)
  - [POST /createPurchase](#post-createpurchase)
  - [GET /getAllPurchases](#get-getallpurchases)
  - [GET /getPurchaseId/[id]](#get-getpurchaseidid)  
  
  
  
### POST /createProduct
Example: http://localhost:3000/createProduct

Request body:

	{
	   "name": "Printer",
	    "price": 900,
	    "description": "Printer HP",
	    "stock": 34
	}
  
 Good response: <br />
 
	{
	   "success": "Product created."
	}
  

### GET /getAllProducts
Example: http://localhost:3000/getAllProducts

Good response: <br />
 
	{
        "id": 1,
        "name": "Ipad",
        "price": 4200,
        "description": "Ipad Pro 2019",
        "stock": 16
    },
    {
        "id": 2,
        "name": "Xbox one",
        "price": 5000,
        "description": "Xbox one 1 tb",
        "stock": 10
    }
  

### GET /getProductId/[id]
Example: http://localhost:3000/getProductId/1
  
 Good response: <br />
 
	{
	   "id": 1,
        "name": "Ipad",
        "price": 4200,
        "description": "Ipad Pro 2019",
        "stock": 16
	}
  

### GET /getProductName/[name] 
Example: http://localhost:3000/getProductName/Ipad

  
 Good response: <br />
 
	{
        "id": 1,
        "name": "Ipad",
        "price": 4200,
        "description": "Ipad Pro 2019",
        "stock": 16
	}
  

### PUT /updateProduct/[id] 
Example: http://localhost:3000/updateProduct/1

 Request body:

	{
	    "price": 3500,
	    "description": "Ipad Pro 2018"
	}

 Good response: <br />
 
	{
	   "success": "Product updated."
	}
  

### DELETE /deleteProduct/[id]
Example: http://localhost:3000/getAllProducts/name

  
 Good response: <br />
 
	{
	    "success": "Product deleted."
	}
  


### POST /createPurchase

Example: http://localhost:3000/createPurchase

Request body:

	{
	    "id_product": 4,
        "date_purchase": "2020-02-12",
        "customer_name": "Comprador",
        "quantity": 2
	}
  
 Good response: <br />
 
	{
	   "success": "You got it."
	}
  

### GET /getAllPurchases

Example: http://localhost:3000/getAllPurchases
  
 Good response: <br />
 
	{
        "id": 1,
        "id_product": 2,
        "date_purchase": "2020-02-11T06:00:00.000Z",
        "customer_name": null,
        "quantity": 0
    },
    {
        "id": 2,
        "id_product": 2,
        "date_purchase": "2020-02-11T06:00:00.000Z",
        "customer_name": "Juan",
        "quantity": 0
    }
  



### GET /getPurchaseId/[id]
Example: http://localhost:3000/getPurchaseId/1

 Good response: <br />
 
	{
        "id_purchase": "1",
        "date_purchase": "2020-02-11T06:00:00.000Z",
        "customer_name": "Miguel",
        "product_id": 4,
        "product_name": "Celular",
        "product_price": 5000,
        "product_description": "Celular Xiaomi",
        "quantity": 3,
        "total": 15000
	}

## Test in Postman
You can test the app easily using [Postman](https://www.getpostman.com/) importing the [TechChallenge E-Commerce.postman_collection.json](https://github.com/MiguelSeanez/Tech-Challenge/blob/master/TechChallenge%20E-Commerce.postman_collection.json) file.