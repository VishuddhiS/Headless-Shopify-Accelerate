<template>
  <div>
    <div v-if="loading">Loading content...</div>
    <div v-if="error">Something is wrong!</div>

    <div v-for="content in bannerContents" :key="content.button_link">
      {{ content.fields.title }}
      <banner :title="content.fields.title" :image="test_image" />
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
      console.log("vishuddhi", get(content, "value.0.fields.content", []));
    });
    // return data
    return {
      bannerContents: get(content, "value.0.fields.content", []),
      loading,
      error,
      test_image:
        "https://images.unsplash.com/photo-1556021003-e17f39b31da4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8d256cEx4czBuUVl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    };
  },
};
</script>
