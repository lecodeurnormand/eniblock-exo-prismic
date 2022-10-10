import MyComponent from '../../../../slices/SectionTouch';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionTouch'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"subtitle":[{"type":"heading1","text":"Whale","spans":[]}],"title":[{"type":"heading5","text":"Thread","spans":[]}],"label":[{"type":"paragraph","text":"Laborum aute duis ut.","spans":[]}],"link":{"link_type":"Web","url":"https://prismic.io"}},"slice_type":"section_touch","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
