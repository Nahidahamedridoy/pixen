import React from 'react';
import PhotoCart from './PhotoCart';

const TopGenerations = async () => {
    const res = await fetch('https://pixen-blond.vercel.app/data.json')
    const photos = await res.json()
    console.log(photos);

    const topPhotos = photos.slice(0, 8)
    console.log(topPhotos);
    return (
        <div>
            <h1 className='text-2xl font-bold my-5'>Top generation</h1>

            <div className="grid grid-cols-4 gap-5">
                {
                    topPhotos.map(photo => < PhotoCart key={photo.id} photo={photo}/>)
                }
            </div>
        </div>
    );
};

export default TopGenerations;