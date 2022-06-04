import React from "react";

const Product = ({ product, productDelete, setProductEdit }) => {
  return (
    <>
      <tbody>
        <tr>
          <td>{product.id}</td>
          <td>{product.nombre}</td>
          <td>{product.referencia}</td>
          <td>{product.precio}</td>
          <td>{product.peso}</td>
          <td>{product.categoria}</td>
          <td>{product.stock}</td>
          <td>{new Date().toDateString()}</td>
          <td>
            <button
              className="btn btn-sm btn-outline-primary mb-2 col-7"
              onClick={() => setProductEdit(product)}
            >
              Editar
            </button>{" "}
            <button
              className="btn btn-sm btn-outline-danger col-7"
              onClick={() => productDelete(product.id)}
            >
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default Product;
