# Product Catalog Application

A React-based product catalog application that allows users to browse products, view details, add items to a cart, and manage their shopping experience. The application features a responsive design and utilizes Bootstrap for styling.

## Features

- Browse a catalog of products with images, descriptions, and prices.
- View detailed product information, including brand, rating, and shipping information.
- Add products to a shopping cart.
- Modify quantities or remove items from the cart.
- View user reviews for each product.
- Responsive design for mobile and desktop devices.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A state management library for managing application state.
- **React Bootstrap**: A library that provides Bootstrap components for React.
- **CSS**: For custom styling and layout adjustments.

## Installation

1.  GitHub repository:
    `https://github.com/Amisha73/ShoppyGlobe-Ecommerce-Website`

2.  Create a New React App:
    `npx create-react-app shoppyglobe`

3.  Navigate to the Project Directory:
    `cd Shoppyglobe`

4.  Install Required Packages:
    `npm install bootstrap redux react-redux`

5.  Create the Project Structure:
   * `mkdir src/components src/redux src/hooks`
   * `touch src/components/{Header.js,ProductList.js,ProductItem.js,ProductDetail.js,Cart.js,CartItem.js,NotFound.js} src/redux/{actions.js,reducers.js,store.js} src/hooks/useFetchProducts.js`

6. Add Bootstrap CSS  in your `src/index.js` file:
   `import 'bootstrap/dist/css/bootstrap.min.css';`

7.  Install the dependencies:
    `npm install`

8.  Start the development server:
    `npm start`

    

```
## Folder Structure

shoppyGlobe/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── Cart.js
│ │ ├── CartItem.js
│ │ ├── ProductDetails.js
│ │ ├── ProductItem.js
│ | ├── ProductList.js
| | ├── Home.js
│ │ ├── NotFound.js
│ │ ├── AboutPage.js
│ │ ├── LoginSignup.js
│ │ │ ├── common/
│ │ │ | ├── Header.js
│ │ │ | ├── Footer.js
│ ├── hooks/
│ │ ├── useFetchProducts.js
│ ├── redux/
│ │ ├── actions.js
│ │ ├── reducer.js
│ │ └── store.js
│ ├── App.js
│ ├── index.js
│ └── ...
├── package.json
└── README.md

````
