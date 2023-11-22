'use client'

import { useState } from "react";

export default function LikeButton() {
    
    const [likes, setLikes] = useState(0);
    
    function handleClick(){
        setLikes( 1+ likes );
    }

    return <button onClick={handleClick}>Like ({likes})</button>
}