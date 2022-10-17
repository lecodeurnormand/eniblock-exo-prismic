import MyComponent from '../../../../slices/SliceMenu';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SliceMenu'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"label":[{"type":"paragraph","text":"Culpa enim magna quis ex est ad occaecat dolore do culpa nulla proident. In consequat labore eiusmod tempor nisi mollit id veniam ad proident nisi. Nulla ullamco id consequat.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{"title":[{"type":"paragraph","text":"Consequat nulla laboris dolore tempor nisi pariatur exercitation consequat incididunt.","spans":[]}]},"slice_type":"slice_menu","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
