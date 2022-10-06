import MyComponent from '../../../../slices/Hero';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Hero'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading1","text":"Event","spans":[]}],"description":[{"type":"paragraph","text":"Dolore exercitation exercitation consectetur sunt mollit consequat consequat. Cupidatat Lorem quis est do. Sit reprehenderit consectetur ad consectetur sint dolor reprehenderit dolor do dolor commodo nostrud voluptate pariatur.","spans":[]}]},"slice_type":"hero","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
