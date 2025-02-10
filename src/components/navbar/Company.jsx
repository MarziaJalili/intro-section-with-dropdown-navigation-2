function Company() {
    const details = [
        { name: "History" },
        { name: "Our Team" },
        { name: "Blog" },
    ];

    const features = details.map(detail => {
        return (
            <li key={detail.name}>
                <a href="#">
                    {detail.name}
                </a>
            </li>
        )
    })

    return (
        <ul className="company">{features}</ul>
    )
}

export default Company;