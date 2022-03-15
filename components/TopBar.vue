<template>
  <SfTopBar :announcementText="announcementText">
    <template #center>
      <!-- {{ $t(announcementText) }} For Text translation -->
      {{ announcementText }}
    </template>
    <template #right>
      <!-- <LocaleSelector /> -->
    </template>
  </SfTopBar>
</template>

<script>
import { SfButton, SfTopBar } from "@storefront-ui/vue";
import LocaleSelector from "./LocaleSelector";

export default {
  name: "TopBar",
  components: {
    SfTopBar,
    SfButton,
    LocaleSelector,
  },

  props: {
    announcementText: {},
  },
};
</script>
<style lang="scss" scoped>
.topbar {
  position: relative;
  z-index: 2;
  &__button {
    margin: 0 0 0 var(--spacer-xs);
  }
}
</style>
