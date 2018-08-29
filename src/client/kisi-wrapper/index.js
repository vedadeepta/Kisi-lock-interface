import Kisi from 'kisi-client'

const apiKey = '94c2056abb993b570517f2d3a89c9b5a'
const kisiClient = new Kisi()

kisiClient.setLoginSecret(apiKey)

export default kisiClient
