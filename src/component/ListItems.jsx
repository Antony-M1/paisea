import React from 'react'





const ListItems = () => {

    const products = [
        { title: 'Cabbage', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
    ];

    const listItems = products.map((product) => 
        <li style={{color: product.isFruit ? 'purple':'green'}} key={product.id}>{product.title}</li>
    );

  return (
    <div>
      <h2>List All Items</h2>
      <ul>{listItems}</ul>
    </div>
  );
}

export default ListItems