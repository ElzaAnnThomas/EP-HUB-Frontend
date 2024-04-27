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
      <form onSubmit={handleSubmit} className="p-4 flex flex-col items-center mt-20">
        {/* upload image option */}
        <div>
            <p>UPLOAD THE IMAGE OF THE PLASTIC</p>
            <input type="file" name="image" onChange={handleChange} className="mb-4" />
        </div>
        {/* upload video option */}
        <div>
            <p>UPLOAD THE VIDEO OF THE PLASTIC</p>
            <input type="file" name="video" accept="video/*" onChange={handleChange} className="mb-4" />
        </div>
        {/* enter the title */}
        <div>
            <label htmlFor="">Title</label>
            <input type="text" name="title" placeholder="Title" onChange={handleChange} className="mb-4" />
        </div>
        {/* enter the description */}
        <div>
            <p>Description</p>
            <textarea name="description" placeholder="Description" onChange={handleChange} className="mb-4" />
        </div>
        {/* select category and condition */}
        <div>
            <select name="category" onChange={handleChange} className="mb-4">
            <option value="">Select category</option>
            <option value="cat1">cat1</option>
                <option value="cat2">cat2</option>
                <option value="cat3">cat3</option>
                <option value="cat4">cat4</option>
                <option value="cat5">cat5</option>
            </select>

            <select name="condition" onChange={handleChange} className="mb-4">
            <option value="">Select condition</option>
            <option value="new">New</option>
            <option value="used">Used</option>
            <option value="used">Renewed</option>
            </select>
        </div>
        {/* enter quantity and price */}
        <div>
            <div>
                <p>Quantity</p>
                <input type="number" name="quantity" placeholder="Quantity" onChange={handleChange} className="mb-4" />
            </div>
            <div>
                <p>Price</p>
                <input type="number" name="price" placeholder="Price" onChange={handleChange} className="mb-4" />
            </div>
        </div>
        {/* enter address */}
        <textarea type="text" name="address" placeholder="Address" onChange={handleChange} className="mb-4" />
        {/* submit button */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default SellingPage;