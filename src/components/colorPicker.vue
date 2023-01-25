<template>
    <v-btn id="iconbtt" @click="showColorPicker = !showColorPicker" style="margin-left:10px">
      <v-icon  class="mr-2">mdi-palette</v-icon>
    </v-btn>
      <span v-if="selectedColor" :style="{backgroundColor: selectedColor}" class="color-circle"></span>
      <v-menu v-model="showColorPicker" :close-on-content-click="false" class="justify-center align-center">
        <v-color-picker v-model="selectedColor"></v-color-picker>
        <v-card-actions>
          <v-btn   :style="{'background-color': bttCode}" @click="cancelSelection">Fechar</v-btn>
        </v-card-actions>
      </v-menu>
  </template>
  
  <script>
export default {
  props: ['colorButtons','colorHeader','colorFooter','colorNavbar','colorBackground','colorLetter'],
  data() {
    return {
      selectedColor: '',
      showColorPicker: false,
      bttCode:this.$store.getters.bttColor
    }
  },
  methods: {
    cancelSelection() {
      this.showColorPicker = false;
      //location.reload();
    }
  },
  watch: {
    selectedColor: function (newValue) {
      this.$emit('update:colorButtons', newValue)
      this.$emit('update:colorHeader', newValue)
      this.$emit('update:colorNavbar', newValue)
      this.$emit('update:colorFooter', newValue)
      this.$emit('update:colorBackground', newValue)
      this.$emit('update:colorLetter', newValue)
    }
  },
  computed: {
    bttCode: {
        get () { return this.$store.getters.bttColor },
        set (v) { return this.$store.commit('toggleBttColor', v) }
        }

  }
}
</script>

<style>
#iconbtt{
    justify-content: center;
    align-items: center;
 
}

</style>