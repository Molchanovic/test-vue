<template>
  <div class="search">
    <search-icon />
    <input
      @input="searchPostToUser"
      v-model="searchText"
      placeholder="Filter by author..."
      class="search__input"
      type="text"
    />
  </div>
</template>
<script>
import searchIcon from "@/components/app-search/search-icon.vue";
export default {
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    searchPostToUser() {
      this.$emit("search-user", this.searchText);
    },
  },
  components: {
    searchIcon,
  },
};
</script>
<style lang="scss">
.search {
  width: 100%;
  background: #fff;
  position: relative;
  margin: 0 auto;
  border: 1px solid grey;
  border-radius: 2px;
  padding-left: 40px;

  &__input {
    width: 100%;
    padding: 8px 12px;
    $fs: 16;
    font-size: calc($fs / 16) + em;
    line-height: calc(20 / $fs * 100%);
    border: 0;
    border-left: 1px solid grey;

    &:focus {
      outline: none;
    }
  }

  svg {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 6px;
    left: 7px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      fill: grey;
    }
  }
}
</style>