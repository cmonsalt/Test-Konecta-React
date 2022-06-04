import React, { useEffect, useState } from "react";

const initialFormValues = {
  id: "",
  nombre: "",
  referencia: "",
  precio: "",
  peso: "",
  categoria: "",
  stock: "",
  fecha: "",
};

const ProductForm = ({
  todoAdd,
  productEdit,
  productUpdate,
  setProductEdit,
}) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { id, nombre, referencia, precio, peso, categoria, stock } = formValues;
  const [successfulProcess, setsuccessfulProcess] = useState(null);

  useEffect(() => {
    if (productEdit) {
      setFormValues(productEdit);
    } else {
      setFormValues(initialFormValues);
    }
  }, [productEdit]);

  const handleInputChange = (e) => {
    const changedFormValues = {
      ...formValues,
      [e.target.name]: e.target.value,
    };
    setFormValues(changedFormValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productEdit) {
      productUpdate(formValues);
      setsuccessfulProcess("Producto actualizado con Exito");
    } else {
      todoAdd(formValues);
      setsuccessfulProcess("Producto agregado con Exito");
      setFormValues(initialFormValues);
    }

    setTimeout(() => {
      setsuccessfulProcess(null);
    }, 2000);
  };

  return (
    <div>
      <h1>{productEdit ? "Editar producto" : "Agregar Producto"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="ID"
          value={id}
          name="id"
          onChange={handleInputChange}
          required
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Nombre"
          className="mt-2"
          value={nombre}
          name="nombre"
          onChange={handleInputChange}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Referencia"
          className="mt-2"
          value={referencia}
          name="referencia"
          onChange={handleInputChange}
          required
        />
        <br />
        <input
          type="number"
          placeholder="Precio(COP)"
          className="mt-2"
          value={precio}
          name="precio"
          onChange={handleInputChange}
          required
        />
        <br />
        <input
          type="number"
          placeholder="Peso(Kg)"
          className="mt-2"
          value={peso}
          name="peso"
          onChange={handleInputChange}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Categoria"
          className="mt-2"
          value={categoria}
          name="categoria"
          onChange={handleInputChange}
          required
        />{" "}
        <br />
        <input
          type="number"
          placeholder="Stock"
          className="mt-2"
          value={stock}
          name="stock"
          onChange={handleInputChange}
          required
        />
        <br />
        <button className="btn btn-primary mt-3">
          {productEdit ? "Actualizar producto" : "Agregar Producto"}
        </button>{" "}
        {productEdit && (
          <button
            type="button"
            className="btn btn-dark mt-3"
            onClick={() => setProductEdit(null)}
          >
            Cancelar Edición
          </button>
        )}
      </form>

      {successfulProcess && (
        <div className="alert alert-success mt-2">{successfulProcess}</div>
      )}
    </div>
  );
};

export default ProductForm;
