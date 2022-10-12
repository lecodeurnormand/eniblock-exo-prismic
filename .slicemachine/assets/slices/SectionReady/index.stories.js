import MyComponent from '../../../../slices/SectionReady';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionReady'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading2","text":"Silver","spans":[]}],"para":[{"type":"paragraph","text":"Voluptate sint voluptate excepteur laborum esse ex voluptate ea voluptate adipisicing eu sint consequat.","spans":[]}],"label":[{"type":"paragraph","text":"Mollit proident non cupidatat do.","spans":[]}],"link":{"link_type":"Web","url":"http://google.com"}},"slice_type":"section_ready","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
