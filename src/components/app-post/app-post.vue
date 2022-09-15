<template>
  <div v-for="post of posts" :key="post.id" class="post">
    <div class="post__wrapper">
      <h2 class="post__title">{{ upperCaseFirstSimbol(post.title) }}</h2>
      <p class="post__text">{{ upperCaseFirstSimbol(post.body) }}</p>
    </div>
    <span class="post__author">{{ post.userName }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },

    users: {
      type: Array,
      required: true,
    },
  },
  methods: {
    upperCaseFirstSimbol(str) {
      return str[0].toUpperCase() + str.slice(1);
    },
  },
};
</script>
<style lang="scss">
.post {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  padding: 20px;
  text-align: left;

  &__title {
    $fs: 16;
    font-size: calc($fs / 16) + em;
    line-height: calc(24 / $fs * 100%);
    color: #399fed;
    margin-bottom: 20px;
  }

  &__text {
    $fs: 14;
    font-size: calc($fs / 16) + em;
    line-height: calc(20 / $fs * 100%);
  }

  &__author {
    display: inline-block;
    $fs: 12;
    font-size: calc($fs / 16) + em;
    line-height: calc(18 / $fs * 100%);
    color: grey;
    margin-top: 30px;
  }
}
</style>