import React, { useEffect, useState } from "react";
import './ChuckNorrisJokes.css'


const ChuckNorrisJokes = () => {
const [joke, setJoke] = useState('');
const [loading, setLoading] = useState(true);


    const fetchOneJoke = async () => {
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            const data = await response.json();
            setJoke(data.value);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching the joke', err);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchOneJoke();
    }, []);

    return (
        <div>
            <h1>Chuckles with Chuck</h1>
            {loading ? <p>Loading...</p> : <p>{joke}</p>}
            <button className="jokeButton" onClick={fetchOneJoke}>Get another joke!</button>
        </div>
    );
}

export default ChuckNorrisJokes;
