<template>
    <v-row>
        <v-col class="text-center">
            <h1>{{ msg }}</h1>
            <div>{{ $store.state.hello.num }}</div>
            <div>{{ $store.state.hello.message }}</div>

            <v-btn elevation="2" v-on:click="$store.commit('hello/updateMsg', 'Second Variant use Module Mode!!')"
                >Commit</v-btn
            >

            <!-- <v-btn elevation="2" v-on:click="$store.commit('updateMsg', 'Second Variant')">Commit</v-btn> -->
            <!-- <v-btn elevation="2" v-on:click="$store.dispatch('setMessageAction', 'Hey Payload on Action')">Commit</v-btn> -->
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Hello',
        }
    },
}
</script>
<style lang="scss" scoped></style>
