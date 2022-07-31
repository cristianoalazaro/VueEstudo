<template>
    <div class="panel">
        <h2 class="panel-title" @dblclick="visible = !visible">{{ titulo }}</h2>
        <Transition name="panel-fade">
            <div class="panel-body" v-show="visible">
                <slot></slot>
            </div>
        </Transition>
    </div>
</template>

<script>
export default {
    props: ['titulo'],
    data() {
        return {
            visible: true,
        }
    }
}
</script>

<style scoped>
.panel {
    display: inline-block;
    border: solid 2px gray;
    box-shadow: 5px 5px 10px gray;
    margin: 5px;
    padding: 0 auto;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
}

.panel-title {
    background: lightblue;
    border: solid 2px;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
}

.panel-fade-enter, .panel-fade-leave-active{
    opacity: 0;
}

.panel-fade-enter-active, .panel-fade-leave-active{
    transition: opacity .4s;
}

.panel-body{
    overflow: hidden;
}
</style>
