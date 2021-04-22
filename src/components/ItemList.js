import { useState, useEffect } from 'react';
import Item from './Item';

import { addToCartURL, productListURL } from '../constants';


function ItemList() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(True);
    useEffect(() => {
        getItems()
    }, []);

    const getItems = async () => {
        fetch(productListURL)
            .then(response => response.json())
            .then(json => setItems(json))
            
    };

    function addToCart(itemID) {

        fetch(addToCartURL, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'id': itemID }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div className="bg-green-500 mb-6 pb-9">
            <h2 className="text-center mt-6 text-green-50 text-4xl pt-6 pb-4">
                Zol Inventory</h2>
            <section className='container bg-green-200 rounded-2xl mx-auto flex lg:flex-row lg:justify-around p-3 flex-wrap'>

                {items?.map(
                    c => <Item key={c.id} id={c.id} title={c.title} price={c.price} image={c.image} addToCart={addToCart} />
                )}
            </section>

        </div>

    )
}

export default ItemList;
