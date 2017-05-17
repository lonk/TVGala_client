<template>
    <div class="b-display">
        <div class="b-header">
            <div class="b-header__clock">
                <b-clock></b-clock>
            </div>
            <div class="b-header__message">Vos tweets sur le<br /><strong>#GalaUTT2017</strong></div>
        </div>

        <div class="b-separator"></div>

        <div class="b-content">
            <div class="b-content__schedules">
                <b-schedules :schedules="schedules"></b-schedules>
            </div>
            <div class="b-content__messages"></div>
        </div>

        <div class="b-separator"></div>
    </div>
</template>

<script>
import io from 'socket.io-client';

import Clock     from './Clock.vue';
import Schedules from './Schedules.vue';

import config from './config.js';

export default {
    data() {
        return {
            socket   : io.connect(`http://${config.server.host}:${config.server.port}`),
            schedules: []
        };
    },

    components: {
        'b-clock'    : Clock,
        'b-schedules': Schedules
    },

    mounted() {
        this.socket.on('connect', () => {
            console.log('Client has connected to the server!');
        });

        this.socket.on('schedules', (data) => {
            this.schedules = data;
        });
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

.b-separator {
    width: 100%;
    height: 1.5%;
}

.b-content {
    width: 100%;
    height: 71.6%;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
}

.b-content > .b-content__schedules {
    width: 60%;
}

.b-content > .b-content__messages {
    width: 39%;
}
</style>
