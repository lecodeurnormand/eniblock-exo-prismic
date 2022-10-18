<template>
            <nav class="nav-footer-list">
                <PrismicText :field="slice.primary.title" wrapper="h6" />
                    <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">    
                            <ul>
                                <PrismicLink :field="item.link">
                                    <PrismicText :field="item.label" wrapper="li" />
                                </PrismicLink>
                            </ul>
                    </div>
            </nav>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SliceMenu",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>
