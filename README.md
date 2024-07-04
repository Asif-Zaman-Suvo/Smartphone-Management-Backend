# SmartPhone Management Dashboard - Part 2 - Backend Code

## Details Of this project

This project refers to the implementation of role based authentication with register and login,like there is 3 types of role , Super Admin , Manager and Seller

## Features of this project

- We can register someone as Manager and Seller . They can create new product , Only Super Admin and manager can edit them and delete them and only seller can sell them , manager can't sell anything

- After completing a sale, users will have the option to download the invoice for the order.

- you can see the total number of products in the all products list , when you sell a product the quantity will be decrease in the all products list also

- Super Admin will have all access, Managers can add and modify products, while Sellers can only sell.

- A button in the product list , Upon clicking this button, users will be redirected to a form where product data is pre-filled. Users can then make modifications as needed to create a new product based on the existing one. The button is amed "Duplicate & Edit" to convey the idea that users can duplicate an existing product and make modifications to create a new one.

## Technologies I've used in this project

- NodeJS , A javascipt runtine environment
- ExpressJS framwork
- TypeScript: Superset of JavaScript with static typing
- MongoDB: NoSQL database
- Mongoose: Object Document Mapper (ODM) for MongoDB
- Data validation libraries like ZOD
- Jwt Web token for access token.
- Vercel for deploy the project
- bcrypt for hash password

## Installation and Setup

- Install Node.js and npm (Node Package Manager)
- Clone the Project repository

```bash for windows / zsh for mac
git clone <git-repository-url>
```

- Install project dependencies

```bash for windows / zsh for mac
npm install
```

- Start the development server

```bash for windows / zsh for mac
npm run start:dev
```

## Contribution

- Feel free to contribute to this project by reporting bugs, suggesting improvements, or submitting pull requests.thanks .

## Live API Link

- https://smartphone-second.vercel.app/
  => here you can see the front page for this api

=> But this is the main API

- https://smartphone-second.vercel.app/api/


# l2-b2-assignment-6-backend-Asif-Zaman-Suvo
