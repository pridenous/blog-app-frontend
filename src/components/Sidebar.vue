<template>
  <div>
    <v-card flat id="themeBackground">
      <v-img
        src="https://bad.src/not/valid"
        lazy-src="https://picsum.photos/id/11/100/60"
        height="200px"
        class="white--text"
      >
        <v-card-title class="align-end fill-height">Hello World</v-card-title>
      </v-img>
      <v-card-text class="white--text body-2 px-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere pariatur
        consectetur possimus, ea quam itaque! Facere non, odio a velit adipisci,
        perferendis expedita commodi assumenda exercitationem nesciunt quam nisi
        inventore.
      </v-card-text>
      <v-card-actions>
        <a href="#" class="twitter-follow-button" data-size="large">
          follow @test
        </a>
      </v-card-actions>
      <v-divider></v-divider>
      <v-card-title class="align-end white--text font-weight-bold"
        >Free dev books</v-card-title
      >
      <div>
        <v-btn class="ma-1 font-weight-bold" text color="white">
          <v-icon left color="yellow accent-3">mdi-language-javascript</v-icon
          >Javascript Handbook
        </v-btn>
      </div>
      <div>
        <v-btn class="ma-1 font-weight-bold" text color="white">
          <v-icon left color="teal">mdi-nodejs</v-icon>Node.js Insider
        </v-btn>
      </div>
      <div>
        <v-btn class="ma-1 font-weight-bold" text color="white">
          <v-icon left color="cyan lighten-3">mdi-react</v-icon>ReactNative
          Handbook
        </v-btn>
      </div>
      <div>
        <v-btn class="ma-1 font-weight-bold" text color="white">
          <v-icon left color="yellow accent-3">mdi-language-javascript</v-icon
          >Javascript for Games
        </v-btn>
      </div>
      <div>
        <v-btn class="ma-1 font-weight-bold" text color="white">
          <v-icon left color="teal lighten-3">mdi-vuejs</v-icon>Vue.js
        </v-btn>
      </div>
    </v-card>
    <v-divider></v-divider>
    <v-card-title class="align-end white--text font-weight-bold"
      >Tutorial Tags</v-card-title
    >
    <div>
      <v-chip color="red accent-2" label small class="ma-1">Vue</v-chip>
      <v-chip color="yellow" label small class="ma-1">Javascript</v-chip>
      <v-chip color="green" label small class="ma-1">Node.js</v-chip>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style>
#themeBackground {
  background-color: #1e2227;
}
</style>
