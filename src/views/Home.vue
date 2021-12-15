<template>
  <v-container>
        <v-row class="row" v-if="photos.length != 0">
          <v-col
            v-for="(n, index) in photos"
            :key="index"
            cols="4"
            class="col"
          >
          <photo-card :photo="n" :key="index" />
          </v-col>
        </v-row>
        <v-alert
        v-else
          border="top"
          dark
        >
         Please search!
        <v-text-field
        class="mt-4"
            dense
            flat
            hide-details
            solo-inverted
            placeholder="search"
            v-model="search"
            @keyup.enter="getAlbums"
          ></v-text-field>
        </v-alert>
      </v-container>
</template>

<script>
import PhotoCard from '../components/PhotoCard.vue'
export default {
  name: 'Home',
  components: {
    PhotoCard,
  },
  computed:{
    photos(){
      return this.$store.state.photos
    }
  },
  methods:{
    getAlbums(){
      this.$store.dispatch("getAlbums", {
        search: this.search
      });
    }
  },
  // mounted(){
  //   this.$store.dispatch("getAlbums", {
  //     search: this.search
  //   });
  // }
}
</script>

<style scoped>
.row{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.col{
  min-width: 250px;
}
</style>