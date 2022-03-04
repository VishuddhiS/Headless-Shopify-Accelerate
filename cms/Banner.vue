<template>
  <SfBanner
    :title="title"
    :subtitle="subtitle"
    :description="description"
    :button-text="button_text"
    :link="button_link"
    :image="image"
    :background="background"
  >
  </SfBanner>
</template>

<script>
import { SfBanner } from '@storefront-ui/vue'
export default {
  name: 'Banner',
  components: {
    SfBanner
  },
  props: {
    title: {},
    subtitle: {},
    description: {},
    banner_text: {},
    banner_link: {},
    image: {},
    background: {},
  },
}