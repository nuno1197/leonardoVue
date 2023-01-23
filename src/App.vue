<template>
  <v-app :style="{ 'background-color': bgCode, 'color':letterCode }" style="font-weight: bold;">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
    data() { 
    return {
      bgCode:this.$store.getters.backgroundColor,
      letterCode:this.$store.getters.letterColor,
    }
  },
  computed:{
    bgCode: {
        get () { return this.$store.getters.backgroundColor },
        set (v) { return this.$store.commit('toggleBackgroundColor', v) }
        },
    letterCode: {
    get () { return this.$store.getters.letterColor },
    set (v) { return this.$store.commit('toggleLetterColor', v) }
    }
  }
}
</script>

<style scoped>

</style>