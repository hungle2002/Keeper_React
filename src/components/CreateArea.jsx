import React, { useState } from "react";

function CreateArea(prop) {
    const [input, setInput]=useState({
        title:"",
        content:""
    });

    function updateInput(event){
        const {value, name} = event.target;
        setInput((prevValue)=>{
            return {
                ...prevValue,
                [name]:value
            }
        })
    }

    function handleSubmit(event){
        prop.add(input);
        setInput({title:"",content:""});
        event.preventDefault();
    }
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={updateInput}  name="title" placeholder="Title" value={input.title} />
        <textarea onChange={updateInput} name="content" placeholder="Take a note..." rows="3" value={input.content} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
