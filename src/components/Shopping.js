import React, { useEffect, useState } from "react";

const Shopping = ({
  product,
  setshoppingProductEdit,
  shoppingProductUpdate,
}) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const shoppingProductEdit = {
      ...product,
      stock: product.stock - 1,
    };
    shoppingProductUpdate(shoppingProductEdit);
    setshoppingProductEdit(shoppingProductEdit);
  }, [counter]);

  return (
    <>
      <tbody>
        <tr>
          <td>{product.id}</td>
          <td>{product.nombre}</td>
          <td>{counter}</td>
          <td>
            <button
              className="btn btn-sm btn-outline-success"
              onClick={() => {
                product.stock > 0 && setCounter(counter + 1);
              }}
            >
              +
            </button>{" "}
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() =>
                product.stock && counter !== 0 && setCounter(counter - 1)
              }
            >
              -
            </button>{" "}
          </td>
          <td>{counter}</td>
        </tr>
      </tbody>
      {product.stock === 0 && alert("Producto sin Stock")}
    </>
  );
};

export default Shopping;
