<template>
  <v-container>
    <v-row>
      <!-- loop items / -->
      <v-card
        class="mx-auto my-12"
        max-width="374"
        v-for="item in items"
        :key="item.id"
      >
        <v-img
          height="250"
          :src="'https://cdn.vuetifyjs.com/images/cards/' + item.src"
        ></v-img>
        <v-card-title>{{ item.title }}</v-card-title>
        <v-card-text class="text-justify">
          <v-row align="center" class="mx-0">
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
            <div class="grey--text ml-4">4.5 (413)</div>
          </v-row>
          <div class="my-4 subtitle-1">$ • Italian, Cafe</div>
          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
        <v-card-actions class="d-flex justify-end my-2">
          <v-btn
            color="deep-purple lighten-2"
            v-on:click="$store.dispatch('counter/countUpAction', 1)"
          >
            カートに入れる
          </v-btn>
        </v-card-actions>
      </v-card>
      <!-- / loop items -->
    </v-row>

    <v-row>
      <v-col offset="10">
        <h3 class="text-center py-2 px-1">
          カートの中身：{{ $store.state.counter.count }}点
        </h3>
        <v-divider class="my-2"></v-divider>
        <v-btn v-on:click="$store.dispatch('counter/countDownAction', 1)"
          >点数を減らす</v-btn
        >
        <v-divider class="my-2"></v-divider>
        <v-btn v-on:click="$store.commit('counter/countReset', 0)"
          >カートをカラにする</v-btn
        >
        <v-divider class="my-2"></v-divider>
        <NuxtLink to="/cart-result"
          ><v-btn class="px-4">レジに進む</v-btn></NuxtLink
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'item-A', title: 'House Badilico', src: 'house.jpg' },
        {
          id: 2,
          name: 'item-B',
          title: 'Sunshine Badilico',
          src: 'sunshine.jpg',
        },
        {
          id: 3,
          name: 'item-C',
          title: 'Cooking Badilico',
          src: 'cooking.png',
        },
      ],
    }
  },
}
</script>
