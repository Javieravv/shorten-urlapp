// Aquí llamamos a la api de shorten

import axios from 'axios'

const shortenUrlApi = axios.create({
    baseURL: 'https://api.shrtco.de/v2/shorten'
})

export const callShortenUrlApi = async () => {
    const { data } = await shortenUrlApi.get(`url=www.ramajudicial.gov.co`);
    console.log ( data )
}

export default shortenUrlApi
