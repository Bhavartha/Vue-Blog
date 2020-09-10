<template>
  <div v-theme="'narrow'" id="show-blogs">
    <h1>Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blog" />
    <div v-for="blog in filteredBlogs" :key="blog" class="single-blog">
      <router-link :to="'/blog/'+blog.id">
        <h2 v-rainbow>{{blog.title | to-uppercase }}</h2>
      </router-link>
      <article>{{blog.content | limit50}}</article>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  methods: {},
  filters: {
    toUppercase(val) {
      return val.toUpperCase();
    },
  },
  computed: {
    filteredBlogs() {
      return this.blogs.filter((blog) => {
        return blog.title.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },
  directives: {
    rainbow: {
      bind(el) {
        el.style.color = "#" + Math.random().toString().slice(2, 8);
      },
    },
  },
  created() {
    this.$db
      .collection("blogs")
      .get()
      .then((querySnapshot) => {
        this.blogs = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
      });
  },
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog {
  background: #eee;
  padding: 2px 20px 15px;
  margin: 20px 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
</style>
