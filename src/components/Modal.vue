<!--
 - Modal component
 - @props details[] : ['title','imgUrl','summary']
-->
<template>
    <div id="modal-container" :class="toggleModal?'anim':(this.handleClose?'anim out':'')">
        <div class="modal-background" @click="close">
            <div class="modal">
                <header class="modal-header">
                    <slot name="header">
                        {{details[0]}}
                    </slot>
                </header>
                <section class="modal-body">
                    <slot name="body">
                        <div class="gameCover">
                            <img :src="details[1]"/>
                        </div>
                        <div class="summary">
                            {{cutDetails()}}
                        </div>
                    </slot>
                </section>
                <svg class="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
                    <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"></rect>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Modal',
        data() {
            return {
                handleClose: false
            }
        },
        methods: {
            close() {
                this.$store.commit('setToggleModal')
                this.handleClose = true
            },
            cutDetails(){
                if(this.$store.state.details[2].length>1300){
                    this.$store.state.details[2] = this.$store.state.details[2].substring(0,1300)+"..."
                }
                return this.$store.state.details[2]
            },

        },
        computed: {
            details(){
                return this.$store.state.details
            },
            toggleModal(){
                return this.$store.state.toggleModal
            }
        }
    }
</script>

<style scoped>

    #modal-container {
        position: fixed;
        display: flex;
        bottom: 0;
        right: 0;
        top: 0;
        left: 0;
        transform: scale(0);
        z-index: 1;
        justify-content: center;
        align-items: center;
        background: rgba(18, 50, 1, 0.7);
    }

    #modal-container.anim {
        transform: scale(1);
    }
    #modal-container.anim .modal-background {
        animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }
    #modal-container.anim .modal-background .modal {
        transform: translateX(-1500px);
        animation: roadRunnerIn 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }
    #modal-container.anim.out {
        animation: quickScaleDown 0s 0.5s linear forwards;
    }
    #modal-container.anim.out .modal-background {
        animation: fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }
    #modal-container.anim.out .modal-background .modal {
        animation: roadRunnerOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }

    #modal-container .modal-background {
        display: flex;
        text-align: center;
        vertical-align: middle;
        height: 100%;
        width: 100%;
        padding: 0 30%;
        justify-content: center;
        align-items: center;
    }

    #modal-container .modal-background .modal {
        background: white;
        padding: 50px;
        display: inline-block;
        border-radius: 3px;
        font-weight: 300;
        position: relative;
    }
    #modal-container .modal-background .modal .modal-header {
        padding: 15px;
        border-bottom: 1px solid #eeeeee;
        color: #067f35;
        font-weight: bold;
        font-size: 30px;
        justify-content: center;
        display: flex;
        align-items: center;
    }
    #modal-container .modal-background .modal .modal-body {
        position: relative;
        padding: 20px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    #modal-container .modal-background .modal .modal-svg {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: 3px;
    }
    #modal-container .modal-background .modal .modal-svg rect {
        stroke: #fff;
        stroke-width: 2px;
        stroke-dasharray: 778;
        stroke-dashoffset: 778px;
    }



    @keyframes fadeIn {
        0% {
            background: rgba(0, 0, 0, .0);
        }
        100% {
            background: rgba(0, 0, 0, .7);
        }
    }
    @keyframes fadeOut {
        0% {
            background: rgba(0, 0, 0, .7);
        }
        100% {
            background: rgba(0, 0, 0, .0);
        }
    }

    @keyframes quickScaleDown {
        0% {
            transform: scale(1);
        }
        99.9% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }

    @keyframes roadRunnerIn {
        0% {
            transform: translateX(-1500px) skewX(30deg) scaleX(1.3);
        }
        70% {
            transform: translateX(30px) skewX(0deg) scaleX(0.9);
        }
        100% {
            transform: translateX(0px) skewX(0deg) scaleX(1);
        }
    }
    @keyframes roadRunnerOut {
        0% {
            transform: translateX(0px) skewX(0deg) scaleX(1);
        }
        30% {
            transform: translateX(-30px) skewX(-5deg) scaleX(0.9);
        }
        100% {
            transform: translateX(1500px) skewX(30deg) scaleX(1.3);
        }
    }

    .summary, .gameCover {
        width: 50%;
        margin: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    .gameCover img{
        height: 150px;
        width: 100px;
        box-shadow: 0 10px 20px -5px rgba(0,0,0,0.8);
        margin-bottom: 20px;
    }

    /*Media query*/
    @media screen and (max-width: 942px) {
        #modal-container .modal-background {
            padding: 0 10%;
        }
    }
    @media screen and (max-width: 620px) {
        .summary, .gameCover {
            width: 100%;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>