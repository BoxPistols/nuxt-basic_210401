<template>
    <v-row>
        <v-col class="text-center">
            <h1>{{ msg }}</h1>
            <h2>{{ $store.state.message }}</h2>
            <h2>{{ $store.state.num }}</h2>

            <v-btn elevation="2" v-on:click="$store.commit('updateMsg', 'Second Variant')">Commit</v-btn>

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
    data() {
        return {
            msg: 'Hello',
        }
    },
}
</script>

<style lang="scss" scoped>
</style>
