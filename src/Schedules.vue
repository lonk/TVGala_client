<template>
    <table class="b-schedules">
        <tr v-for="schedule in displayedSchedules" class="b-schedules__line">
            <td class="b-schedules__line__start" v-if="!isPast(schedule.start)">{{ schedule.start | hour }}</td>
            <td class="b-schedules__line__start" v-else>En cours</td>
            <td class="b-schedules__line__name">{{ schedule.name }}</td>
            <td class="b-schedules__line__location">{{ schedule.location }}</td>
        </tr>
    </table>
</template>

<script>
import './lib/dates';

export default {
    props: {
        schedules: Array
    },

    data () {
        return {
            currentDate: new Date(),
            timeout    : 0
        };
    },

    methods: {
        isPast(date) {
            return !(new Date(date) > this.currentDate);
        }
    },

    computed: {
        displayedSchedules() {
            return this.schedules
                .filter(schedule => !this.isPast(schedule.end))
                .sort((a, b) => (new Date(a.start) - new Date(b.start)));
        }
    },

    mounted () {
        this.timeout = setInterval(() => {
          this.currentDate = new Date();
        }, 1000);
    },

    beforeDestroy () {
        clearInterval(this.timeout);
    }
}
</script>

<style lang="css">
.b-schedules {
    width: 100%;
}

.b-schedules > .b-schedules__line {
    width: 100%;
    max-height: 12%;
    text-align: center;
    font-size: 3vmin;
}

.b-schedules__line > td {
    padding-top: 2%;
    max-height: 11%;
}

.b-schedules__line > .b-schedules__line__start {
    width: 20%;
    font-weight: bold;
    font-size: 4vmin;
}

.b-schedules__line > .b-schedules__line__name {
    width: 50%;
    font-size: 4.1vmin;
}

.b-schedules__line > .b-schedules__line__location {
    padding-top: 1.5%;
    width: 30%;
}
</style>