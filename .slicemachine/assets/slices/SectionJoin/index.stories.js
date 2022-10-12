import MyComponent from '../../../../slices/SectionJoin';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionJoin'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"img":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853"}}],"primary":{"title":[{"type":"heading5","text":"Atmosphere","spans":[]}]},"slice_type":"section_join","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
