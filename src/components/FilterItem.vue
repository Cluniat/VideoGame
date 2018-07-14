<template>
    <div class="filterItem">
        <i v-if="!isFirst">  |  </i>
    <a> {{letter}}  </a>
    </div>
</template>

<script>
    export default {
        name: "FilterItem",
        props: {
         letter: String,
         isFirst: {
             default: false,
         }
        }

    }
</script>

<style scoped>
.filterItem{
    display: inline-block;
}
i{
    margin: 0 3px;
}    
</style>