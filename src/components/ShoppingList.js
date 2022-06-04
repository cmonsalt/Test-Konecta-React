import React from "react";
import Shopping from "./Shopping";

const ShoppingList = ({ products, setshoppingProductEdit }) => {
  return (
    <div>
      <h1>Compras</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Comprar</th>
            <th># de Ventas</th>
          </tr>
        </thead>
        {products.map((product) => (
          <Shopping
            product={product}
            key={product.id}
            setshoppingProductEdit={setshoppingProductEdit}
          />
        ))}
      </table>
    </div>
  );
};

export default ShoppingList;
