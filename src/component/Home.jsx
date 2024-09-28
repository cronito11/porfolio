//the Home.jsx, Luis Eduardo Orjuela Rojas, 301474380, 28/09/2024
//Import css
import '../../style/home.css'
//import call to action button
import CallToAction from './callToActionContact'

export default function Home()
{
    return <>
    <section className="banner">
        <h1>I'm Luis Orjuela</h1>
        <h3>Game developer</h3>
        <h2>Making the impossible possible</h2>
    </section>        
    <CallToAction/>
    </>
}