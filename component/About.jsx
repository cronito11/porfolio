//the About.jsx, Luis Eduardo Orjuela Rojas, 301474380, 28/09/2024
import { Link } from "react-router-dom"
import resume from "../src/assets/Game Developer CV- Luis Orjuela.pdf";
import "../style/aboutMe.css"
function DownloadPdf(url)
{
    // using Java Script method to get PDF file
    fetch(url).then((response) => {
        console.log(url);
        response.blob().then((blob) => {
        
            // Creating new object of PDF file
            const fileURL =
                window.URL.createObjectURL(blob);
                
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "resume.pdf";
            alink.click();
        });
    });
    
}

export default function About ()
{
    return <>
    <h1>About me</h1>
    <img src="../src/assets/myself.jpg" class="img-responsive s-circle" id="aboutMyPhoto" alt="..." />
        <p>Hello, I'm Luis Eduardo Orjuela Rojas. I'm Game developer with over 9 years of experience making significant contributions to teams of varying sizes and scopes
         in both standalone and mobile platforms. During this time, I have actively contributed to the development and publication 
         of over fifteen games, several of which have received industry recognition and awards. I am deeply passionate about teamwork, 
         consistently going the extra mile to ensure the quality and seamless operation of products and services delivered.
        </p>
        <button class="btn btn-primary" onClick={()=> DownloadPdf(resume)}>Resume</button>
    </>
}

