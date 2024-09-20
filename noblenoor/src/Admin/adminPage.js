import React, { useState } from 'react';
import './adminPage.css';

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    image: null
  });
  const [editingId, setEditingId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewProduct({ ...newProduct, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId !== null) {
      setProducts(products.map(product =>
        product.id === editingId ? { ...newProduct, id: editingId } : product
      ));
      setEditingId(null);
    } else {
      setProducts([...products, { ...newProduct, id: Date.now() }]);
    }
    setNewProduct({ name: '', price: '', description: '', category: '', image: null });
  };

  const handleEdit = (product) => {
    setNewProduct({ ...product });
    setEditingId(product.id);
  };

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="admin-page">
      <h1>Admin Product Management</h1>

      <form onSubmit={handleSubmit} className="add-product-form">
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          placeholder="Product Name"
          required
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          placeholder="Price"
          step="10"
          required
        />
        <textarea
          name="description"
          value={newProduct.description}
          onChange={handleInputChange}
          placeholder="Product Description"
          required
        />
        <input
          type="text"
          name="category"
          value={newProduct.category}
          onChange={handleInputChange}
          placeholder="Category"
          required
        />
        <input
          type="file"
          name="image"
          onChange={handleImageChange}
          accept="image/*"
          required={!editingId}
        />
        <button type="submit">{editingId !== null ? 'Update Product' : 'Add Product'}</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${parseFloat(product.price).toFixed(2)}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>{product.image && product.image.name}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(product)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;