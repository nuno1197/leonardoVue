<template>
    <div>
      <v-btn :style="{'background-color': colorBtt}" @click="showColorPicker = !showColorPicker">Selecionar Cor</v-btn>
      <span v-if="selectedColor" :style="{backgroundColor: selectedColor}" class="color-circle"></span>
      <v-menu v-model="showColorPicker" :close-on-content-click="false" class="justify-center align-center">
        <v-color-picker v-model="selectedColor"></v-color-picker>
        <v-card-actions>
          <v-btn   style="background-color: #2A3F54;" color="white" @click="confirmSelection">Confirmar</v-btn>
          <v-btn   style="background-color: #2A3F54;" color="white" @click="cancelSelection">Cancelar</v-btn>
        </v-card-actions>
      </v-menu>
    </div>
  </template>
  
  <script>
export default {
  data() {
    return {
      selectedColor: '',
      showColorPicker: false,
      colorBtt: 'white',
    }
  },
  methods: {
    confirmSelection() {
      this.colorBtt = this.selectedColor;
      this.showColorPicker = false
    },
    cancelSelection() {
      this.showColorPicker = false
    }
  }
}
</script>