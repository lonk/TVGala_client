<template>
    <div class="b-display">
        <div class="b-header">
            <div class="b-header__clock">{{ currentHour | hour }}</div>
            <div class="b-header__message">Vos tweets sur le<br /><strong>#GalaUTT2017</strong></div>
        </div>
    </div>
</template>

<script>
import './lib/dates.js';

export default {
    data () {
        return {
            currentHour: new Date()
        };
    },

    mounted () {
        setInterval(() => {
          this.currentHour = new Date();
        }, 1000);
    }
}
</script>

<style lang="css">
.b-display {
    background-image: url('./assets/background.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    font-family: Helvetica, Arial, sans-serif;
    color: white;
}

.b-header {
    width: 100%;
    height: 10%;
    color: #222222;
    display: flex;
    justify-content: space-between;
}

.b-header > .b-header__clock {
    padding-top: 10px;
    text-align: center;
    width: 10%;
    margin-left: 8%;
    font-size: 6vmin;
}

.b-header > .b-header__message {
    padding-top: 10px;
    text-align: center;
    width: 18%;
    margin-right: 8%;
    font-size: 3.5vmin;
}
</style>
