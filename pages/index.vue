<template>
    <v-container>
        <h1>Hello {{ msg }}</h1>
    </v-container>
</template>

<script>
// import ECCart from "~/components/EC-Cart";
export default {
    data() {
        return {
            msg: 'Vue App!',
        }
    },
    components: {},
}
</script>
<style lang="scss" scoped>
h1 {
    color: tomato;
}
</style>
