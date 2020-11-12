import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const initialMovie = {
    id: 0,
    title: "",
    director: "",
    metascore: '',
    stars: []
}

const AddMovie = () => {
    const [addMovie, setAddMovie] = useState(initialMovie)

    const changeHandler = e => {
        setAddMovie({ ...addMovie, [e.target.name]: e.target.value })
    }
    const submit = (e) => {
        e.preventDefault()
        axios
            .post('http://localhost:5000/api/movies', addMovie)
            .then(res => {
                console.log(res)
                setAddMovie(initialMovie)
            })

            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input
                    type="text"
                    name="title"
                    onChange={changeHandler}
                    placeholder="title"
                    value={addMovie.title}
                >
                </input>
                <input
                    type="text"
                    name="director"
                    onChange={changeHandler}
                    placeholder="director"
                    value={addMovie.director}
                >
                </input>
                <input
                    type="text"
                    name="metascore"
                    onChange={changeHandler}
                    placeholder="metascore"
                    value={addMovie.metascore}
                >
                </input>


                <button>Submit</button>
            </form>
        </div>
    )
}
export default AddMovie