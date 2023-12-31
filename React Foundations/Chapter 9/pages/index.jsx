import { useState } from 'react';

function Header({title}) {
    console.log({title});
    return (<h1>{title ? title : 'Default title'}</h1>)
};

export default function HomePage() {

    const names = ['John Doe', 'Bruce Wayne', 'John Wick'];

    const [likes, setLikes] = useState(0);

    function handleClick() {
        console.log("increment like count");
        setLikes(likes + 1 );
    }

    return(
        <div>
            <Header title="Develop. Preview. Ship. 🚀"/>
            <ul>
                {names.map((name => (
                    <li key={name}>{name}</li>
                )))}
            </ul>

            <button onClick={handleClick}>Like ({likes})</button>
        </div>
    );
}