import Product from "./Product";

const ProductList = ({ products, productDelete, setProductEdit }) => {
  return (
    <div>
      <h1>Lista de productos</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Referencia</th>
            <th>Precio(COP)</th>
            <th>Peso(Kg)</th>
            <th>Categoría</th>
            <th>Stock</th>
            <th>Fecha de creación</th>
            <th>Acciones</th>
          </tr>
        </thead>

        {products.length === 0 ? (
          <tfoot>
            <tr>
              <td>No hay productos que mostrar</td>
            </tr>
          </tfoot>
        ) : (
          products.map((product) => (
            <Product
              product={product}
              key={product.id}
              productDelete={productDelete}
              setProductEdit={setProductEdit}
            />
          ))
        )}
      </table>
    </div>
  );
};

export default ProductList;
