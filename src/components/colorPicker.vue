<template>
    <div>
      <v-btn :style="{'background-color': colorBtt}" @click="showColorPicker = !showColorPicker">Selecionar Cor</v-btn>
      <span v-if="selectedColor" :style="{backgroundColor: selectedColor}" class="color-circle"></span>
      <v-menu v-model="showColorPicker" :close-on-content-click="false" class="justify-center align-center">
        <v-color-picker v-model="selectedColor"></v-color-picker>
        <v-card-actions>
          <v-btn   style="background-color: #2A3F54;" color="white" @click="cancelSelection">Fechar</v-btn>
        </v-card-actions>
      </v-menu>
    </div>
  </template>
  
  <script>
export default {
  props: ['colorButtons','colorHeader','colorFooter','colorNavbar','colorBackground','colorLetter'],
  data() {
    return {
      selectedColor: '',
      showColorPicker: false,
    }
  },
  methods: {
    cancelSelection() {
      this.showColorPicker = false
    }
  },
  watch: {
    selectedColor: function (newValue) {
      this.$emit('update:colorButtons', newValue)
      this.$emit('update:colorHeader', newValue)
    }
  }
}
</script>