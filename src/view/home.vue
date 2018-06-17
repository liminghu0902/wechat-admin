<template>
    <div>
        <a-row>
            <a-button @click="emitClick">登出</a-button>
        </a-row>
    </div>
</template>
<script>
import { WX } from '@/module';
export default {
    data() {
        return {

        }
    },
    methods: {
        emitClick() {
            WX.getUsers().then(res => {
                console.log(res)
            })
        }
    }
}
</script>
