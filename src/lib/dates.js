import Vue from 'vue';

function parseHour (date) {
    const dateJs = new Date(date);

    const hour    = `0${dateJs.getHours()}`.slice(-2);
    const minutes = `0${dateJs.getMinutes()}`.slice(-2);

    return `${hour}:${minutes}`;
}

function parseDate (date) {
    const dateJs = new Date(date);

    const day   = `0${dateJs.getDate()}`.slice(-2);
    const month = `0${dateJs.getMonth() + 1}`.slice(-2);
    const year  = dateJs.getFullYear();

    const hour    = `0${dateJs.getHours()}`.slice(-2);
    const minutes = `0${dateJs.getMinutes()}`.slice(-2);

    return `${day}/${month}/${year} ${hour}:${minutes}`;
}

function convertDate (dateString) {
    const regexp = /([0-9]{2})\/([0-9]{2})\/([0-9]{4}) ([0-9]{2}):([0-9]{2})/;
    const result = dateString.match(regexp);

    return new Date(result[3], result[2]-1, result[1], result[4], result[5]);
}

Vue.filter('hour', date => parseHour(date));
Vue.filter('date', date => parseDate(date));
