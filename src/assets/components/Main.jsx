import languages from "./data/languages"
import MainButtons from "./MainButtons"
import MainDescription from "./MainDescription"
import { useState } from "react";

function Main(){

    const [activeButton, setActiveButton] = useState(null);
    
    return <main className="container my-5">
        <div className="buttons d-flex justify-content-between">
        
        {languages.map(language => <MainButtons 
        key = {language.id} 
        title = {language.title} 
        isStatusTrue = {activeButton === language.id}
        onToggle = {()=> setActiveButton(activeButton === language.id ? null : language.id)}
        />)}
        </div>
        

        <div className="description container p-3 border my-3">
            {activeButton === null ? <p className="text-center text-danger fs-4">Non ci sono linguaggi selezionati!</p> : 
                languages.map(language => <MainDescription
                key={language.id} 
                description = {language.description} 
                isStatusTrue = {activeButton === language.id}
            />)}
        </div>
    </main>
}

export default Main