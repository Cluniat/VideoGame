<!--
 - GameBox component
 - @props img_url : url of the picture of the game cover
 - @props title : title of the game
 - @props summary : summary of the game
-->
<template>
    <div class="center" v-on:click="details()">
        <div class="box">
            <div class="box-front">
                <img v-bind:src="img_url"/>
            </div>
            <div class="cd">
                <span/>
            </div>
            <div class="box-back"></div>
        </div>
        <div class="title">{{title}}</div>
    </div>
</template>

<script>
    export default {
        name: "GameBox",
        props: [
            'img_url',
            'title',
            'summary',
        ],
        methods:{
            details(){
              this.$store.commit('setToggleModal')
              this.$store.commit('setDetails', [this.title, this.img_url, this.summary])
                // eslint-disable-next-line
                console.log(this.$store.state.details)
            }
        },
        computed:{
            toggleModal(){
                return this.$store.state.toggleModal
            }
        }
    }
</script>

<style scoped>
    .center{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .box {
        margin: 50px 50px 20px 50px;
        perspective: 800px;
        height: 200px;
        width: 150px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 10px 20px -5px rgba(0,0,0,0.8);
        cursor: pointer;
    }
    .box:hover .box-front{
        transform: rotateY(-30deg);
        box-shadow: 0 10px 20px -5px rgba(0,0,0,0.8);

    }
    .box:hover .cd {
        transform: translateX(70px) rotate(380deg);
    }
    .box-front {
        border-radius: 3px;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 3;
        transform-origin: 0 50%;
        perspective: 800px;
        transition: all 0.5s ease 0s;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
    }
    img {
        width: auto;
        height: 100%;
    }
    .cd {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        color: #fff;
        font-size: 20px;
        height: 150px;
        border-radius: 50%;
        right: 0;
        left: 0;
        box-shadow: 0 0 10px 1px rgba(0,0,0,0.3);
        background: #7d7e7d; /* Old browsers */
        background: radial-gradient(ellipse at center, #7d7e7d 0%,#0e0e0e 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7d7e7d', endColorstr='#0e0e0e',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
        z-index: 2;
        transition: all 0.5s ease 0s;
        border: 2px solid #1d1d1d;
    }
    .cd span {
        position: absolute;
        height: 35px;
        width: 35px;
        border-radius: 50%;
        background-color: black;
        border: 2px solid #959595;
    }
    .box-back {
        border-radius: 3px;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: gray;
        z-index: 1;
        border: 2px solid #444444;
    }
    .title{
        width: 150px;
        word-wrap: break-word;
        white-space: pre-wrap;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
</style>