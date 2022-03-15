<template>
  <div class="main-wrapper">
    <!-- <div v-if="loading">Loading content...</div>
    <div v-if="error">Something is wrong!</div>
    <div v-if="bannerContents">
      <RenderContent :content="bannerContents" />
    </div> -->

    <!-- Hero Banner Slider -->
    <!-- <SfHero>
      <div :v-for="banner in bannerContents">
        <SfHeroItem
          :title="banner.fields.title"
          :key="banner.fields.title"
          :subtitle="banner.fields.subtitle"
          :buttonText="banner.fields.buttonText"
          :link="banner.fields.buttonLink"
          :image="banner.fields.image[0].fields.file.url"
        />
      </div>
    </SfHero> -->
    <!-- Shop By Categories Section -->
    <LazyHydrate when-visible>
      <SfSection :titleHeading="shopByCategories" class="section">
        <SfLoader :class="{ loading }" :loading="loading">
          <SfCarousel
            data-cy="categories-carousel"
            :settings="{
              perView: 4,
              gap: 20,
              slidePerPage: false,
              breakpoints: { 1023: { peek: 0, perView: 2 } },
            }"
            class="carousel"
          >
            <SfCarouselItem
              v-for="cat in categories"
              :key="cat.id"
              class="carousel__item"
            >
              <SfCategoryCard
                :label="cat.title"
                :background="cat.image.src"
                :link="localePath(`/c/${cat.handle}`)"
                class="custom-category-card"
              />
            </SfCarouselItem>
          </SfCarousel>
        </SfLoader>
      </SfSection>
    </LazyHydrate>

    <!-- Promo Banner Blocks -->
    <div v-for="item in promoBanners" :key="item.title">
      <SfLink :link="item.fields.description">
        <img :src="item.fields.file.url" alt="" />
      </SfLink>
    </div>
  </div>
</template>

<script>
import { get } from "lodash";
import { useCategory } from "@vue-storefront/shopify";
import { onSSR } from "@vue-storefront/core";
import { useContent } from "@vsf-enterprise/contentful";
import LazyHydrate from "vue-lazy-hydration";
import RenderContent from "~/cms/RenderContent.vue";
import {
  SfBanner,
  SfHero,
  SfSection,
  SfCarousel,
  SfCategoryCard,
  SfLoader,
  SfLink,
} from "@storefront-ui/vue";

export default {
  name: "Page",
  components: {
    RenderContent,
    LazyHydrate,
    SfLoader,
    SfHero,
    Banner: SfBanner,
    SfSection,
    SfCarousel,
    SfCategoryCard,
    SfLink,
  },
  setup() {
    const { search, content, loading, error } = useContent();
    const { categories } = useCategory("menuCategories");
    // get data
    onSSR(async () => {
      await search({ url: "home-page" });
      // console.log(
      //   "vishuddhi",
      //   get(content, "value.0.fields.shopByCategories", [])
      // );
    });
    // return data
    return {
      content,
      bannerContents: get(content, "value.0.fields.content", []),
      shopByCategories: get(content, "value.0.fields.shopByCategories", ""),
      categories,
      promoBanners: get(content, "value.0.fields.promoBlocks", []),
      loading,
      error,
    };
  },
};
</script>
<style lang="scss">
.sf-section {
  --spacer-xl: 3.5rem;
  --section-margin: var(--spacer-xl) 0;
  --section-content-margin: var(--spacer-lg) 0 0 0;
}
.sf-hero {
  .sf-arrow {
    --icon-color: var(--c-white);
  }
  .sf-hero-item {
    &__wrapper,
    &__subtitle,
    &__title,
    .sf-arrow {
      color: #fff;
    }
  }
}
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

.custom-category-card {
  height: 20rem;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}
</style>
