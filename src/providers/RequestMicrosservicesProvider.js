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

    async getTechnologyNews(requestsNumber = 10) {
        const { data } = await axios.get("https://technology-news-api.herokuapp.com", {
            headers: {
                requestsNumber
            }
        })
        console.log(data)
        return data
    }
};

new MicrosservicesRequestsProvider().getAllGameNews()

module.exports = MicrosservicesRequestsProvider