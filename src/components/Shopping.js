import React, { useEffect, useState } from "react";

const Shopping = ({ product, setshoppingProductEdit }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const productStockEdit = {
      ...product,
      stock: product.stock - counter,
    };
    setshoppingProductEdit(productStockEdit);
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
                setCounter(counter + 1);
              }}
            >
              +
            </button>{" "}
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => setCounter(counter - 1)}
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
