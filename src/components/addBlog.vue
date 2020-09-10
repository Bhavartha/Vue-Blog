<template>
  <div id="add-blog">
    <div v-if="submitted">
      <h3>Post submitted</h3>
    </div>
    <div v-else>
      <h2>Add a new Blog Post</h2>
      <form>
        <label>Blog Title:</label>
        <input type="text" v-model.lazy="blog.title" required />
        <label>Blog Content:</label>
        <textarea v-model.lazy="blog.content"></textarea>
        <div id="checkboxes">
          <label>Red</label>
          <input type="checkbox" value="red" v-model="blog.colors" />
          <label>Yellow</label>
          <input type="checkbox" value="yellow" v-model="blog.colors" />
          <label>Blue</label>
          <input type="checkbox" value="blue" v-model="blog.colors" />
          <label>Green</label>
          <input type="checkbox" value="green" v-model="blog.colors" />
        </div>
        <select v-model="blog.author">
          <option v-for="author in authors" :key="author">{{author}}</option>
        </select>
        <button @click.prevent="post">Submit</button>
      </form>
    </div>
    <div id="preview">
      <h3>Preview of Blog</h3>
      <p>Blog Title: {{blog.title}}</p>
      <p>Blog Content:</p>
      <p>{{blog.content}}</p>
      <p>Blog colors:</p>
      <ul>
        <li v-for="color in blog.colors" :key="color">{{color}}</li>
      </ul>
      <p>Author: {{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      blog: {
        title: "",
        content: "",
        author: "",
        colors: [],
      },
      authors: ["Uno", "Dos", "Tres"],
      submitted: false,
    };
  },
  methods: {
    post() {
      this.$db
        .collection("blogs")
        .add(this.blog)
        .then(() => {
          console.log("Document successfully written!")
          this.submitted = true
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    },
  },
};
</script>

<style scoped>
#add-blog * {
  box-sizing: border-box;
}

#add-blog {
  margin: 20px auto;
  max-width: 500px;
}

label {
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],
textarea {
  width: 100%;
  display: block;
  padding: 8px;
  resize: vertical;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

#checkboxes input {
  display: inline-block;
  margin-right: 15px;
}

#checkboxes label {
  display: inline-block;
}

h3 {
  margin-top: 10px;
}

select {
  width: 100px;
}
</style>
