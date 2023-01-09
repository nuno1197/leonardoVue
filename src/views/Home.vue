<template>
    <div>
        <appHeader></appHeader>
        <navDraw></navDraw>
        <h1 class="pa-md-4 mx-lg-auto text-center" style="margin-top:100px"> 👷 Serviço em Desenvolvimento </h1>
    </div>
</template>

<script>
import Header from '../components/header.vue'
import NavDraw from '../components/navDraw.vue'
export default {
    data() { return {}},
    components:{
            'appHeader': Header,
            'navDraw':NavDraw
    },
}
</script>
