const AlexaRank = require('alexa-rank-nodejs').default;

(async() => {
    var data = await AlexaRank.siteinfo('google.com');
    console.log(data);
})()

const AlexaRank = require('alexa-rank-nodejs').default;

(async() => {
    var data = await AlexaRank.topsite();
    console.log(data);
})()

(async() => {
    var data = await AlexaRank.topByCountry('id'); // Indonesia
    console.log(data);
})()