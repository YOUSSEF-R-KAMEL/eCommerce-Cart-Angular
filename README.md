# eCommerce-Cart-Angular
==== Project Structure  ====

* Products
  	Components:
      - All Products => first page you show in this project, contain 3 components [select, product, spinner]
      - products => every item 'product' in main page
      - Products Details => when i click on any item got to this page 'component' to show item details like [Title, Category,           Description, Rate, .....] 
    models:
      - IProduct => interface to know type of elements in every product
  	Services:
  		- product.service => to calling apis to get products and products by id
    Products Module => declare components in this Element [] 

* Carts
  	Components:
  		- Cart => table contain products selected and count of them and price every product and finally total price
  	Services:
  		- Cart.service o calling apis to send cart
    Cart Module

* Shared
   Components:
      - Dark Mode 
      - Header => navbar of project
      - Select => seleced item to change categories
      - Spinner => spinner for lazy loading
  

    
