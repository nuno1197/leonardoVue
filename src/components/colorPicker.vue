<template>
    <div>
      <v-btn :style="{'background-color': colorBtt}" @click="showColorPicker = !showColorPicker">Selecionar Cor</v-btn>
      <span v-if="selectedColor" :style="{backgroundColor: selectedColor}" class="color-circle"></span>
      <v-menu v-model="showColorPicker" :close-on-content-click="false" class="justify-center align-center">
        <v-color-picker v-model="selectedColor"></v-color-picker>
        <v-card-actions>
          <v-btn   :style="{'background-color': bttCode}" @click="cancelSelection">Fechar</v-btn>
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