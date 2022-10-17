import MyComponent from '../../../../slices/SliceFollow';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SliceFollow'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"img_social":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085"}}],"primary":{"label":[{"type":"paragraph","text":"Lorem minim labore deserunt id eiusmod quis cupidatat aliqua in aliquip do voluptate ad voluptate.","spans":[]}]},"slice_type":"slice_follow","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
