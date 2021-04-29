<template>
  <div style="max-height:100vh">
    <v-card class="my-1" flat id="theme">
      <div class="d-flex justify-between">
        <div>
          <v-card-title class="textTitle white--text"
            >Authenticatation with Laravel Passport
          </v-card-title>
          <v-card-text class="subTitle white--text mt-2"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            atque unde maiores minus dolore quia alias, ut illo optio deleniti
            sit ratione corrupti voluptas quae placeat ipsa est aut sint.
          </v-card-text>
          <v-card-actions>
            <v-icon class="mr-1" color="cyan lighten-3" small>mdi-eye</v-icon>
            <span class="body-2 mr-2 white--text">24</span>
            <span class="mr-1">.</span>
            <v-icon class="mr-1" color="blue-grey lighten-5" small>
              mdi-timer
            </v-icon>
            <span class="body-2 white--text">2020-03-16 19:19:00 ago</span>
            <v-spacer></v-spacer>
          </v-card-actions>
        </div>
        <div class="flex-grow-1 flex-shrink-0">
          <v-card-title class="white--text body-1"
            >15th August 2018
          </v-card-title>
          <v-card-text class="white--text mt-3">
            <v-chip color="yellow">
              Javascript
            </v-chip>
          </v-card-text>
        </div>
      </div>
    </v-card>
  </div>
</template>

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
