<template>
  <div>
    <!-- <div v-if="loading">Loading content...</div>
    <div v-if="error">Something is wrong!</div>
    <div v-if="bannerContents">
      <RenderContent :content="bannerContents" />
    </div> -->
    <div v-for="content in bannerContents" :key="content.button_link">
      <Banner
        :title="content.fields.title"
        :description="content.fields.description"
        :subtitle="content.fields.subtitle"
        :buttonText="content.fields.buttonText"
        :link="content.fields.buttonLink"
        :image="content.fields.image[0].fields.file.url"
      />
    </div>
  </div>
</template>

<script>
import { get } from "lodash";
import { onSSR } from "@vue-storefront/core";
import { useContent } from "@vsf-enterprise/contentful";
import RenderContent from "~/cms/RenderContent.vue";
import { SfBanner } from "@storefront-ui/vue";

export default {
  name: "Page",
  components: {
    RenderContent,
    Banner: SfBanner,
  },
  setup() {
    const { search, content, loading, error } = useContent();
    console.log(error);
    // get data
    onSSR(async () => {
      await search({ url: "home-page" });
      // console.log(
      //   "vishuddhi",
      //   get(content, "value.0.fields.announcements", [])
      // );
    });
    // return data
    return {
      content,
      bannerContents: get(content, "value.0.fields.content", []),
      loading,
      error,
    };
  },
};
</script>
<style lang="scss">
.sf-banner {
  &__wrapper {
    align-items: var(--banner-align-items, flex-end);
    --banner-wrapper-width: 38%;
    > * {
      color: var(--c-banner-content);
    }
  }
  .sf-button {
    background: var(--c-primary);
    margin: 1.5rem 0 0;
    padding: 0.9rem 1.87rem 1.1rem;
    font-size: 0.93rem;
    letter-spacing: 0.1rem;
    width: auto;
    font-weight: normal;
    border-radius: 4px;

    &:hover {
      background: var(--c-secondary);
      color: #fff;
    }
  }

  .sf-banner__subtitle {
    font-size: 1.875rem;
    text-transform: var(--banner-subtitle-text-transform, none);
  }

  .sf-banner__title {
    font-size: 5rem;
    line-height: 1;
    margin: 0.5rem 0 0;
  }

  .sf-banner__description {
    text-transform: var(--banner-subtitle-text-transform, uppercase);
    font-size: 2.5rem;
    margin: 0;
    line-height: 1;
  }
}
</style>
