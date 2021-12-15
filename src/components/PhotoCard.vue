<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="400">
        <v-img
          height="200px"
          :src="photo.largeImageURL"
        >

          <v-card-title class="white--text">
            <v-avatar size="56">
              <img
                alt="user"
                :src="!photo.userImageURL ? 'https://via.placeholder.com/150/92c952' : photo.userImageURL"
              >
            </v-avatar>
            <p class="ml-3">
              {{photo.user}}
            </p>
          </v-card-title>
        </v-img>

        <!-- <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            Today
          </div>

          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :color="message.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong> @{{ message.time }}
                </div>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text> -->
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    photo: {
      type: Array,
      required: true
    }
  },
  data(){
    return{
      loading:false,
    }
  }
}
</script>