import { useState } from 'react';
import SearchBar from '../Components/SearchBar';

const SellingPage = () => {
  const [formData, setFormData] = useState({
    image: [],
    video: null,
    title: '',
    description: '',
    category: '',
    condition: '',
    quantity: '',
    price: '',
    address: ''
  });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, [e.target.name]: Array.from(e.target.files) });
    } else if (e.target.name === 'video') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <SearchBar/>
      <p>Create a Listing</p>
      <form onSubmit={handleSubmit}>
        <div>
            <p>Upload the images</p>
            <p>select all the files together</p>
            <input type="file" name="image" onChange={handleChange} multiple />
        </div>
        <div>
            <p>Upload the videos</p>
            <input type="file" name="video" accept="video/*" multiple onChange={handleChange} />
        </div>
        <div>
            <label>Title</label>
            <input type="text" name="title" placeholder="Title" onChange={handleChange} />
        </div>
        <div>
            <label>Description</label>
            <textarea name="description" placeholder="Description" onChange={handleChange} />
        </div>
        <div>
            <label>Category</label>
            <select name="category" onChange={handleChange}>
            <option value="">Select category</option>
            <option value="cat1">cat1</option>
            </select>
        </div>
        <div>
            <label>Condition</label>
            <select name="condition" onChange={handleChange}>
            <option value="">Select condition</option>
            <option value="new">New</option>
            <option value="used">Used</option>
            </select>
        </div>
        <div>
            <label>Quantity</label>
            <input type="number" name="quantity" placeholder="Quantity" onChange={handleChange} />
        </div>
        <div>
            <label>Price</label>
            <input type="number" name="price" placeholder="Price" onChange={handleChange} />
        </div>
        <div>
            <label>Address</label>
            <input type="text" name="address" placeholder="Address" onChange={handleChange} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SellingPage;