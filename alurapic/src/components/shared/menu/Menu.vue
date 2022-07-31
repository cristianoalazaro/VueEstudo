<template>
    <nav>
        <ul>
            <li v-for="route of routes">
                <router-link :to="route.path">{{ route.titulo }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default{
        //props: ['routes']
        props:{
            routes:{
                required:true,
                type: Array
            }
        }
    }
</script>

<style>
.page-enter,
.page-leave-active {
    opacity: 0;
}

.page-enter-active,
.page-leave-active {
    transition: opacity .4s;
}
</style>
