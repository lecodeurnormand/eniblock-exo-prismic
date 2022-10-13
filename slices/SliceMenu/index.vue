<template>
  <div class="nav-footer">
    <nav class="nav-footer-list">

        <h6><PrismicRichText :field="slice.primary.title" /></h6>
            <ul>
                <li>
                </li>
            </ul>
    </nav>
    <nav class="nav-footer-list">
        <h6>Company</h6>
            <ul>
                <li>About Eniblock</li>
                <li>Newsroom & Blog</li>
                <li>Investors</li>
            </ul>
    </nav>
    <nav class="nav-footer-list">
        <h6>Docs</h6>
            <ul>
                <li>API</li>
                <li>Support</li>
            </ul>
    </nav>
</div>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SliceMenu",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>
