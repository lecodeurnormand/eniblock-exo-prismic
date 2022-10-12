import MyComponent from '../../../../slices/SectionForm';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionForm'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"img":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"},"title":[{"type":"heading2","text":"Political","spans":[]}],"button":[{"type":"paragraph","text":"Ullamco incididunt deserunt qui eiusmod adipisicing ut laborum non commodo aliquip est incididunt non nulla. Reprehenderit irure aliquip irure irure ex commodo cillum irure anim ut pariatur anim minim. Fugiat dolor ut nulla ea quis elit consectetur anim aliquip.","spans":[]}]},"slice_type":"section_form","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
