import MyComponent from '../../../../slices/SectionAbout';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionAbout'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading2","text":"Changing","spans":[]}],"para":[{"type":"paragraph","text":"Quis cupidatat non aliquip dolor do enim enim. Veniam occaecat laborum Lorem pariatur fugiat anim adipisicing. Ad nostrud anim duis non duis exercitation laboris cillum enim cupidatat ipsum eiusmod duis do.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a"},"para2":[{"type":"paragraph","text":"Fugiat proident mollit nulla reprehenderit aute. Dolor reprehenderit ipsum consequat nulla amet esse commodo consectetur anim amet ut fugiat.","spans":[]}],"label":[{"type":"paragraph","text":"Sunt voluptate veniam elit irure.","spans":[]}],"link":{"link_type":"Web","url":"https://prismic.io"}},"slice_type":"section_about","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
