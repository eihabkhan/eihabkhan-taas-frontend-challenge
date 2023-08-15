<script lang="ts">
import { defineComponent, PropType, Component } from 'vue'
import { cva } from 'class-variance-authority'
import SVGIcon from '@components/base/SVGIcon.vue'

const validVariants = ['primary', 'secondary', 'tertiary']

export default defineComponent({
  components: { SVGIcon },
  props: {
    leftIcon: { type: String },
    rightIcon: { type: String },
    as: {
      type: [String, Object] as PropType<Component>,
      default: 'button',
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String as PropType<(typeof validVariants)[number]>,
      default: 'primary',
      validator: (value: string) => validVariants.includes(value),
    },
    disabled: Boolean,
  },
  computed: {
    buttonClass() {
      return cva(
        'disabled:select-none disabled:bg-gray-400 rounded-xl font-medium transition-colors duration-300 flex items-center justify-center gap-4',
        {
          variants: {
            variant: {
              primary:
                'px-10 py-4 bg-black text-white hover:bg-gray-700 active:bg-black',
              secondary:
                'px-10 py-4 bg-gray-300 text-black hover:bg-gray-200 active:bg-gray-300',
              tertiary: 'text-black hover:text-gray-600',
            },
          },
        }
      )({
        // @ts-ignore
        variant: this.$props.variant,
      })
    },
  },
})
</script>

<template>
  <component :is="$props.as" :class="buttonClass" :disabled="$props.disabled">
    <SVGIcon v-if="isLoading" name="loader" class="" />
    <SVGIcon v-if="$props.leftIcon" :name="$props.leftIcon" class="" />
    <slot> Button </slot>
    <SVGIcon v-if="$props.rightIcon" :name="$props.rightIcon" class="" />

    <slot name="rightIcon"></slot>
  </component>
</template>
