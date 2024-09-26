const cardsInformation = [{
        cardTitle : "Champions Ascension",
        cardSubtitle : "Role: Unity Developer",
        cardBody : "Project Goals: Develop an innovative AAA game offering an exceptional user experience with NFTs and blockchain integration." +
        "\nMy Contribution: Collaborated with design, backend, and programming teams to implement advanced gameplay mechanics. Emphasized intuitive GUIs and innovative UI features for enhanced user engagement and navigation.",
        imgUrl : <><iframe width="1707" height="630" src="https://www.youtube.com/embed/gDk2OHamoe0" title="Champions Ascension - Official Gameplay Trailer | Massina Awaits" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></>
    },
    {
        cardTitle : " Almighty Idiots ",
        cardSubtitle : "Role: Programmer",
        cardBody : " We aimed to engage users through optimized performance and intriguing gameplay, ensuring a seamless experience across devices. By focusing on innovative game mechanics and captivating visuals, we kept players immersed and satisfied. My contributions included creating diverse character mechanics and optimizing game performance through techniques in materials, code, lighting, and other critical aspects. I meticulously integrated assets like UI elements, SFX, and VFX to enhance immersion, polishing the game.",
        imgUrl : <><iframe width="1707" height="630" src="https://www.youtube.com/embed/P2oWv47BtMM" title="Almighty Idiots" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></>
    },
    {
        cardTitle : "Camusi Palabras",
        cardSubtitle : "Role: Unity Developer",
        cardBody : "Video game development for Camusi-Camusi TV Show."+ "\nAwards."+ "\n-Camusi Camusi. (Best application for early childhood. Brasil. Comkids 2018)"+
"\n\nMy contributions included integrating assets, animations, UI development, mechanics creation, lighting adjustments, SFX integration, optimization for multiple platforms, and developing tutorials. This achievement highlighted our team's ability to create an engaging and educational experience for young children, reinforcing our commitment to quality and innovation in interactive media for education and entertainment.",
        imgUrl : <><iframe width="1707" height="630" src="https://www.youtube.com/embed/SjJTSxM3U6s" title="Trailer - App Camusi Camusi Palabras (Android - iOS)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></>
    }
]
export default function Project()
{
    return <>
    <h1>Projects</h1>
    <div className="columns">
        {CreateCard(cardsInformation[0].imgUrl,cardsInformation[0].cardTitle,cardsInformation[0].cardSubtitle, cardsInformation[0].cardBody)}
        {CreateCard(cardsInformation[1].imgUrl,cardsInformation[1].cardTitle,cardsInformation[1].cardSubtitle, cardsInformation[1].cardBody)}
        {CreateCard(cardsInformation[2].imgUrl,cardsInformation[2].cardTitle,cardsInformation[2].cardSubtitle, cardsInformation[2].cardBody)}
       </div>
    </>
}


function CreateCard(imgUrl, cardTitle, cardSubtitle, cardBody)
{
    return <>
    <div class="card column col-4 col-xs-6">
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
    </>
}