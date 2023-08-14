<script lang="ts">
import { defineComponent, PropType, Component } from 'vue'
import SVGIcon from './SVGIcon.vue'
import { cva } from 'class-variance-authority'

const validVariants = ['primary', 'secondary', 'tertiary']

export default defineComponent({
  components: { SVGIcon },
  props: {
    // leftIcon: Object as PropType<Component>,
    //   rightIcon: Object as PropType<Component>,
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
  },
  computed: {
    buttonClass() {
      return cva(
        'rounded-xl font-medium transition-colors duration-300 flex items-center justify-center gap-4',
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
  <component :is="$props.as" :class="buttonClass">
    <svg
      v-if="isLoading"
      class="animate-spin -ml-1 mr-3 h-8 w-8"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    <SVGIcon v-if="$props.leftIcon" :name="$props.leftIcon" class="" />
    <!-- <component :is="$props.leftIcon"></component> -->
    <slot> Button </slot>
    <!-- <component :is="$props.rightIcon"></component> -->
    <SVGIcon v-if="$props.rightIcon" :name="$props.rightIcon" class="" />

    <slot name="rightIcon"></slot>
  </component>
</template>
