import './scss/shortencomponent.scss';

const ItemUrlShorten = () => {
    return (
        <article className="item-urlshorten">
            <p className="origin-url">https://midireccionulr.larga.com</p>
            <p className="shorten-url">https://epc.kal.ll</p>
            <button className="button-copyurl">
                Copy
            </button>
        </article>
    )
}


export const ShortenComponent = () => {
    return (
        <section className='shorten-container'>
            <article className='marco-shortencomponent'>
                <input
                    type="text"
                    name="input-url"
                    id="input-url"
                    placeholder='Shorten a link here...'
                    className='input-url'
                />
                <button className="button-shortencomponent">
                    Shorte It!
                </button>
                <p className='shorten-errormessage'>Error message!!</p>
            </article>
            <article className="list-urlshorten">
                <ItemUrlShorten />
            </article>
        </section>
    )
}
