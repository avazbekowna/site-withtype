import React from 'react';
import {useParams} from "react-router-dom";

const DetailPage = () => {
    const movieId = useParams()
    console.log(movieId.movieId)

    return (
        <div>
            
        </div>
    );
};

export default DetailPage;