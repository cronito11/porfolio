//the callToActionContact.jsx, Luis Eduardo Orjuela Rojas, 301474380, 28/09/2024

import { Link } from 'react-router-dom';
import "../style/callToAction.css"

export default function CallToAction()
{
    return <>
    <Link to ="/Contact" className='btn btn-link'><button class="btn btn-primary btn-action callToAction"><i class="icon icon-people"></i></button></Link>
    </>
}

