<template>
  <div class="md-layout md-gutter md-alignment-center" md-theme="default">
    <div class="md-layout-item md-small-hide md-size-25"></div>
    <div class="md-layout-item">
      <md-card>
        <md-card-header>
          <div class="md-title">FreshCats!</div>
        </md-card-header>

        <md-card-content>
          <div id="mainSection">
            <div id="cat">
              <md-progress-spinner
                class="md-accent"
                v-if="isLoading"
                v-show="isLoading"
                :md-diameter="30"
                :md-stroke="3"
                md-mode="indeterminate"
                style="margin-top:50%"
              ></md-progress-spinner>
              <img v-show="!isLoading" class="catFrame" v-on:load="downloaded()" :src="catUrl" />
            </div>
            <br />
          </div>
          <md-card-actions>
            <md-button
              :disabled="isLoading"
              class="md-raised md-accent"
              @click="catRefresh()"
            >Another one! </md-button>  
              <md-button v-on:click="window.open(this.catUrl)" class="md-raised md-primary" :disabled="isLoading">Download</md-button>  
          </md-card-actions>
        </md-card-content>
      </md-card>
    </div>
    <div class="md-layout-item md-small-hide md-size-25"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "home",
  data: function() {
    return {
      menuVisible: false,
      catUrl: "",
      catHeight: 0,
      catWidth: 0,
      isLoading: true
    };
  },
  components: {},
  mounted() {
    this.catRefresh();
  },

  methods: {
    downloaded: function() {
      this.isLoading = false;
      if (this.catHeight > this.catWidth) {
        document.getElementsByClassName("catFrame")[0].style.height = "100%";
        document.getElementsByClassName("catFrame")[0].style.width = "auto";
      } else {
        document.getElementsByClassName("catFrame")[0].style.height = "auto";
        document.getElementsByClassName("catFrame")[0].style.width = "80%";
      }
      if (this.catHeight == this.catWidth) {
        document.getElementsByClassName("catFrame")[0].style.height = "100%";
      }
    },
    catRefresh: function() {
      let catobject = "";
      this.isLoading = true;

      axios
        .get("https://api.thecatapi.com/v1/images/search")
        .then(r => {
          catobject = r.data;
        })
        .then(() => {
          this.catUrl = catobject[0].url;
          this.catHeight = catobject[0].height;
          this.catWidth = catobject[0].width;
        });
    }
  }
};
</script>


<style lang="scss">
@import "~vue-material/dist/theme/engine";

@include md-register-theme(
  "default",
  (
    primary: md-get-palette-color(#4b0082, 600),
    // The primary color of your application
      accent: md-get-palette-color(#ffc0cb, 500) // The accent or secondary color
  )
);

@import "~vue-material/dist/theme/all";

#cat {
  height: 60vh;
  text-align: center;
}
.md-app {
  height: 100vh;
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>