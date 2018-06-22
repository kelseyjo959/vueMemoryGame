<template>
  <div class="board">
    <span>Pairs Left To Match</span>
    <h2>{{ leftMatched }}</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['leftMatched'])
  }
}
</script>

<style scoped>
.board {
  width: 190px;
  height: 50px;
  padding: 10px;
  background-color: #5979ac;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #fff;
}

span {
  font-size: 19px;
  font-weight: bold;
  display: block;
  width: 100%;
  text-align: center;
}

h2 {
  color: #fff;
}
@media screen and (max-width: 450px) {
  .board {
    width: 105px;
  }
  span {
    font-size: 17px;
  }
}

@media screen and (max-width: 380px) {
  .board {
    width: 95px;
  }
}

@media screen and (max-width: 360px) {
  .board {
    width: 90px;
  }
  span {
    font-size: 15px;
  }
}
</style>
