import MyComponent from '../../../../slices/SectionPlatform';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionPlatform'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"subtitle":[{"type":"heading6","text":"Cause","spans":[]}],"img":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1547394765-185e1e68f34e"},"title":[{"type":"heading5","text":"Action","spans":[]}],"para":[{"type":"paragraph","text":"Consectetur occaecat anim nulla mollit commodo dolor do nulla et adipisicing culpa magna commodo.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Experiment","spans":[]}],"para":[{"type":"paragraph","text":"Dolore Lorem anim ut reprehenderit quis cupidatat est. Elit ea deserunt excepteur aliquip.","spans":[]}]},"slice_type":"section_platform","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
