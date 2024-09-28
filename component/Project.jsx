//the Project.jsx, Luis Eduardo Orjuela Rojas, 301474380, 28/09/2024
import { projectInfo } from './data';

export default function Project()
{
    return <>
    <h1>Projects</h1>
    <div className="columns">
    { projectInfo.map((info,index) =>(
          CreateCard(info.imgUrl, info.cardTitle, info.cardSubtitle, info.cardBody)  
        ))
    }
       </div>
    </>
}


function CreateCard(imgUrl, cardTitle, cardSubtitle, cardBody)
{
    return <>
    <div class="column col-4 col-xs-6">
        <div className='card'>
        <div class="card-image">
            <div class="video-responsive video-responsive-4-3">
            {imgUrl} 
</div>
        </div>
        <div class="card-header">
            <div class="card-title h5"> {cardTitle} </div>
            <div class="card-subtitle text-gray">{cardSubtitle}</div>
        </div>
        <div class="card-body">
            {cardBody}
        </div>
        </div>
    </div>
    </>
}