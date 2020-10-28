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
      exeio: {
        apiToken: '5ea8711d2072fee12a2add079017cde7f1d37505',
      },
      adfly: {
        domain: 89866,
        advert_type: 1,
        group_id: 0,
        custom_name: '',
        loggedShorten: true,
        csrfToken: '2254f172add2812fd792822f818cca8d',
        _user_id: 24220063,
        _api_key: '15c8d2b1cd28e56db36e7cce06b14f5f'
      }
    }
  },
  props: {
    url: {
      required: true,
      type: String,
    },
  },
  created() {
    let exeioUrl = `https://exe.io/api?api=${this.exeio.apiToken}&url=${this.url}
`
    let adflyUrl = 'https://login.adf.ly/shortener/shorten'
    new Promise((resolve, reject) => {
      axios.get(exeioUrl).then((res) => {
        console.log('res: ', res.data)
        let data = res.data
        if (data.status === 'success') {
          // this.downloadUrl = data.shortenedUrl
          resolve(data.shortenedUrl) 
        }
      })
    }).then(url => {
      this.adfly.url = url
      axios.post(adflyUrl, this.adfly).then(res => {
        console.log('res2: ', res.data);

      }).catch(err => {
        console.log('err: ', err);
        this.downloadUrl = url
      })
    })
  },
}
</script>

<style></style>
