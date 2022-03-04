<template>
  <RenderContent :content="content" />
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
      await search({ id: "4babQy0Ix2ybBNq191VhtV" });
      // console.log("vishuddhi", content.value);
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
