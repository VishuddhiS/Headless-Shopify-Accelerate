<template>
  <div>
    <div v-if="loading">Loading content...</div>
    <div v-if="error">Something is wrong!</div>
    <div v-if="content">
      <render-content :content="content" />
    </div>
  </div>
</template>

<script>
import { onSSR } from "@vue-storefront/core";
import { useContent } from "@vsf-enterprise/contentful";
import RenderContent from "~/components/cms/RenderContent.vue";
import { Banner } from "~/components/cms/Banner.vue";

export default {
  name: "Page",
  components: {
    RenderContent,
    Banner,
  },
  setup() {
    const { search, content, loading, error } = useContent();
    // get data
    onSSR(async () => {
      await search({ url: "home-page" });
      console.log("vishuddhi", content.value);
    });
    // return data
    return {
      content,
      loading,
      error,
    };
  },
};
</script>
