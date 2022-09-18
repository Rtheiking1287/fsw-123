import {useState, useEffect} from "react";

function UseEffectForm() {

const [imgSrc, setImgSrc] = useState('basketball');
const [alt, setAlt] = useState('');

const API ="69y0qtoaWktRBqX7N8rzRxpZq6CkqHu2"
const URL = `https://api.giphy.com/v1/gifs/trending?q=${imgSrc}&apiKey=${API}`

useEffect(() => {

    fetch(`https://api.giphy.com/v1/gifs/trending?q=${imgSrc}&apiKey=${API}`)
        .then((response) => response.json())
        .then((data) => setAlt(data.pictures))
        .catch ((error)=> console.log(error))
}, []);

const getAlt = () => {

    fetch(URL)
        .then((response) => response.json())
        .then((data) => setAlt(data.pictures))
        .catch ((error)=> console.log(error))
}

const handleClick = () => {
    getAlt();
}

const handleChange = (event) => {
    setImgSrc(event.target.value)
}

return (
    <>
        <header>
            <input
                type ="text"
                value={alt}
                onChange={handleChange}
                />
                <button onClick = {handleClick}>Search GIPHY</button>
        </header>
        <main>
            {
                alt &&
                alt.localeCompare((item, index) => <div className="article" key={index}>{item.description}</div>)
            }
        </main>
    </>
);
}

export default UseEffectForm;