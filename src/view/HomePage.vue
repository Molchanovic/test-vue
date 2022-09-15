<template>
  <div class="home container">
    <section class="search-block">
      <app-search @search-user="filterUser" />
    </section>
    <section class="posts-list">
      <app-post :posts="filterPostOfUser" :users="userList" />
    </section>
  </div>
</template>
<script>
import appPost from "@/components/app-post/app-post.vue";
import appSearch from "@/components/app-search/app-search.vue";
import { getPostList, getUserList } from "@/api.js";
export default {
  created() {
    getPostList().then((data) => (this.postList = data));
    getUserList().then((data) => (this.userList = data));
  },
  mounted() {},
  data() {
    return {
      postList: [],
      userList: [],
      filterValue: "",
    };
  },
  methods: {
    filterUser(value) {
      this.filterValue = value;
    },
  },
  computed: {
    filterPostOfUser() {
      if (this.filterValue !== "") {
        return this.getUserOfPost.filter((item) => {
          return item.userName.indexOf(this.filterValue) !== -1;
        });
      } else {
        return this.getUserOfPost;
      }
    },

    getUserOfPost() {
      const postArray = structuredClone(this.postList);
      postArray.map((item) => {
        const userName = this.userList.find(
          (user) => user.id === item.userId
        )?.name;
        item.userName = userName;
      });
      return postArray;
    },
  },
  components: {
    appPost,
    appSearch,
  },
};
</script>
<style lang="scss">
.home {
}
.search-block {
  display: grid;
  grid-template-columns: 0.325fr;
  justify-content: center;

  @media (max-width: 991px) {
    grid-template-columns: 0.5fr;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}
.posts-list {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px 20px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}
</style>