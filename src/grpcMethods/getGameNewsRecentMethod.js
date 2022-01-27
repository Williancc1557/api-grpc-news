const MicrosservicesRequestsProvider = require('../providers/RequestMicrosservicesProvider')


const getGameNewsRecentMethod = async (_, callback) => {
    const request = await new MicrosservicesRequestsProvider().getGameNewsRecent()

    callback(null, request)
}

const getAllGameNewsMethod = async ({ request: { requestsNumber } }, callback) => {
    const request = await new MicrosservicesRequestsProvider().getAllGameNews(requestsNumber)
    callback(null, {
        allNews: request
    })
}

module.exports = { getGameNewsRecentMethod, getAllGameNewsMethod }