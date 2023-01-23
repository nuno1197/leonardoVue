<template>
  <v-app :style="{ 'background-color': bgCode }" style="color: blueviolet;">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
    data() { 
    return {
      bgCode:this.$store.getters.backgroundColor,
    }
  },
  computed:{
    bgCode: {
        get () { return this.$store.getters.backgroundColor },
        set (v) { return this.$store.commit('toggleBackgroundColor', v) }
        }
  }
}
</script>

<style scoped>

</style>