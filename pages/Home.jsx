const { NavLink, withRouter } = ReactRouterDOM

export class Home extends React.Component {

    render() {
        return (
            <section>
                <div className="hero-img">
                <NavLink to="/mail" className="bigBtn">Start {">"}</NavLink>

                </div>


            </section>
        )
    }
}