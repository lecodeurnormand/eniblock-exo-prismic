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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"subtitle":[{"type":"heading5","text":"Thread","spans":[]}],"title":[{"type":"heading5","text":"Welcome","spans":[]}],"label":[{"type":"paragraph","text":"Excepteur ad veniam fugiat nisi laboris ullamco labore ex in sit ipsum in aliqua officia. Lorem dolore nulla proident elit amet incididunt.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"}},"slice_type":"section_touch","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
