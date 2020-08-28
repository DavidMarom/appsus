const { NavLink, withRouter } = ReactRouterDOM

function _NavBar(props) {

    function goBack() {
        props.history.goBack()
    }

    return <section className="navbar">

        <nav>
            <NavLink exact activeClassName='active-nav' className="nav-btn" to="/mail/list/inbox">Mail</NavLink>
            <NavLink exact activeClassName='active-nav' className="nav-btn" to="/note">Notes</NavLink>
            <NavLink exact activeClassName='active-nav' className="nav-btn" to="/">Home</NavLink>
            

            <button onClick={goBack}>Back</button>
        </nav>

    </section>
}

export const NavBar = withRouter(_NavBar)