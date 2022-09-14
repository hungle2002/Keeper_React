import React, {useState} from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note"
import CreateArea from "./CreateArea"

function App(){
    const [notes, setNotes] = useState([
        {
            title : "Note title",
            content: "Note content"
        }
    ])

    function deleteNote(id){
        setNotes(prevValue=>{
            return prevValue.filter((curNote, index)=>{
                return index !==id;
            })
        })
    }

    function onAdd(input){
        setNotes(prevValue=>{
            return [...prevValue, input];
        })
    }
    

    return <div>
        <Header/>
        <CreateArea add={onAdd} />
        {notes.map((note, index) => <Note key={note.key} id={index} 
        title={note.title} 
        content={note.content} 
        dele={deleteNote}/>)}
        <Footer/>
    </div>
}
export default App;

