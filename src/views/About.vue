<template>
  <div class="md-layout md-gutter md-alignment-center">
    <div class="md-layout-item md-small-hide md-size-20">Hide</div>
    <div class="md-layout-item">Main</div>
    <div class="md-layout-item md-small-hide md-size-20">Hide</div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="scss" scoped>
.md-layout-item {
  height: 40px;
  background-color: blue;
  border: 4px black solid;
}
</style>