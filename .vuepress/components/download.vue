<template>
  <p>
    <a :href="downloadUrl" target="_blank" rel="noopener noreferrer">
      Download
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
      var urlA = await this.getAdFlyUrl(this.url)
      // 
      this.downloadUrl = urlA
    } catch (error) {
      this.downloadUrl = this.url
      // Î
    }

    // try {
    //   var urlB = await this.getExeIoUrl(urlA)
    //   
    //   this.downloadUrl = urlB
    // } catch (error) {
    //   this.downloadUrl = urlA
    //   
    // }

  },
  methods: {
    // getExeIoUrl(url) {
    //   
    //   const apiUrl = `https://exe.io/api?api=5ea8711d2072fee12a2add079017cde7f1d37505&url=`
    //   return new Promise((resolve, reject) => {
    //     axios
    //       .get(apiUrl + url)
    //       .then((res) => {
    //         const data = res.data
    //         
    //         if (data.status === 'success') {
    //           resolve(data.shortenedUrl)
    //         }
    //       })
    //       .catch((err) => {
    //         reject(err)
    //       })
    //   })
    // },

    getAdFlyUrl(url) {
      
      const apiUrl = `https://api.adf.ly/v1/shorten`
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
    //   
    //   const apiUrl = `https://ouo.io/api/4bYD70sr?s=`
    //   return new Promise((resolve, reject) => {
    //     axios
    //       .get(apiUrl + url, {
    //         withCredentials: true,
    //       })
    //       .then((res) => {
    //         const data = res.data
    //         
    //         if (data) {
    //           resolve(data)
    //         }
    //       })
    //       .catch((err) => {
    //         
    //         reject(url)
    //       })
    //   })
    // },
  },
}
</script>

<style></style>
