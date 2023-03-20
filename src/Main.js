import ReactMarkdown from "react-markdown";
import logo from './tribe.png';

function Main({activeNote, onUpdateNote}) {

    const onEditFeild = (key, value) => {
        
        onUpdateNote({
            ...activeNote,
            
            [key]: value,
            lastModified: Date.now(),
        })

    
    };

    if(!activeNote)
    return <div className="no-active-note"> No note here</div>

    return (
        <div className="app-main">
            <img src={logo} />
            <div className="app-main-note-edit">

                <input type="test" 
                id="title" 
                value={activeNote.title} 
                onChange={(e) => onEditFeild("title", e.target.value)}
                autoFocus />

                <textarea id="body" 
                placeholder="Write your note  here..."
                value={activeNote.body} 
                onChange={(e) => onEditFeild("body", e.target.value)}/>

                </div>
            <div className="app-main-note-preview">
                <h1 className="preview-title">{activeNote.title}</h1>
                <ReactMarkdown className="markdown-preview">
                    {activeNote.body}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default Main