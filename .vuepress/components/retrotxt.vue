<template>
  <ClientOnly>
    <article class="has-center theme-msdos-fg" style="">
      <slot></slot>
    </article>
  </ClientOnly>
</template>

<script>
export default {
  // props: {
  //   className: {
  //     type: String,
  //     required: true,
  //   },
  // },
}
</script>

<style scoped>
@import '../styles/retrotxt.css';
@import '../styles/text_colors.css';
@import '../styles/text_colors_white_bg-fixes.css';

.content__default pre,
.content__default pre[class*='language-'] {
  line-height: 1;
  /* background-color: #ffffff; */
}
</style>
