<template>
  <div class="svg-icon-block">
    <!-- <SvgClose :class="{'svg-icon-close': buttonType === 'close', 'svg-icon-delete': buttonType === 'delete'}" /> -->
    <button :class="{'svg-icon-close': buttonType === 'close', 'svg-icon-delete': buttonType === 'delete'}">
      <svg viewPort="0 0 12 12" version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="17" 
              x2="17" y2="1" 
              stroke="black" 
              stroke-width="3"/>
        <line x1="1" y1="1" 
              x2="17" y2="17" 
              stroke="black" 
              stroke-width="3"/>
    </svg>
    </button>
  </div>
</template>

<script>
import SvgClose from '~~/assets/svg/baseline-close-24px.svg?inline'
export default {
  components: {
    SvgClose
  },
  props: {
    buttonType: {
      type: String,
      default: 'close'
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  border: none;
  background-color: rgba($color: #000000, $alpha: 0);
  cursor: pointer;
}
.svg-icon-close {
  // background: #ddd;
  // fill: #ffb2a9;
  // border: 3px solid #ffb2a9;
  transition: all .3s ease;
  width: 20px;
  height: 20px;
  &:hover {
    // background: #ddd;
    fill: #fb3f4c;
    border-color: #fb3f4c;
  }
  // &::after {
  //    display: inline-block;
  //   content: "\00d7";
  // }
    @media (--mobile) {
    width: 20px;
    height: 20px;
    border-width: 3px;
  }
}




</style>