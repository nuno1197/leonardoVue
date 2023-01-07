<template>
  <div class="text-center">
    <v-dialog @keydown.esc="dialog = false" v-model="dialog" scrollable width="500">
      <template #activator="{ on }">
        <v-btn depressed text class="grey--text change-font text-none" v-bind="on">
          <span class="change-font">Ajuda</span>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar>
          <h2>Ajuda</h2>
        </v-toolbar>

        <v-divider class="mx-4" horizontal></v-divider>

        <v-card-text class="change-font mt-6" style="white-space: pre-line">
          Ajuda
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-tooltip bottom>
            <template #activator="{ on }">
              <v-btn depressed color="white" @click="dialog=false" v-bind="on">
                <v-icon large>mdi-exit-to-app</v-icon>
              </v-btn>
            </template>
            <span>Ajuda</span>
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