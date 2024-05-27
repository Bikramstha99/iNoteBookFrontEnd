import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const s1 = {
        "name": "Bikram",
        "class": "5b"
    };
    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Bikash",
                "class": "3a"
            });
        }, 1000);
    };
    return (
        <NoteContext.Provider value={{ state, update }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;
