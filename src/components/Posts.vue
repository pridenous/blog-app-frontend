<template>
  <div style="max-height:100vh">
    <v-card
      class="my-1"
      flat
      id="theme"
      v-for="(post, index) in posts"
      :key="index"
    >
      <div class="d-flex justify-between">
        <div>
          <v-card-title class="textTitle white--text"
            >{{ post.title }}
          </v-card-title>
          <v-card-text class="subTitle white--text mt-2"
            >{{ post.sub_content }}
          </v-card-text>
          <v-card-actions>
            <v-icon class="mr-1" color="cyan lighten-3" small>mdi-eye</v-icon>
            <span class="body-2 mr-2 white--text">{{ post.views }}</span>
            <span class="mr-1">.</span>
            <v-icon class="mr-1" color="blue-grey lighten-5" small>
              mdi-timer
            </v-icon>
            <span class="body-2 white--text">{{
              post.created_at | moment("from", "now", true)
            }}</span>
            <v-spacer></v-spacer>
          </v-card-actions>
        </div>
        <div class="flex-grow-1 flex-shrink-0">
          <v-card-title class="white--text body-1"
            >{{ post.created_at | moment("calendar", "July 10 2011") }}
          </v-card-title>
          <v-card-text class="white--text mt-3">
            <v-chip color="yellow">
              {{ post.categories.name }}
            </v-chip>
          </v-card-text>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import api from "@/api/posts";

export default {
  name: "Posts",
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.makeRequest();
  },
  methods: {
    // getPosts() {
    //   PostService.getPosts()
    //     .then((response) => {
    //       this.posts = response.posts;
    //       console.log(response.posts);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
    async makeRequest() {
      try {
        await api.get("/posts").then((response) => {
          this.posts = response.data.post;
          console.log("Post", this.posts);
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
#theme {
  background-color: #1e2227;
  font-family: "Montserrat", sans-serif;
}
#theme:hover {
  background: #282c34;
  cursor: pointer;
}
</style>
