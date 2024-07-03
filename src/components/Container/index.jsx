import './Container.css'

function Container({children}){
    return(
        <section className="xontainer">
            {children}
        </section>
    )
}

export default Container