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
    <div className='flex flex-col'>
      <SearchBar/>
      <p className='text-5xl p-2 font-semibold opacity-80 underline mt-8 text-center overflow-hidden'>Create a Listing</p>
      <form onSubmit={handleSubmit} className="p-4 flex flex-col items-center mt-20">
        {/* upload image option */}
        <div className='flex flex-col items-center justify-center'>
            <p className='text-3xl overflow-hidden'>Upload the images</p>
            <p className='text-xs'>select all the files together</p>
            <input type="file" name="image" onChange={handleChange} multiple className="mb-4 ml-28 mt-4" />
        </div>
        {/* upload video option */}
        <div className='flex flex-col items-center justify-center mt-5'>
            <p className='text-3xl overflow-hidden'>Upload the videos</p>
            <input type="file" name="video" accept="video/*" multiple onChange={handleChange} className="mb-4" />
        </div>
        {/* enter the title */}
        <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold'>Title</label>
            <input type="text" name="title" placeholder="Title" onChange={handleChange} className="mb-4 p-2 border-2 border-gray-300 rounded" />
        </div>
        {/* enter the description */}
        <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold'>Description</label>
            <textarea name="description" placeholder="Description" onChange={handleChange} className="mb-4 p-2 border-2 border-gray-300 rounded" />
        </div>
        {/* select category and condition */}
        <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold'>Category</label>
            <select name="category" onChange={handleChange} className="mb-4 p-2 border-2 border-gray-300 rounded">
            <option value="">Select category</option>
            <option value="cat1">cat1</option>
            {/* Add your categories here */}
            </select>
        </div>
        <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold'>Condition</label>
            <select name="condition" onChange={handleChange} className="mb-4 p-2 border-2 border-gray-300 rounded">
            <option value="">Select condition</option>
            <option value="new">New</option>
            <option value="used">Used</option>
            </select>
        </div>
        {/* enter the quantity */}
        <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold'>Quantity</label>
            <input type="number" name="quantity" placeholder="Quantity" onChange={handleChange} className="mb-4 p-2 border-2 border-gray-300 rounded" />
        </div>
        {/* enter the price */}
        <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold'>Price</label>
            <input type="number" name="price" placeholder="Price" onChange={handleChange} className="mb-4 p-2 border-2 border-gray-300 rounded" />
        </div>
        {/* enter the address */}
        <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold'>Address</label>
            <input type="text" name="address" placeholder="Address" onChange={handleChange} className="mb-4 p-2 border-2 border-gray-300 rounded" />
        </div>
        {/* submit button */}
        <div className='mt-4'>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SellingPage;