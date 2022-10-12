import MyComponent from '../../../../slices/SectionWho';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionWho'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"img":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6"},"label":[{"type":"paragraph","text":"Aute ipsum excepteur amet ut excepteur cillum veniam ad non ipsum ipsum laboris in. Amet nisi quis consectetur exercitation elit. Quis tempor veniam voluptate velit Lorem ut.","spans":[]}],"link_tag":{"link_type":"Web","url":"https://prismic.io"},"title":[{"type":"heading4","text":"Acres","spans":[]}],"para":[{"type":"paragraph","text":"Ad eu ut reprehenderit in nulla officia veniam labore proident aliquip nisi minim ea dolore quis.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"},"label_link":[{"type":"paragraph","text":"Velit officia veniam et occaecat ea laboris ullamco eiusmod aliqua eiusmod mollit aliqua. Aute nostrud tempor aute culpa do adipisicing laboris duis.","spans":[]}]}],"primary":{"title":[{"type":"heading2","text":"Nothing","spans":[]}],"para":[{"type":"paragraph","text":"Proident est sit quis adipisicing commodo proident nulla amet labore dolor ad reprehenderit incididunt ad sunt.","spans":[]}],"label":[{"type":"paragraph","text":"Ut commodo consequat minim ullamco labore deserunt aute aliquip est ex magna velit culpa aute. Fugiat exercitation est aliquip Lorem enim non esse esse dolore exercitation duis id quis commodo incididunt. Nisi cupidatat ad nulla mollit elit amet voluptate consectetur commodo deserunt laborum eu proident cupidatat.","spans":[]}],"link":{"link_type":"Web","url":"http://google.com"}},"slice_type":"section_who","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
