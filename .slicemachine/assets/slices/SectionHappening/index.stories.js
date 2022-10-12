import MyComponent from '../../../../slices/SectionHappening';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionHappening'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"img":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a"},"span_button":[{"type":"paragraph","text":"Deserunt aliqua deserunt minim eu duis nisi nisi commodo aliqua cupidatat sunt. Voluptate consectetur adipisicing et deserunt non enim in ex officia esse ipsum do Lorem nulla pariatur. Eiusmod aliqua amet esse Lorem excepteur ipsum eiusmod exercitation nostrud aliqua irure.","spans":[]}],"title":[{"type":"paragraph","text":"In cillum ex amet ipsum veniam irure eu culpa non mollit ipsum magna. Esse sint non labore eiusmod do veniam deserunt labore labore ullamco sit dolore.","spans":[]}],"para":[{"type":"paragraph","text":"Et ad sint exercitation.","spans":[]}],"label":[{"type":"paragraph","text":"Aliqua eu nostrud et consequat eiusmod commodo esse voluptate. Duis laboris reprehenderit non dolor do id labore occaecat consequat quis dolor do mollit.","spans":[]}],"link":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{"title":[{"type":"heading2","text":"Refer","spans":[]}]},"slice_type":"section_happening","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
