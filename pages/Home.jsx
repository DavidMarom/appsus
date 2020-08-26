const { NavLink, withRouter } = ReactRouterDOM

export class Home extends React.Component {

    render() {
        return (
            <section>
                <h1>Home</h1>

                <NavLink to="/book" className="bigBtn">See the book collection</NavLink>
            </section>
        )
    }
}