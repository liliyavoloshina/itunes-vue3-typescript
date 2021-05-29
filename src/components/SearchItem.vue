<template>
  {{item.artistName}}
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {ResponseResult} from '../types/response'

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<ResponseResult>,
      required: true
    }
  },
  setup() {}
})
</script>
