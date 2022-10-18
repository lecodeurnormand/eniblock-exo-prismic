import MyComponent from '../../../../slices/SliceCopyright';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SliceCopyright'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"label":[{"type":"paragraph","text":"Qui do aute mollit et dolor sit elit ad aliquip aliquip ut ipsum Lorem.","spans":[]}],"link":{"link_type":"Web","url":"http://google.com"}}],"primary":{},"slice_type":"slice_copyright","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
