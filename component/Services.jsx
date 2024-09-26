const cardsInformation = [{
    cardTitle : "Apps",
    imgUrl : "../src/assets/btnApps.png"
},
{
    cardTitle : "Video Games",
    imgUrl : "../src/assets/btnVideojuegos.png"
},
{
    cardTitle : "Augmented Reality",
    imgUrl : "../src/assets/btnRealidadAumentada.png"
},
{
    cardTitle : "Virtual Reality",
    imgUrl : "../src/assets/btnRealidadAumentada.png"
}
]
export default function Services()
{
    return <>
    <h1>Services</h1>
    <div class="columns">
        {CreateCard(cardsInformation[0].imgUrl, cardsInformation[0].cardTitle)}
        {CreateCard(cardsInformation[1].imgUrl, cardsInformation[1].cardTitle)}
        {CreateCard(cardsInformation[2].imgUrl, cardsInformation[2].cardTitle)}
        {CreateCard(cardsInformation[3].imgUrl, cardsInformation[3].cardTitle)}
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