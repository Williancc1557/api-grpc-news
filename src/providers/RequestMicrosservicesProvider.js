const axios = require('axios')

class MicrosservicesRequestsProvider {
    async getGameNewsRecent() {
        const { data } = await axios.get("https://game-news-api.herokuapp.com")
        return data
    };

    async getAllGameNews(requestsNumber = 0) {
        const { data } = await axios.get("https://game-news-api.herokuapp.com/all", {
            headers: {
                requestsNumber
            }
        })
        return data
    }
};

new MicrosservicesRequestsProvider().getAllGameNews()

module.exports = MicrosservicesRequestsProvider