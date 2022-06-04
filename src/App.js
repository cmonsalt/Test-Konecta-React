import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import ShoppingList from "./components/ShoppingList";

const initialProducts = [
  {
    id: 1,
    nombre: "Leche",
    referencia: "Deslactozada",
    precio: 2500,
    peso: 1,
    categoria: "Lacteos",
    stock: 7,
    fecha: new Date().toDateString(),
  },
];
function App() {
  const [products, setProducts] = useState(initialProducts);
  const [productEdit, setProductEdit] = useState(null);
  const [shoppingProductEdit, setshoppingProductEdit] = useState(null);

  // Para las compras

  const shoppingProductUpdate = (shoppingProductEdit) => {
    const changedProducts = products.map((product) =>
      product.id === shoppingProductEdit.id ? shoppingProductEdit : product
    );
    setProducts(changedProducts);
  };

  //Para la lista de productos
  const productDelete = (productId) => {
    if (productEdit && productId === productEdit.id) {
      setProductEdit(null);
    }
    const changedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(changedProducts);
  };

  const productAdd = (product) => {
    const newProduct = {
      ...product,
    };
    const changedProducts = [newProduct, ...products];
    setProducts(changedProducts);
  };

  const productUpdate = (productEdit) => {
    const changedProducts = products.map((product) =>
      product.id === productEdit.id ? productEdit : product
    );
    setProducts(changedProducts);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-10">
          <br />
          <ProductList
            products={products}
            productDelete={productDelete}
            setProductEdit={setProductEdit}
          />
        </div>
        <div className="col-2">
          <ProductForm
            todoAdd={productAdd}
            productEdit={productEdit}
            productUpdate={productUpdate}
            setProductEdit={setProductEdit}
          />
        </div>
      </div>
      <hr />
      <ShoppingList
        products={products}
        setshoppingProductEdit={setshoppingProductEdit}
        shoppingProductUpdate={shoppingProductUpdate}
      />
    </div>
  );
}

export default App;
