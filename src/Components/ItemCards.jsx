import React from 'react';

const items = [
  {
    "id": 1,
    "image": "https://example.com/images/plastic1.jpg",
    "name": "Plastic 1",
    "available": true,
    "price": 10.99,
    "address": "123 Main St, Anytown, USA"
  },
  {
    "id": 2,
    "image": "https://example.com/images/plastic2.jpg",
    "name": "Plastic 2",
    "available": false,
    "price": 15.99,
    "address": "456 Oak St, Anytown, USA"
  },
  {
    "id": 3,
    "image": "https://example.com/images/plastic3.jpg",
    "name": "Plastic 3",
    "available": true,
    "price": 12.99,
    "address": "789 Pine St, Anytown, USA"
  },
  {
    "id": 4,
    "image": "https://example.com/images/plastic4.jpg",
    "name": "Plastic 4",
    "available": true,
    "price": 9.99,
    "address": "321 Elm St, Anytown, USA"
  },
  {
    "id": 5,
    "image": "https://example.com/images/plastic5.jpg",
    "name": "Plastic 5",
    "available": false,
    "price": 14.99,
    "address": "654 Maple St, Anytown, USA"
  }
];

const ItemCards = () => {
  return (
    <div className="flex flex-wrap justify-around">
      {items.map((item) => (
        <div key={item.id} className="h-80 w-72 max-w-xs rounded overflow-hidden shadow-lg m-4">
          <img className="w-full" src={item.image} alt={item.name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.name}</div>
            <p className="text-gray-700 text-base">
              {item.available ? 'Available' : 'Out of Stock'}
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              ${item.price}
            </span>
            <p className="text-gray-700 text-base">
              {item.address}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCards;