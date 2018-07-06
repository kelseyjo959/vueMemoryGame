<template>
  <div class="chessboard">
    <Card v-for="(card, index) of cards" :key="index" :option="card" v-on:flipped="onFlipped"></Card>
  </div>
</template>

<script>
import Card from './Card'

import { mapActions, mapGetters } from 'vuex'

import { STATUS } from '../../vuex/store.js'

export default {
  data() {
    return {
      lastCard: null
    }
  },

  computed: {
    ...mapGetters(['leftMatched', 'cards', 'status'])
  },

  methods: {
    ...mapActions(['updateStatus', 'match', 'flipCards']),
    onFlipped(e) {
      if (this.status === STATUS.READY) {
        this.updateStatus(STATUS.PLAYING)
      }
      if (!this.lastCard) {
        return (this.lastCard = e)
      }
      if (this.lastCard !== e && this.lastCard.cardName === e.cardName) {
        this.lastCard = null
        this.match()
        return this.leftMatched || this.updateStatus(STATUS.PASS)
      }
      const lastCard = this.lastCard
      this.lastCard = null
      setTimeout(() => {
        this.flipCards([lastCard, e])
      }, 1000)
    }
  },

  components: { Card }
}
</script>

<style scoped>
.chessboard {
  margin-top: 10px;
  width: 100%;
  background-color: #c1c1bb;
  height: 830px;
  border-radius: 20px;
  padding: 20px 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: start;
}

.container:nth-child(4n) {
  margin-right: 0px;
}

@media screen and (max-width: 450px) {
  .chessboard {
    height: 480px;
    padding: 10px 0px;
  }
}
@media screen and (max-width: 370px) {
  .chessboard {
    height: 450px;
  }
}
</style>
