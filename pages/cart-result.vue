<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <v-row>
          <v-col offset="4" sm="6">
            <h3 class="text-center py-2 px-1">
              カートの中身：{{ $store.state.counter.count }}点
            </h3>
            <v-divider class="my-2"></v-divider>

            <NuxtLink to="/cart"
              ><v-btn class="px-4">カートに戻る</v-btn></NuxtLink
            >

            <v-divider class="my-2"></v-divider>

            <v-btn v-on:click="$store.commit('counter/countReset', 0)"
              >カートをカラにする</v-btn
            >

            <v-btn class="ma-2"> 購入を確定する </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Result',
    }
  },
}
</script>

<style lang="scss" scoped></style>
