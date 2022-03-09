<template>
  <div
    :title="title"
    :subtitle="subtitle"
    :description="description"
    :button-text="button_text"
    :link="button_link"
    :image="image"
    :background="background"
  >
  </div>
</template>

<script>
import { SfBanner } from '@storefront-ui/vue'
export default {
  name: 'Banner',
  components: {
    //SfBanner
  },
  props: {
    title: {},
    subtitle: {},
    description: {},
    button_text: {},
    button_link: {},
    image: {},
    background: {},
  },
}