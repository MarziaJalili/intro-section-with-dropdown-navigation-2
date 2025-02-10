function Companies() {
    const companiesData = [
        {
            id: 1,
            src: "./images/client-databiz.svg",
            alt: "client-databiz"
        },
        {
            id: 2,
            src: "./images/client-audiophile.svg",
            alt: "client-audiophile"
        },
        {
            id: 3,
            src: "./images/client-meet.svg",
            alt: "client-meet"
        },
        {
            id: 4,
            src: "./images/client-maker.svg",
            alt: "client-maker"
        }
    ];

    const companies = companiesData.map(company => {
        return (
            <li key={company.id}>
                <img src={company.src} alt={company.alt} />
            </li>
        )
    })

    return (
        <ul>
            {companies}
        </ul>
    )
}


export default Companies;