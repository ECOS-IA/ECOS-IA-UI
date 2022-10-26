<template>
  <base-button
      :disabled="false"
      :color="color"
      v-on:click.native="handleClick"

  >
    <font-awesome-icon
        v-if="isPending"
        :icon="['fas', 'circle-notch']"
        pulse
    />
    <slot />
  </base-button>

</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  name: 'AsyncButton',
  components: {BaseButton  },
  inheritAttrs : false,
  props: {
    color: {
      type: String,
      default: 'primary'
    }
  },
  data () {
    return {
      isPending: true,
    }
  },
  methods: {
    handleClick : function () {
      console.log("ok")
      if (this.isPending == true){
        this.isPending = false;
      }
      else{
        this.isPending = true;

      }
    },
  }
}
</script>