
function MovieCards({title, time, genres}){

    const genreList = genres.map(genre => <li>{genre}</li>)
    return(
        <div>
            <h3>Name: {title}</h3>
            <p>Time: {time}</p>
            <p>Genres:</p>
            <ul>
                {genreList}
            </ul>
        </div>
    );
}

export default MovieCards