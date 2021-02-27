import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
const GifGrid = ({ category }) => {
    const { loading, data: images } = useFetchGifs(category);

    return (
        <>
            <h3 className="text-center animate__animated animate__fadeIn">
                {category.toUpperCase()}
            </h3>
            {loading && <p className="text-center animate__animated animate__flash">Loading...</p>}
            <div className="card-grid">
                {images.map(img => (
                    <GifGridItem key={img.id} {...img} />
                ))}
            </div>
        </>
    );
};
GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};
export default GifGrid;
