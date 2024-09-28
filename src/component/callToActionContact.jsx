//the callToActionContact.jsx, Luis Eduardo Orjuela Rojas, 301474380, 28/09/2024
//Import css
import "../../style/callToAction.css"
//import react touter dom for link
import { Link } from 'react-router-dom';

export default function CallToAction()
{
    return <>
    <Link to ="/Contact" className='btn btn-link'><button class="btn btn-primary btn-action callToAction"><i class="icon icon-people"></i></button></Link>
    </>
}

