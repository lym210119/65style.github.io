<template>
  <p>
    <a :href="downloadUrl" target="_blank" rel="noopener noreferrer">
      Download after clicking the AD
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          width="15"
          height="15"
          class="icon outbound"
        >
          <path
            fill="currentColor"
            d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
          ></path>
          <polygon
            fill="currentColor"
            points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
          ></polygon>
        </svg>
        <span class="sr-only">(opens new window)</span>
      </span>
    </a>
  </p>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  data() {
    return {
      downloadUrl: '',
    }
  },
  props: {
    url: {
      required: true,
      type: String,
    },
  },

  async mounted() {
    try {
      var urlA = await this.getExeIoUrl(this.url)
      console.log('urlA: ', urlA)
      this.downloadUrl = urlA
    } catch (error) {
      this.downloadUrl = this.url
      console.log('errorA: ', error)
    }

    try {
      var urlB = await this.getShorteStUrl(urlA)
      console.log('urlB: ', urlB)
      this.downloadUrl = urlB
    } catch (error) {
      this.downloadUrl = urlA
      console.log('errorB: ', error)
    }

    try {
      var urlC = await this.getAdFlyUrl(urlB)
      console.log('urlC: ', urlC)
      this.downloadUrl = urlC
    } catch (error) {
      this.downloadUrl = urlB
      console.log('errorC: ', error)
    }
  },
  methods: {
    getExeIoUrl(url) {
      console.log('getExeIoUrl')
      const apiUrl = `https://exe.io/api?api=5ea8711d2072fee12a2add079017cde7f1d37505&url=`
      return new Promise((resolve, reject) => {
        axios
          .get(apiUrl + url)
          .then((res) => {
            const data = res.data
            console.log('data1: ', data)
            if (data.status === 'success') {
              resolve(data.shortenedUrl)
            }
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    getShorteStUrl(url) {
      console.log('getShorteStUrl')
      const apiUrl = `https://api.shorte.st/v1/data/url`
      const token = '5b4b18fd1ed64ace0e4779c56f25f2e1'
      return new Promise((resolve, reject) => {
        const data = qs.stringify({ urlToShorten: url })
        axios
          .put(apiUrl, data, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'public-api-token': token,
            },
          })
          .then((res) => {
            const data = res.data
            console.log('data2: ', data)
            if (data.status === 'ok') {
              resolve(data.shortenedUrl)
            }
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    getAdFlyUrl(url) {
      console.log('getAdFlyUrl')
      const apiUrl = `http://api.adf.ly/v1/shorten`
      return new Promise((resolve, reject) => {
        const data = qs.stringify({
          url: url,
          _user_id: '24220063',
          _api_key: '15c8d2b1cd28e56db36e7cce06b14f5f',
          csrfToken: '5b0888f137038ad7fee8eff9f691d170',
          advert_type: 1,
          domain: 'adf.ly',
        })
        axios
          .post(apiUrl, data, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          })
          .then((res) => {
            const data = res.data
            console.log('data3: ', data)
            if (data.data.length) {
              resolve(data.data[0]['short_url'])
            }
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    // getOuoIoUrl(url) {
    //   console.log('getOuoIoUrl')
    //   const apiUrl = `https://ouo.io/api/4bYD70sr?s=`
    //   return new Promise((resolve, reject) => {
    //     axios
    //       .get(apiUrl + url, {
    //         withCredentials: true,
    //       })
    //       .then((res) => {
    //         const data = res.data
    //         console.log('data2: ', data)
    //         if (data) {
    //           resolve(data)
    //         }
    //       })
    //       .catch((err) => {
    //         console.log('err: ', err)
    //         reject(url)
    //       })
    //   })
    // },
  },
}
</script>

<style></style>
