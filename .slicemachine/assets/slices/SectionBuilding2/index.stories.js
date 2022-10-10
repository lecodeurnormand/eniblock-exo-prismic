import MyComponent from '../../../../slices/SectionBuilding2';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionBuilding2'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"img":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa"},"select":"Live now","status":[{"type":"paragraph","text":"Veniam sit nostrud officia elit ea magna excepteur Lorem incididunt magna commodo consequat. Anim esse magna laborum ut irure mollit quis do ullamco.","spans":[]}]}],"primary":{"title2":[{"type":"paragraph","text":"Mollit consequat in veniam.","spans":[]}],"title_small":[{"type":"heading6","text":"Palace","spans":[]}]},"slice_type":"section_building2","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
