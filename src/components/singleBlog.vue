<template>
  <div v-theme="'narrow'" id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <p>Author: {{blog.author}}</p>
    <p>Colors: {{blog.colors.toString()}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    };
  },
  created() {
    this.$db
      .collection("blogs")
      .doc(this.id)
      .get()
      .then((doc) => {
        this.blog = { id: doc.id, ...doc.data() };
      });
  },
};
</script>

<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
}
</style>