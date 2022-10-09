# Comfortina

## _E-commerce Site for an Egyptian Furniture Company_

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://comfortina.vercel.app/)

### السلام عليكم ورحمة الله وبركاته

Comfortina is a fullstack e-commerce site made by MERN stack + Tailwind CSS. It's deployed on Vercel _[Here](https://comfortina.vercel.app/)_. The API for the app is also Deployed on Vercel _[Here](https://comfortina-api.vercel.app/)_.
The project api depends on real data I scrapped from Jumia using another project of mine [Jumia Scrapper](https://github.com/mostafakamar2308/jumia-scrapper).
The project is for learning purposes only and I don't own any of the data it uses.

## Features

### Backend Features (API)

- Register and Login Functionality
- Hashing the user password using Bcrypt
- Ability to login in by Token which is created by JWT
- Created database to store Users each user contain:
  - Email
  - password
  - username
  - Full Name
  - Role: (admin, customer)
  - Cart
  - WishList
  - Messages _for admins only_
- Ability to change users Roles _only to admins_
- Created Database for products _I scrapped the products from Jumia_
- Ability to get, add, update and delete products
- Manage Cart and Wishlist of Each User
- Get Either One Product or Multiple Products
- Search Functionality with parameters productName or Category

### Frontend Features

- Context Api for State Management
- Full Responsive Design
- Styles made by Tailwind CSS
- Pages Made:
  - Home Page
  - Products Page
  - Contact Page
  - Login Page
  - Register Page
- Cart and Favorite Overlay
- Different Header Design in mobiles and in desktops
- Product Page contain Navigation system between categories and between products
- Contact Page contain Form which is connected to the API
- Contact page Contain FAQs in the form of Accordion Buttons
- Lazy Loading for Products and Routes
- Error Preview for wrong form inputs

## Tech

Comfortina uses a number of open source projects to work properly:

- ReactJs
- ExpressJs
- NodeJs
- Tailwind CSS
- MongoDB
- Git and GitHub

## What I learned

### Frontend

- Increase knowledge about Optimization of React projects
- to Lazy load components and routes in react
- The usage of Context API and its advantages
- Customizing my tailwindCSS config files
- The flow of Data in React and the importance of designing your system first befor writing any code
- Using branches and stashes in Git to organize my work
- The importance of Desiging phone views and the struggle i will face in the end of the project if I don't

### Backend

- Authentication and security systems using hashing and Tokens
- Error Handling of Authentication errors
- How to structure your Databases
- How to upload Data to your Databases
- How to write Different Endpoints
- How to deploy an API on Vercel

## FeedBack

If there is any feedback or questions, I'd Be happy to hear it :smile: , You can contact me either on [LinkedIn](https://www.linkedin.com/in/mostafa-kamar/) or [Facebook](https://www.facebook.com/MostafaKamar2308).
