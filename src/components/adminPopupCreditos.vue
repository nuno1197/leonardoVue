<template>
  <div class="text-center">
    <v-dialog @keydown.esc="dialog = false"  v-model="dialog" scrollable width="500">
      <template v-slot:activator="{ on }">
        <v-btn variant="plain" @click="dialog=true" depressed text class="grey--text change-font text-none" v-bind="on">
          <span>Créditos</span>
        </v-btn>
      </template>
      <v-card>
            <v-toolbar color="#2A3F54" dark>
                <h2>Créditos</h2>
            </v-toolbar>
            
            <v-divider
            class="mx-4"
            horizontal
            ></v-divider>
            
            <v-card-text class="change-font mt-6" style="white-space: pre-line"
                >Créditos</v-card-text
            >
            <v-card-actions>
                <v-spacer></v-spacer>
                
                <v-tooltip placement="bottom"> 
                <template v-slot:activator="{ on }">
                    <v-btn depressed color="white" @click="dialog=false" v-bind="on">
                        <v-icon large>mdi-exit-to-app</v-icon>
                    </v-btn>
                    </template>
                    <span>Créditos</span>
                </v-tooltip>

            </v-card-actions>
            </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script> 

<style lang="stylus" scoped>
.change-font {
    font-family: "Arial";
}
</style>
