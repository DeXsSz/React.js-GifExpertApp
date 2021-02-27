import React, { useState } from 'react';
import AddCategorie from './components/AddCategorie';
import GifGrid from './components/GifGrid';

const GiftExpertApp = () => {
    const [categories, setCategories] = useState([]);
    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategorie setCategories={setCategories} />
            <hr />
            <ol>
                {categories.map(category => {
                    return <GifGrid key={category} category={category} />;
                })}
            </ol>
        </>
    );
};

export default GiftExpertApp;
