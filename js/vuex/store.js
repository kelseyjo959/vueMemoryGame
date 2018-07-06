import Vue from 'vue';
import Vuex from 'vuex';
import { shuffle } from '../lib/shuffle'

const cardNames = ['pet1', 'pet2', 'pet3', 'pet4', 'pet5', 'pet6', 'pet7', 'pet8', 'pet9', 'pet10', 'pet11', 'pet12', 'pet13', 'pet14', 'pet15', 'pet16', 'pet17', 'pet18', 'pet19', 'pet20'];
var timerId
var statusHandler = {
    PLAYING: function({ commit }) {
        timerId = setInterval(function() {
            commit('counting')
        }, 1000)
    }, 
    PASS: function({ commit }) {
        clearInterval(timerId)
        commit('updateHighestSpeed')
    }
} 
export const STATUS = {
    READY: 'READY',
    PLAYING: 'PLAYING',
    PASS: 'PASS'
  }


Vue.use(Vuex);

export const store = new Vuex.Store({
    // strict: true,
    state: {
        leftMatched: 0,
        highestSpeed: 0,
        status: '',
        cards: [],
        elapsedMs: 0
    },

    getters: {
        leftMatched: state => state.leftMatched,
        highestSpeed: state => state.highestSpeed,
        elapsedMs: state => state.elapsedMs,
        cards: state => state.cards,
        status: state => state.status
    }, 

    mutations: {
        reset(st, newState) {
            st.leftMatched = newState.leftMatched,
            st.highestSpeed = newState.highestSpeed,
            st.status = newState.status,
            st.cards = newState.cards,
            st.elapsedMs = newState.elapsedMs
        }, 
        updateStatus(st, newStatus) {
            st.status = newStatus
        }, 
        decreaseMatch(st) {
            st.leftMatched--
        }, 
        flip(st, card) {
            var c = st.cards.find(cc => cc === card)
            c.flipped = !c.flipped
        },
        flips(st, cards) {
            st.cards.filter(cc => cards.indexOf(cc) >= 0).forEach(c => {
                c.flipped = !c.flipped
            })
        },
        counting(st) {
            st.elapsedMs++
        }, 
        updateHighestSpeed(st) {
            if (!localStorage.getItem('highestSpeed')) {
                return localStorage.setItem('highestSpeed', st.elapsedMs)
            }
            if (localStorage.getItem('highestSpeed') > st.elapsedMs) {
                return localStorage.setItem('highestSpeed', st.elapsedMs)
            }
        }
    }, 

    actions: {
        reset: function({ commit }) {
            commit('reset', {
                leftMatched: 20, 
                highestSpeed: localStorage.getItem('highestSpeed') || 9999,
                status: STATUS.READY, 
                cards: shuffle(cardNames.concat(cardNames)).map(name => ({ flipped: false, cardName: name })),
                elapsedMs: 0
            })
        }, 
        updateStatus: function(context, status) {
            context.commit('updateStatus', status)
            statusHandler[status] && statusHandler[status](context)
        }, 
        flipCard: function({ commit }, card) {
            commit('flip', card)
        }, 
        flipCards: function({ commit }, cards) {
            commit('flips', cards)
        }, 
        match: function({ commit }) {
            commit('decreaseMatch')
        }
    }
})
