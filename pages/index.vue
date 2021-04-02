<template>
    <v-row>
        <v-col class="text-center">
            <h1>{{ msg }}</h1>
            <div>{{ $store.state.num }}</div>
            <div>{{ $store.state.message }}</div>
            <!-- <v-btn elevation="2" v-on:click="$store.commit('updateMsg', 'Second Variant')">Commit</v-btn> -->
            <v-btn elevation="2" v-on:click="$store.dispatch('setMessageAction', 'アクション仮面のペリーロードは下田')">Set MessageAction</v-btn>
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

<style lang="scss" scoped>
</style>
