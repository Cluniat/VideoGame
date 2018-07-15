<template>
    <div class="modal-backdrop" @click="close">
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
                        {{details[2]}}
                    </div>
                </slot>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Modal',

        methods: {
            close() {
                this.$store.commit('setToggleModal')
            },
        },
        computed: {
            details(){
                return this.$store.state.details
            }
        }

    }
</script>

<style scoped>
    .modal-backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 50, 25, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
        padding: 0 30%;
    }
    @media screen and (max-width: 942px) {
        .modal-backdrop {
            padding: 0 10%;
        }
    }

    .summary, .gameCover {
        width: 50%;
        margin: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
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
    .gameCover img{
        height: 150px;
        width: 100px;
        box-shadow: 0 10px 20px -5px rgba(0,0,0,0.8);
        margin-bottom: 20px;
    }
    .modal {
        background: #FFFFFF;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
    }

    .modal-header{
        padding: 15px;
        display: flex;
    }

    .modal-header {
        border-bottom: 1px solid #eeeeee;
        color: #067f35;
        font-weight: bold;
        font-size: 30px;
        justify-content: center;
        display: flex;
        align-items: center;
    }

    .modal-body {
        position: relative;
        padding: 20px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .btn-close {
        border: none;
        font-size: 20px;
        padding: 20px;
        cursor: pointer;
        font-weight: bold;
        color: #7F0707;
        background: transparent;
    }

</style>