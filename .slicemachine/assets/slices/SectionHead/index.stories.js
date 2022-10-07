import MyComponent from '../../../../slices/SectionHead';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionHead'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"subtitle":[{"type":"paragraph","text":"Consectetur incididunt Lorem cupidatat aliqua sit do amet commodo. Qui incididunt et laboris in do mollit eiusmod deserunt minim minim ut minim ex.","spans":[]}],"title":[{"type":"paragraph","text":"Minim minim et elit eu in labore magna.","spans":[]}],"button_cta":{"link_type":"Web","url":"https://slicemachine.dev"},"label":[{"type":"paragraph","text":"Excepteur adipisicing sunt labore aute voluptate sint enim reprehenderit cillum irure nulla elit cupidatat. Aute aute non enim velit commodo elit commodo ex et velit Lorem fugiat laborum nisi.","spans":[]}]},"slice_type":"section_head","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
