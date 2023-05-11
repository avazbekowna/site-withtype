import React, {useEffect} from 'react';
import {useTypedDispatch} from "../Hook/useTypedDispatch";
import {useTypedSelector} from "../Hook/useTypedSelector";
import "../index.scss"
import {Link} from "react-router-dom";

const Movies = () => {
    const {movies, page, loading, error} = useTypedSelector(s => s.movie)
    const {fetchingMovies, changeCurrentPage} = useTypedDispatch()
    const pages = [1,2,3,4,5,6,7,8,9,10]
    

    useEffect(() => {
        fetchingMovies(page)
    }, [page])


    if (loading){
        return <h3>loading...</h3>
    }
    if (error){
        return <p>{error}</p>
    }

    return (
        <div className="container ">
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {
                    movies.map(el => (
                        <div style={{margin: '40px'}}>
                            <Link to={`/movies/movie-detail/:${el.id}`}>
                                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                            </Link>
                            <div className="rating-circle">
                                <div className="rating">
                                    <h4 style={{display: "flex",
                                        alignItems: "flex-start"}}>
                                        {el.vote_average}
                                        <p style={{fontSize: "5px", marginTop: "3px"}}>%</p>
                                    </h4>
                                </div>
                            </div>
                            <div style={{width: "220px", fontSize:"12px"}}>
                                <h2>{el.title}</h2>
                            </div>
                            <h4>{el.release_date}</h4>
                        </div>
                    ))
                }
            </div>

            <div style={{padding: "20px 0"}}>
                {
                    pages.map(el => (
                        <button
                            className="button-pages"
                            onClick={() => changeCurrentPage(el)}
                            key={el}
                            style={{margin: "0 20px" , background:"white",padding:"5px",borderRadius:"1px",}}></button>
                    ))
                }
            </div>

        </div>
    );
};

export default Movies;