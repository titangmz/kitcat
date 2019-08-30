<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-accent">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">kitcat</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0"></md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text"><router-link to='/'>Home</router-link></span>
          </md-list-item>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text"><router-link to='/about'>About</router-link></span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content style="background-image:url('http://backgrounddownload.com/wp-content/uploads/2018/09/stars-background-gif-tumblr-5.gif')">
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>


<script>

export default {
  name: "app",
  data: function() {
    return {
      menuVisible: false,
    };
  },

};
</script>


<style lang="scss">


.md-app {
  height: 100vh;
}

</style>