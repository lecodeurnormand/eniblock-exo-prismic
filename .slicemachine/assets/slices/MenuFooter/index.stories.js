import MyComponent from '../../../../slices/MenuFooter';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/MenuFooter'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"label":[{"type":"paragraph","text":"Irure nulla officia consequat proident. Amet incididunt et reprehenderit enim in quis.","spans":[]}],"link":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"title":[{"type":"paragraph","text":"Occaecat sit occaecat officia labore esse reprehenderit aute ad irure quis do occaecat commodo. Aliqua dolor nulla est sunt cillum occaecat. Amet consequat nulla nulla Lorem non aliqua eu et aliquip elit cillum eu deserunt.","spans":[]}]},"slice_type":"menu_footer","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
