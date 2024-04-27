



const ItemCards = () => {
  return (
    <div className="flex flex-wrap justify-around">
      {items.map((item) => (
        <div key={item.id} className="h-60 w-52 max-w-xs rounded overflow-hidden shadow-lg m-4">
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCards;