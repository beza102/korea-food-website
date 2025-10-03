export default function Header({ dishes }) {
    return (
        <header className="page-header">
            <h1>Korean Food</h1>
            <p>A guide to the flavor, and culture of korean cuisine</p>
            <nav aria-label="Main Navigation">
                <ul className="nav-list">
                    {}
                    {dishes.map((dish, index) => (
                        <li key={index}>
                            {}
                            <a href={dish.link}>{dish.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

