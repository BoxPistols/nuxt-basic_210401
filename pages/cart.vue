<template>
    <v-container>
        <v-row>
            <v-col class="text-center">
                <ECCart />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ECCart from '~/components/EC-Cart'
export default {
    data() {
        return {
            msg: 'Hello',
        }
    },
    
    components: {
        ECCart,
    },
}
</script>
<style lang="scss" scoped></style>
