<template>
  <v-app>
  <v-app-bar
      app
      flat
      dark
      :height="$vuetify.breakpoint.width < 578 ? '140' : '72'"
    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-10"
          color="grey darken-1"
          size="48"
        >
        KC
        </v-avatar>

        <v-btn
          v-for="link in links"
          :key="link"
          text
          :to="link"
        >
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive>
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
            placeholder="search"
            v-model="search"
            @keyup.enter="getAlbums"
          ></v-text-field>
        </v-responsive>

      </v-container>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
    search:null,
    links: [
        'Home',
        'Settings',
      ],
  }),
  methods:{
    getAlbums(){
        this.$router.push({ path: '/home' })
        this.$store.dispatch("getAlbums", {
          search: this.search
        });
      }
  }
};
</script>
