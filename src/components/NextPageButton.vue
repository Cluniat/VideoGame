<template>
    <a class="nextBtn">
        <i class="fa fa-plus"></i>
        More
    </a>
</template>

<script>
    export default {
        name: "NextPageButton"
    }
</script>

<style scoped>
.nextBtn {
    background-color: black;
    border-radius: 20px;
    padding: 10px 30px;
    color: #067f35;
    cursor: pointer;
}
    .nextBtn:hover{
        color: #35ff71;
    }
</style>