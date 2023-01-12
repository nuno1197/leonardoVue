<template>
  <div class="text-center">
    <v-dialog @keydown.esc="dialog = false" v-model="dialog" scrollable width="500">
      <template #activator="{ on }">
        <v-btn variant="plain"  @click="dialog=true" depressed text class="grey--text change-font text-none" v-bind="on">
          <span class="change-font">Privacidade</span>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar color="#2A3F54" dark>
          <h2 class="white--text" :style="{ marginLeft: '15px' }">Privacidade</h2>
        </v-toolbar>
        <v-divider class="mx-4" horizontal></v-divider>

        <v-card-text class="grey--text change-font mt-6" style="white-space: pre-line">
          Texto privacidade
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-tooltip bottom>
            <template #activator="{ on }">
              <v-btn @click="dialog=false" v-bind="on">
                <v-icon size="30">mdi-exit-to-app</v-icon>
              </v-btn>
            </template>
            <span>Sair</span>
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
.white--text{
  color: white;
}
.grey--text{
  color: grey;
}
.change-font {
    font-family: "Arial";
}
</style>