<template lang="html">
  <div :class='{"tabs__light": mode === "light", "tabs__dark": mode === "dark"}'>
    <ul class='tabs__header'>
      <li v-for='(tab, index) in tabs'
        :key='tab.title'
        @click='selectTab(index)'
        class="fs20"
        :class='{"tab__selected": (index == selectedIndex)}'>
        {{ tab.title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: 'light'
    }
  },
  data () {
    return {
      selectedIndex: 0, // the index of the selected tab,
      tabs: []         // all of the tabs
    }
  },
  created () {
    this.tabs = this.$children
  },
  mounted () {
    this.selectTab(0)
  },
  methods: {
    selectTab (i) {
      this.selectedIndex = i

      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.isActive = (index === i)
      })
    }
  }
}
</script>

<style lang="css">

  ul.tabs__header {
    display: block;
    list-style: none;
    margin: 0 0 0 20px;
    padding: 0 20px;
  }

  ul.tabs__header > li {
    min-width: 96px;
    padding: 0 20px;
    height: 36px;
    margin: 0 15px 0 0;
    background-color: transparent;
    border: 1px solid #a8a8a8;
    border-radius: 18px;
    color: white;
    cursor: pointer;
    display: inline-flex;
    color: black;
    align-items: center;
  }

  ul.tabs__header > li.tab__selected {
    font-weight: bold;
    border-radius: 18px;
    background-color: #ffda00;
  }

  .tab {
    display: inline-block;
    color: black;
    padding: 20px;
    min-width: 800px;
    border-radius: 10px;
    min-height: 400px;
  }

  .tabs__light li {
    min-width: 96px;
    padding: 0 20px;
    height: 36px;
    margin: 0 15px 0 0;
    background-color: transparent;
    border: 1px solid #a8a8a8;
    border-radius: 18px;
    color: white;
    cursor: pointer;
    color: black;
  }

</style>