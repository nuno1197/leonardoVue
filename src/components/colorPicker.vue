<template>
    <div>
      <v-btn :color="selectedColor ? selectedColor : 'white'" @click="showColorPicker = !showColorPicker">Select a color</v-btn>
      <span v-if="selectedColor" :style="{backgroundColor: selectedColor}" class="color-circle"></span>
      <v-menu v-model="showColorPicker" :close-on-content-click="false" class="justify-center align-center">
        <v-color-picker v-model="selectedColor"></v-color-picker>
        <v-card-actions>
          <v-btn   style="background-color: #2A3F54;" color="white" @click="confirmSelection">Confirm</v-btn>
          <v-btn   style="background-color: #2A3F54;" color="white" @click="cancelSelection">Cancel</v-btn>
        </v-card-actions>
      </v-menu>
    </div>
  </template>
  
  <script>
export default {
  data() {
    return {
      selectedColor: '',
      showColorPicker: false
    }
  },
  methods: {
    confirmSelection() {
      this.showColorPicker = false
    },
    cancelSelection() {
      this.showColorPicker = false
    }
  }
}
</script>