const MicrosservicesRequestsProvider = require('../providers/RequestMicrosservicesProvider')


const getGameNewsRecentMethod = async (_, callback) => {
    const request = await new MicrosservicesRequestsProvider().getGameNewsRecent()

    callback(null, request)
}

const getAllGameNewsMethod = async (_, callback) => {
    const request = await new MicrosservicesRequestsProvider().getAllGameNews()

    callback(null, {
        allNews: request
    })
}

const getTechnology = async ({ requestsNumber }, callback) => {
    const request = await new MicrosservicesRequestsProvider().getTechnologyNews(requestsNumber)

    callback(null, {
        newTechnology: request
    })
}

module.exports = { getGameNewsRecentMethod, getAllGameNewsMethod, getTechnology }