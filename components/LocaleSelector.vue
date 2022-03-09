<template>
  <div class="container">
    <SfButton
      data-cy="locale-select_change-langauge"
      class="container__lang container__lang--selected"
      @click="isLangModalOpen = !isLangModalOpen"
    >
      <span v-for="lang in currentLocale" :key="lang.code">{{
        lang.label
      }}</span>
      <SfIcon
        icon="chevron_down"
        size="xxs"
        color="black"
        viewBox="0 0 12 12"
        :coverage="1"
      />
    </SfButton>
    <div
      v-if="isLangModalOpen"
      :is-open="isLangModalOpen"
      title="Choose language"
      class="language-selector"
      @click:close="isLangModalOpen = !isLangModalOpen"
    >
      <SfList>
        <SfListItem v-for="lang in availableLocales" :key="lang.code">
          <a :href="switchLocalePath(lang.code)">
            <span>{{ $t(lang.label) }}</span>
          </a>
        </SfListItem>
      </SfList>
    </div>
  </div>
</template>

<script type="module">
import { SfButton, SfList, SfIcon } from "@storefront-ui/vue";
import { ref, computed } from "@nuxtjs/composition-api";

export default {
  components: {
    SfButton,
    SfList,
    SfIcon,
  },
  setup(props, context) {
    const { locales, locale } = context.root.$i18n;
    const isLangModalOpen = ref(false);
    const availableLocales = computed(() =>
      locales.filter((i) => i.code !== locale)
    );
    const currentLocale = computed(() =>
      locales.filter((i) => i.code === locale)
    );

    return {
      availableLocales,
      locale,
      isLangModalOpen,
      currentLocale,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;

  img {
    margin-right: 0.5rem;
  }

  .language-selector {
    box-shadow: 0px 1px 7px 0 #ccc;
    border: 1px solid #bbb;
    border-top: 3px solid var(--c-text);
    left: 0;
    background: #fff;
    position: absolute;
    top: 100%;
    margin-top: 4px;
    min-width: 60px;
    z-index: 1;
    text-align: center;

    .sf-list__item {
      a {
        display: block;
        padding: 7px 10px;

        &:hover {
          background: var(--c-text);
          color: #fff;
        }
      }
    }
  }

  &__lang {
    --image-width: 20px;
    --button-box-shadow: none;
    background: none;
    padding: 0;
    display: flex;
    align-items: center;
    opacity: 0.5;
    border: none;
    &:hover,
    &--selected {
      opacity: 1;
    }
    color: var(--c-text);
    text-transform: none;
    font-weight: 400;
    font-size: var(--font-size--base);

    .sf-icon {
      --icon-size: 0.6rem;
      margin: 0 10px;
    }
  }
}
</style>
