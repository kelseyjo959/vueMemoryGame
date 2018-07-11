<template>
  <div class="container" v-on:click="flip">
    <div class="card" v-bind:class="{ flipped: option.flipped }">
      <!-- need Pet Object from Pawws App to provide most current urls  -->
      <img class="front" v-if="option.cardName === 'pet1'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77550_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'pet2'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77518_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'pet3'" src="https://www.strayrescue.org/media/k2/items/cache/yang-c-1791-L.jpg"/>
      <img class="front" v-if="option.cardName === 'pet4'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/76901_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'pet5'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77522_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'pet6'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77535_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'pet7'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77471_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'pet8'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77551_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'pet9'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77481_th_600.jpeg"/>
      <img class="front" v-if="option.cardName === 'pet10'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77552_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'pet11'" src="https://www.strayrescue.org/media/k2/items/cache/bonita-stt-1796-L.jpg"/>
      <img class="front" v-if="option.cardName === 'pet12'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77310_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'pet13'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77472_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'pet14'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77208_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'pet15'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/76627_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'pet16'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77259_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'pet17'" src="https://www.strayrescue.org/media/k2/items/cache/sandy-point-stx-1763-XL.jpg"/>
      <img class="front" v-if="option.cardName === 'pet18'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77420_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'pet19'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/67631_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'pet20'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77427_th_600.jpg"/>

      <img class="back" src="../../../img/ADOPT_ME.png"/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    option: {
      type: Object,
      default() {
        return {
          flipped: false,
          cardName: ''
        }
      }
    }
  },

  methods: {
    ...mapActions(['flipCard']),
    flip() {
      if (this.option.flipped) {
        return
      }
      this.flipCard(this.option)
      this.$emit('flipped', this.option)
    }
  },

  components: {}
}
</script>

<style scoped>
.container {
  width: 180px;
  height: 200px;
  /* margin-right: 3px; */
  cursor: pointer;
  position: relative;
  perspective: 800px;
  padding: 2px;
}

.card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.card.flipped {
  transform: rotateY(180deg);
}

.card img {
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
  padding: 2px;
  border-radius: 20px;
}

.card .back {
  background: black;
  transform: rotateY(0deg);
}

.card .front {
  background: black;
  transform: rotateY(180deg);
}

@media screen and (max-width: 450px) {
  .container {
    width: 92px;
    height: 111px;
    margin-right: 1px;
  }
}

@media screen and (max-width: 380px) {
  .container {
    width: 85px;
    height: 102px;
    margin-right: 1px;
  }
}

@media screen and (max-width: 360px) {
  .container {
    width: 70px;
    height: 84px;
    margin-right: 1px;
  }
}
</style>
