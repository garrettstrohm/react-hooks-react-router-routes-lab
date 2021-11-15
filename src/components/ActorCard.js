

function ActorCard({name, movies}) {

    const moviesList = movies.map(movie => <li>{movie}</li>)

    return (
        <div>
            <h3>Name: {name}</h3>
            <p>Movies:</p>
            <ul>
                {moviesList}
            </ul>
        </div>
    );
}

export default ActorCard;