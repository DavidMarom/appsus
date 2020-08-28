

export function Filter(props) {
    return <section className="filter">
        <h2>Filter</h2>
        <input type="text" placeholder="Filter by Name" onChange={(ev)=>{
            props.onSetFilter(ev.target.value)
        }}/>
    </section>
}