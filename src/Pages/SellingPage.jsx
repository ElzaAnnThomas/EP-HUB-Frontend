import { useState } from 'react';
import SearchBar from '../Components/SearchBar';

const SellingPage = () => {
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    description: '',
    category: '',
    condition: '',
    quantity: '',
    price: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <SearchBar/>
      <form onSubmit={handleSubmit} className="p-4">
        <input type="file" name="image" onChange={handleChange} className="mb-4" />
        <input type="text" name="title" placeholder="Title" onChange={handleChange} className="mb-4" />
        <textarea name="description" placeholder="Description" onChange={handleChange} className="mb-4" />
        <select name="category" onChange={handleChange} className="mb-4">
          <option value="">Select category</option>
          {/* Add your categories here */}
        </select>
        <select name="condition" onChange={handleChange} className="mb-4">
          <option value="">Select condition</option>
          <option value="new">New</option>
          <option value="used">Used</option>
        </select>
        <input type="number" name="quantity" placeholder="Quantity" onChange={handleChange} className="mb-4" />
        <input type="number" name="price" placeholder="Price" onChange={handleChange} className="mb-4" />
        <input type="text" name="address" placeholder="Address" onChange={handleChange} className="mb-4" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default SellingPage;