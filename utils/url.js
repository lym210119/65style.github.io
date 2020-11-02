import axios from 'axios'
import qs from 'qs'

const axios = require('axios')
const qs = require('qs')

const args = process.argv.slice(2)



const exeioConf = {
  id: 'exeio',
  apiUrl: `https://exe.io/api`,
  method: 'GET',
  data: function(url){
    return {
      api: '5ea8711d2072fee12a2add079017cde7f1d37505',
      url: url
    }
  },
}

const adFlyConf = {
  id: 'adfly',
  apiUrl: `https://api.adf.ly/v1/shorten`,
  method: 'POST',
  data:  function(url) {
    return qs.stringify({
      url: url,
      _user_id: '24220063',
      _api_key: '15c8d2b1cd28e56db36e7cce06b14f5f',
      csrfToken: '5b0888f137038ad7fee8eff9f691d170',
      advert_type: 1,
      domain: 'adf.ly',
    })
  }
}


function getShortUrl(targetUrl, config) {
  console.log('getExeIoUrl')
  const apiUrl = config.apiUrl
  return new Promise((resolve, reject) => {
    const data = config.data(targetUrl)
    console.log('data: ', data);
    axios({
      url: apiUrl,
      method: config.method,
      data: data,
    })
      .then((res) => {
        const data = res.data
        console.log('data1: ', data)
        if (config.id === 'exeio') {
          resolve(data.shortenedUrl)
        } else if (config.id === 'adfly') {
          resolve(data.data[0]['short_url'])
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}

(async function () {
  try {
    var urlA = await getShortUrl(args[0], exeioConf)
    console.log(urlA)
  } catch (error) {
    console.log('error: ', error);
    console.log(args[0]);
  }

  try {
    var urlB = await getShortUrl(urlA, adFlyConf)
    console.log(urlB)
  } catch (error) {
    console.log('error: ', error);
    console.log(urlA);
  }


})()


