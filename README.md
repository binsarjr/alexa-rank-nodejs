# alexa-rank-nodejs

[![npm](https://nodei.co/npm/alexa-rank-nodejs.png?downloadRank=true)](https://www.npmjs.com/package/alexa-rank-nodejs)

![npm version](https://img.shields.io/npm/v/alexa-rank-nodejs)
![lisence](https://img.shields.io/npm/l/alexa-rank-nodejs)
![issues](https://img.shields.io/github/issues/binsarjr/alexa-rank-nodejs)
![downloads month](https://img.shields.io/npm/dm/alexa-rank-nodejs)
![downloads](https://img.shields.io/npm/dt/alexa-rank-nodejs)

I ❤️ NodeJS

This module retrieves your website ranking information from [alexa](https://www.alexa.com/), and there are also some features for other ranking checks

# Includes
- [request](https://www.npmjs.com/package/request)
- [request-promise-native](https://www.npmjs.com/package/request-promise-native)
- [fake-useragent](https://www.npmjs.com/package/fake-useragent)
- [is-valid-domain](https://www.npmjs.com/package/is-valid-domain)


# Requirements
- [NodeJS](https://nodejs.org/en/download/)
- [NPM](https://www.npmjs.com/)

# Instalation
installation is done using `npm install` command
```
$ npm install alexa-rank-nodejs
```

# Features
- check your website ranking
- check website rankings globally
- check website ranking by country
- this module already supports [typescript](https://www.typescriptlang.org/)

# Usage
There are several functions that you can use,
this module already supports typescript, but in the example below I will give examples for javascript and,
create a file called `index.js` to try some of the code below :
## 1. siteinfo()
This method will give your website ranking information from [alexa](https://www.alexa.com/)

write the code below
```
const AlexaRank = require('alexa-rank-nodejs').default;

(async () => {
    var data = await AlexaRank.siteinfo('google.com');
    console.log(data);
})()
```
then, run the command `node index.js`
and this is the results
```
{
  status: 200,
  message: 'Data successfully retrieved',
  data: {
    site_rank: '1',
    top_keywords: [
      'gmail',
      ...
      'google'
    ],
    similar_sites: [
      'youtube.com',
      ...
      'blogspot.com'
    ]
  }
}
```
## 2. topsite()
This method will give you global website ranking information

write the code below
```
const AlexaRank = require('alexa-rank-nodejs').default;

(async () => {
    var data = await AlexaRank.topsite();
    console.log(data);
})()
```
then, run the command `node index.js` and this is a results
```
{
  status: 200,
  message: 'Data successfully retrieved',
  data: [
    { rank: 1, site: 'Google.com' },
    { rank: 2, site: 'Youtube.com' },
    ...
    { rank: 49, site: 'Yandex.ru' },
    { rank: 50, site: 'Myshopify.com' }
  ]
}
```

## 3. topByCountry()
This method will give you website ranking information by country

write the code below
```
const AlexaRank = require('alexa-rank-nodejs').default;

(async () => {
    var data = await AlexaRank.topByCountry('id'); // Indonesia
    console.log(data);
})()
```
then,run the command `node index.js` and this is a results
```
{
  status: 200,
  message: 'Data successfully retrieved',
  data: [
    { rank: 1, site: 'Okezone.com' },
    { rank: 2, site: 'Google.com' },
    { rank: 3, site: 'Tribunnews.com' },
    ...
    { rank: 49, site: 'Akurat.co' },
    { rank: 50, site: 'Ilovepdf.com' }
  ]
}
```

# Happy Coding ❤️
Thank you for using the module from me