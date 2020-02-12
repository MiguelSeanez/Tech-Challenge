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
    * In other case in command prompt prints the port where's runs

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
	   "user" : "username",
	   "password" : "mypass",
	   "repeat" : "mypass",
	   "kind" : "1"
	}
  
 Good response: <br />
 
	{
	   "success": "User created successfully"
	}
  
> Code: `201 Created` <br />

### GET /getAllProducts
Right response returns a token for authorization headers.<br>
The token was configured to expire in 30 minutes. <br/>
Example: http://example.com/api/v1/loguin


Request body:

	{
	   "user" : "username",
	   "password" : "mypass"
	}

Good response: <br />
 
	{
	    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImV4cCI6MTUzNzAyODkwNH0.ttyFoOfY4MCQqcLsUjf-hkATulGXp81lJ4sXGZvCuQg"
	}
  
> Code: `202 Accepted` <br />

### GET /getProductId/[id]
Example: http://example.com/api/v1/createProduct

Request body:

	{
	   "name" : "iPhone X",
	   "npc" : "123456",
	   "stock" : "10",
	   "price" : "19900"
	}
> Authorization header: [token]
  
 Good response: <br />
 
	{
	   "success": "A new product has been created!"
	}
  
> Code: `201 Created` <br />

### GET /getProductName/[id]
  
Example: http://example.com/api/v1/getProduct/[id]

  
 Good response: <br />
 
	{
	   "Name": "iPhone X",
	    "Price": "19900",
	    "NPC": "123456",
	    "last_update": "2018-09-15 17:21:12.907826+00:00",
	    "likes": 0,
	    "id": 1,
	    "Stock": "10"
	}
  
> Code: `200 OK` <br />

### PUT /updateProduct/[id]
  
Example: http://example.com/api/v1/getProductByName/iPhone

  
 Good response: <br />
 
	{
	   "Name": "iPhone X",
	    "Price": "19900",
	    "NPC": "123456",
	    "last_update": "2018-09-15 17:21:12.907826+00:00",
	    "likes": 0,
	    "id": 1,
	    "Stock": "10"
	}
  
> Code: `200 OK` <br />

### DELETE /deleteProduct/[id]
* There are 2 parameters avalible:
	* name
	* likes
Example: http://example.com/api/v1/getAllProducts/name

  
 Good response: <br />
 
	{
	      	"Name": "iPhone 8",
		"Price": "12500",
		"NPC": "123455",
		"last_update": "2018-09-15 17:21:12.907826+00:00",
		"likes": 0,
		"id": "2",
		"Stock": "10"
	}
	{
	  	"Name": "iPhone X",
	   	"Price": "19900",
	   	"NPC": "123456",
	   	"last_update": "2018-09-15 17:21:12.907826+00:00",
	   	"likes": 0,
	   	"id": 1,
	   	"Stock": "10"
	}
  
> Code: `200 OK` <br />

### POST /createPurchase

Example: http://example.com/api/v1/updateProductPrice

Request body:

	{
	   "id" : "1",
	   "price" : "20000",
	}
> Authorization header: [token]
  
 Good response: <br />
 
	{
	   "success": "Product has been updated!"
	}
  
> Code: `200 OK` <br />

### GET /getAllPurchases

Example: http://example.com/api/v1/deleteProduct

Request body:

	{
	   "id" : "1",
	}
> Authorization header: [token]
  
 Good response: <br />
 
	{
	   "success": "Product has been deleted!"
	}
  
> Code: `200 OK` <br />



### GET /getPurchaseId/[id]
For this operation the user must be "registered" kind. <br/>
Example: http://example.com/api/v1/likeProduct

Request body:

	{
	   "productId" : "1",
	}
> Authorization header: [token]
  
 Good response: <br />
 
	{
	   "success": "Like Saved!"
	}
  
> Code: `200 OK` <br />

```


## Test in Postman
You can test the app easily using [Postman](https://www.getpostman.com/) importing the [E-commerce.postman_collection.json](https://github.com/3vilware/E-commerce-API/blob/master/E-commerce.postman_collection.json) file.