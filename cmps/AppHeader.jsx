const { NavLink, withRouter } = ReactRouterDOM

function _NavBar(props) {

    function goBack() {
        props.history.goBack()
    }

    return <section className="navbar">

        <nav className="icons">
            <span onClick={goBack}><i className="fas fa-arrow-left"></i></span>
            <NavLink exact activeClassName='active-nav' className="nav-btn" to="/"><i className="fas fa-home"></i></NavLink>
            <NavLink exact activeClassName='active-nav' className="nav-btn" to="/book"><i className="fas fa-book-open"></i></NavLink>
            <NavLink exact activeClassName='active-nav' className="nav-btn" to="/mail/list/inbox"><i className="fas fa-envelope"></i></NavLink>
            <NavLink exact activeClassName='active-nav' className="nav-btn" to="/note"><i className="fas fa-thumbtack"></i></NavLink>
        </nav>

    </section>
}

export const NavBar = withRouter(_NavBar)