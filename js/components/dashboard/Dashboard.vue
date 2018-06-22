<template>
  <div class="status-bar">
    <Logo></Logo>
    <Match-info></Match-info>
    <Score></Score>
  </div>
</template>

<script>
import Logo from './Logo'
import MatchInfo from './MatchInfo'
import Score from './Score'

export default {
  components: { Logo, MatchInfo, Score }
}
</script>

<style scoped>
.status-bar {
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
