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

  mounted() {
    this.getExeIoUrl(this.url).then(url1 => {
      console.log('url1 ', url1);
      this.getOuoIoUrl(url1).then(url2 => {
        this.downloadUrl = url2
      }).catch(url1 => {
        this.downloadUrl = url1
      })
    }).catch(url => {
      this.downloadUrl = url
    })
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
            console.log('data1: ', data);
            if (data.status === 'success') {
              resolve(data.shortenedUrl)
            }
          })
          .catch((err) => {
            console.log('err: ', err)
            reject(url)
          })
      })
    },

    getOuoIoUrl(url) {
      console.log('getOuoIoUrl')
      const apiUrl = `http://ouo.io/api/4bYD70sr?s=`
      return new Promise((resolve, reject) => {
        axios
          .get(apiUrl + url)
          .then((res) => {
            const data = res.data
            console.log('data2: ', data);
            if (data.status === 'success') {
              resolve(data.shortenedUrl)
            }
          })
          .catch((err) => {
            console.log('err: ', err)
            reject(url)
          })
      })
    },
  },
}
</script>

<style></style>
