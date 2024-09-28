//the Services.jsx, Luis Eduardo Orjuela Rojas, 301474380, 28/09/2024
import { projectInfo, servicesInfo } from './data';

export default function Services()
{
    return <>
    <h1>Services</h1>
    <div class="columns">
       { servicesInfo.map((info,index) =>(
          CreateCard(info.imgUrl, info.cardTitle)  
        ))
    }
    </div>
    </>
}

function CreateCard(imgUrl, cardTitle)
{
    return <>
    <div class="card column col-6 col-xs-6 bg-primary">
    <figure class="figure p-centered">
        <img class="img-responsive" src={imgUrl}/>
        <figcaption class="figure-caption text-secondary">{cardTitle}</figcaption>
        </figure>
    </div>
    </>
}