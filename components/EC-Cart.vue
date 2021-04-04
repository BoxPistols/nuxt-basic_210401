<template>
    <v-container>
        <ul v-for="item in items" :key="item.id">
            <li>{{ item.id }}</li>
            <li>{{ item.name }}</li>
        </ul>

        <v-row>
            <v-row>
                <v-card class="mx-auto my-12" max-width="374">
                    <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-img>
                    <v-card-title>Sunshine Badilico</v-card-title>
                    <v-card-text>
                        <v-row align="center" class="mx-0">
                            <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
                            <div class="grey--text ml-4">4.5 (413)</div>
                        </v-row>
                        <div class="my-4 subtitle-1">$ • Italian, Cafe</div>
                        <div>
                            Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                            seating.
                        </div>
                    </v-card-text>
                    <v-divider class="mx-4"></v-divider>
                    <v-card-actions>
                        <v-btn color="deep-purple lighten-2" v-on:click="$store.dispatch('counter/countUpAction', 1)">
                            カートに入れる
                        </v-btn>
                    </v-card-actions>
                </v-card>

                <v-card class="mx-auto my-12" max-width="374">
                    <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/house.jpg"></v-img>
                    <v-card-title>Sunshine Badilico</v-card-title>
                    <v-card-text>
                        <v-row align="center" class="mx-0">
                            <v-rating :value="4.0" color="amber" dense half-increments readonly size="14"></v-rating>
                            <div class="grey--text ml-4">4.5 (413)</div>
                        </v-row>
                        <div class="my-4 subtitle-1">$ • Italian, Cafe</div>
                        <div>
                            Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                            seating.
                        </div>
                    </v-card-text>
                    <v-divider class="mx-4"></v-divider>
                    <v-card-actions>
                        <v-btn color="deep-purple lighten-2" v-on:click="$store.dispatch('counter/countUpAction', 1)">
                            カートに入れる
                        </v-btn>
                    </v-card-actions>
                </v-card>

                <v-card class="mx-auto my-12" max-width="374">
                    <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
                    <v-card-title>Sunshine Badilico</v-card-title>
                    <v-card-text>
                        <v-row align="center" class="mx-0">
                            <v-rating :value="3.0" color="amber" dense half-increments readonly size="14"></v-rating>
                            <div class="grey--text ml-4">4.5 (413)</div>
                        </v-row>
                        <div class="my-4 subtitle-1">$ • Italian, Cafe</div>
                        <div>
                            Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                            seating.
                        </div>
                    </v-card-text>
                    <v-divider class="mx-4"></v-divider>
                    <v-card-actions>
                        <v-btn color="deep-purple lighten-2" v-on:click="$store.dispatch('counter/countUpAction', 1)">
                            カートに入れる
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-row>
            <v-row>
                <v-col offset="10">
                    <v-card>
                        <h3 class="text-center py-2 px-1">カートの中身：{{ $store.state.counter.count }}点</h3>
                        <p class="text-center py-2 px-1">{{ $store.state.counter.item }}</p>

                        <v-btn v-on:click="$store.dispatch('counter/addUpAction', 'item!!')">addItem</v-btn>

                        <v-btn v-on:click="$store.commit('counter/countReset', 0)">カートをカラにする</v-btn>

                        <NuxtLink to="/main"><v-card>レジに進む</v-card></NuxtLink>
                    </v-card>
                </v-col>
            </v-row>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { id: 1, name: 'item-A' },
                { id: 2, name: 'item-B' },
            ],
        }
    },
}
</script>
