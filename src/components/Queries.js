import React, { useEffect } from "react";

const Queries = ({ products }) => {
  //Producto con mas Stock

  const stockProductMax = products.sort((product1, product2) =>
    product1.stock < product2.stock
      ? 1
      : product1.stock > product2.stock
      ? -1
      : 0
  );

  //producto mas vendido

  const SoldProductMax = products.sort((product1, product2) =>
    product1.cantidad < product2.cantidad
      ? 1
      : product1.cantidad > product2.cantidad
      ? -1
      : 0
  );
  //console.log(SoldProductMax);

  return (
    <div>
      <h2>Consultas</h2>
      {/* <p>
        El producto con mas Stock es:{" "}
        <strong>{stockProductMax[0].nombre}</strong>
      </p> */}
      <p>
        El producto mas vendido es:{" "}
        <strong>
          {SoldProductMax.cantidad !== 0
            ? SoldProductMax[0].nombre
            : "No hay productos"}
        </strong>
      </p>
    </div>
  );
};

export default Queries;
