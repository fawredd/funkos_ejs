# :shopping_cart: Funkoshop

Projetc based on Funkoshop website.

The website layout:

https://www.figma.com/file/IjTSeE2BpRd5Gk9VakNIhC/Challenge-Integrador---Funkoshop?type=design&node-id=19905-435&mode=design

## :computer: site deploy

Link: https://fawredd-funk.vercel.app/

## Features

- **Admin Access**: With the username "**admin@fawfunk.com**" and password "admin1234", access to the Admin, Create Item, and Edit Item views is granted.

- **CRUD**: Within the protected views (Admin, Create Item, and Edit Item), you can manipulate the data storage of the website by creating, editing, and deleting products. Then, different views can read the database and update their content. ***Unfortunately, Vercel does not allow file uploads, so the created or edited items will not have any issues as long as the corresponding images for the front and back of each item are not added. A default image for the front and back of the product has been selected when they are created or edited on Vercel to avoid leaving them empty.***

- **Login/Register System**: Registration and login of new users are allowed. These users are saved in the database with encrypted passwords. New users do not have access to the protected views (Admin, Create Item, and Edit Item).

- **Product Search**: The store allows searching for products by their name and license name. Additionally, you can select the desired category to search (funko, t-shirt, keychain), specify a price range, and choose the sorting type. The same applies to the Admin page, where you can search for a product by its code, name, or category.

- **Shopping Cart**: From the individual page of each product, using the **"Add to Cart"** button, the item is added to the shopping cart, where you can manage its quantity, view the total price of the purchase, remove the item from the list, and proceed to checkout. Additionally, a counter is displayed in the header showing the number of added items. To complete the purchase, you need to create a user account (which does not have administrator permissions).

- **Real-time Updates**: Due to dynamic views, the items within the store, the individual item page, the slider, and the collections on the "Home" page are synchronized in real-time through the database connection.

- **Slider**: The products within the slider are randomly displayed, with a maximum of 12 items. Within the individual view of each product, related products belonging to the same license will be shown.

- **Error Handling**: I have implemented error handling for: **Error 404** - **Non-existent Item** - **Invalid credentials for accessing protected views** - **Validations in the Login and Register forms** - **Validations in the forms for creating and editing items** - **Errors when creating, editing, or deleting items**.

## Architecture

The project follows an MVC (Model-View-Controller) architecture, organizing the code into layers.

I also apply the CRUD (Create-Read-Update-Delete) system to manage data persistently.

I use prisma.js to test other DB.

## Installation

If you want to use the app locally, for example, to upload products with your own images (since Vercel doesn't allow it), follow these instructions:

1. After cloning the project locally, install the required dependencies using the command "npm install".

2. Inside the project, in the root folder, create a ".env" file. There is a file named "example.env" that indicates the fields you need to fill in.

## Dependencies

The dependencies used within Node.js for the proper functioning of the website are:

- bcryptjs
- cookie-session
- dotenv
- ejs
- express
- express-validator
- method-override
- multer
- prisma

I use 'nodemon' as a development dependency.

## :gear: Technologies

The applied technologies are:

- HTML (Views with EJS engine)
- CSS
- JavaScript
- Glide.js
- Node.js
- Express.js
- Prisma