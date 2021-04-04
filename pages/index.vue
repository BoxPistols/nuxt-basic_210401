<template>
    <v-container>
    <ECCart/>

        <v-row>
            <v-col class="text-center">
                <h1>{{ msg }}</h1>
                <div>{{ $store.state.hello.num }}</div>
                <div>{{ $store.state.hello.message }}</div>

                <v-btn elevation="2" v-on:click="$store.commit('hello/updateMsg', 'Second Variant use Module Mode!!')"
                    >Commit</v-btn
                >
                <!-- <v-btn elevation="2" v-on:click="$store.dispatch('setMessageAction', 'Hey Payload on Action')">Commit</v-btn> -->
            </v-col>
        </v-row>

        <v-row>
            <v-col class="text-center">
                <h2>Item A</h2>
                <p>{{ $store.state.counter.count }}</p>
                <v-btn class="ma-2 mb-12" v-on:click="$store.dispatch('counter/countUpAction', 1)">Count Up</v-btn>
                <!-- <v-btn v-on:click="$store.commit('counter/countReset', 0)">Reset</v-btn> -->

                <h2>Item B</h2>
                <p>{{ $store.state.counter.count }}</p>
                <v-btn class="ma-2" v-on:click="$store.dispatch('counter/countUpAction', 1)">Count Up</v-btn>
                <v-btn v-on:click="$store.commit('counter/countReset', 0)">Reset</v-btn>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
import ECCart from "~/components/EC-Cart";
export default {
    data() {
        return {
            msg: 'Hello',
            // item: 'item',
        }
    },
    components:{
        ECCart
    }
}
</script>
<style lang="scss" scoped></style>
