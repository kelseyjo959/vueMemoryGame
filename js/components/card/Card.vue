<template>
  <div class="container" v-on:click="flip">
    <div class="card" v-bind:class="{ flipped: option.flipped }">
      <img class="front" v-if="option.cardName === '8-ball'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77550_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'baked-potato'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77518_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'dinosaur'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/76638_th_600.jpeg"/>
      <img class="front" v-if="option.cardName === 'kronos'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/76901_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'rocket'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77522_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'skinny-unicorn'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77535_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'that-guy'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77471_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'zeppelin'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77551_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'dog'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77481_th_600.jpeg"/>
      <img class="front" v-if="option.cardName === 'cat'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77552_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'dog2'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77446_th_600.jpeg"/>
      <img class="front" v-if="option.cardName === 'pit'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77310_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'kit'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77472_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'wash'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77208_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'hit'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/76627_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'pool'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77259_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'pup'" src="https://www.strayrescue.org/media/k2/items/cache/sandy-point-stx-1763-XL.jpg"/>
      <img class="front" v-if="option.cardName === 'fluff'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77420_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'derp'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/67631_th_600.jpg"/>
      <img class="front" v-if="option.cardName === 'derp2'" src="http://nycaccpets.shelterbuddy.com//photos/lostfound/77427_th_600.jpg"/>

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
