<template>
    <div class="container">
        <div class="header">
            <div class="cross">
                <div class="cross-vertical"></div>
                <div class="cross-horizontal"></div>
            </div>
            <div class="header-title">
                <h1>GAME INDEX</h1>
            </div>

            <div class="buttons">
                <div class="buttonA"></div>
                <div class="buttonB"></div>
            </div>
        </div>
        <div class="bottomBtns">
            <div class="start"></div>
            <div class="select"></div>
        </div>
    </div>
</template>

<script>
    import SearchBar from "./SearchBar";
    export default {
        name: "Header",
        components: {SearchBar}
    }
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #067f35;
        width: 100%;
    }
    .bottomBtns {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h1 {
        font-family: 'Press Start 2P', cursive;
        font-size: 50px;
        margin: 0;
        color: #000;
        text-align: center;
    }
.header{
    height: 125px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}
.cross{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 65px;
    margin-right: 50px;
}
.cross-vertical{
    background-color: #35ff71;
    height: 65px;
    width: 20px;
    position: absolute;

}
.cross-horizontal{
    background-color: #35ff71;
    height: 20px;
    width: 65px;
    position: absolute;
}


    .buttonA, .buttonB{
        background-color: #35ff71;
        height: 35px;
        width: 35px;
        border-radius: 50%;
        display: inline-block;
        margin: 10px;
    }

.start, .select{
    background-color: #35ff71;
    height: 10px;
    width: 50px;
    display: inline-block;
    margin: 0 10px;
}

.header-title{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
}
.buttons{
    margin-left: 50px;
}
@media screen and (max-width:724px){
    .buttons, .cross, .bottomBtns{
        display: none;
    }
    .header-title {
        width: 100%;
    }

}


    @media screen and (max-width: 850px) {
        .cross, .buttons {
            margin: 5px !important;
        }
    }


</style>