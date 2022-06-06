import React, { useEffect, useState } from "react";

const Shopping = ({
  product,
  // setshoppingProductEdit,
  shoppingProductUpdate,
}) => {
  const [counter, setCounter] = useState(0);
  const [value, SetValue] = useState(null);

  useEffect(() => {
    const shoppingProductEdit = {
      ...product,
      stock: value ? product.stock - 1 : product.stock + 1,
      cantidad: counter,
    };

    shoppingProductUpdate(shoppingProductEdit);
    // setshoppingProductEdit(shoppingProductEdit);
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
                product.stock === 0 && alert("Producto sin Stock");
                SetValue(true);
              }}
            >
              +
            </button>{" "}
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => {
                if (product.stock & (counter !== 0) || counter) {
                  setCounter(counter - 1);
                }
                SetValue(false);
              }}
            >
              -
            </button>{" "}
          </td>
          <td>{counter}</td>
        </tr>
      </tbody>
    </>
  );
};

export default Shopping;
