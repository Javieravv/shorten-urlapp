import { ChangeEvent, FC, useState } from 'react';
import './scss/shortencomponent.scss';
import shortenUrlApi, { callShortenUrlApi } from '../utils/shortenUrlApi';
import axios from 'axios';

interface urlShorten {
    urlOrigin: string;
    urlShorten: string;
    urlCopy: boolean;
}

interface urlShortenError {
    error: boolean;
    message: string;
}

const ItemUrlShorten: FC<urlShorten> = ({ urlOrigin, urlShorten, urlCopy }) => {
    const [urlCopied, setUrlCopied] = useState(urlCopy)
    const handleCopyUrlClipboard = () => {
        console.log ('VAMOS A COPIAR LA VARIABLE ', urlShorten , ' AL PORTAPAPELES')
        navigator.clipboard.writeText(urlShorten)
            .then ( () => { setUrlCopied( true )})
            .catch ( (error) => setUrlCopied( false ))

    }
    return (
        <article className="item-urlshorten">
            <p className="origin-url">{urlOrigin}</p>
            <p className="shorten-url">{urlShorten}</p>
            <button 
                className={`button-copyurl ${ urlCopied ? 'urlcopied' : '' } `}
                onClick={ handleCopyUrlClipboard }
            >
                {
                    urlCopied ? 'Copied!' : 'Copy'
                }
            </button>
        </article>
    )
}


export const ShortenComponent = () => {
    const [listUrls, setListUrls] = useState<urlShorten[]>([])
    const [valueUrl, setValueUrl] = useState('')
    const [errorUrlShorten, setErrorUrlShorten] = useState<urlShortenError>({
        error: false,
        message: 'Please add a link'
    })

    const handleButtonClick = () => {
        axios.get(`https://api.shrtco.de/v2/shorten?url=${valueUrl}`)
            .then((response) => {
                const newUrlShorten: urlShorten = {
                    urlOrigin: response.data.result.original_link,
                    urlShorten: response.data.result.short_link,
                    urlCopy: false,
                }
                setListUrls(
                    [...listUrls, newUrlShorten],
                )
                setErrorUrlShorten({
                    error: false,
                    message: ''
                })
                setValueUrl('')
            })
            .catch((error) => {
                // console.log(' ERROR PRESENTADO ', error.response.data)
                // Vienen diferentes tipos de error
                switch (error.response.data.error_code) {
                    case 1: // No hay url parámetro
                        setErrorUrlShorten({
                            error: true,
                            message: 'No url parameter set. Please add a valid url'
                        })
                        break;
                    case 2: // Dirección inávlida.
                        setErrorUrlShorten({
                            error: true,
                            message: 'This is not a valid URL. Please add a valid url'
                        })
                        break;

                    default:
                        break;
                }
            })
    }

    const handleChangeValueUrl = (event: ChangeEvent<HTMLInputElement>) => {
        setValueUrl(event.target.value)
    }

    return (
        <section className='shorten-container'>
            <article className='marco-shortencomponent'>
                <input
                    type="text"
                    name="valueUrl"
                    id="input-url"
                    placeholder='Shorten a link here...'
                    className='input-url'
                    value={valueUrl}
                    onChange={handleChangeValueUrl}
                />
                <button
                    className="button-shortencomponent"
                    onClick={handleButtonClick}
                >
                    Shorte It!
                </button>
                {
                    errorUrlShorten.error
                        ? <p className='shorten-errormessage'> { errorUrlShorten.message }  </p>
                        : ''
                }

            </article>
            <article className="list-urlshorten">
                {
                    listUrls.map(urlItem => (
                        <ItemUrlShorten
                            urlOrigin={urlItem.urlOrigin}
                            urlShorten={urlItem.urlShorten}
                            urlCopy={false}
                            key={urlItem.urlShorten}
                        />
                    ))
                }
            </article>
        </section>
    )
}
