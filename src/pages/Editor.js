import { useState } from "react";

import ReactQuill from "react-quill";


import "quill/dist/quill.bubble.css";

function Editor() {
   
    const placeholder = "Compose an epic...";

    const [value, setValue] = useState("");

    console.log(value);

    return (
        <div className="bg-red-200 w-48 h-20">
            <ReactQuill
                theme="bubble"
                value={value}
                placeholder={placeholder}
                onChange={setValue}
            />
        </div>
    );
}

export default Editor;
