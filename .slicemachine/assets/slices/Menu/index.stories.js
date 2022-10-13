import MyComponent from '../../../../slices/Menu';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Menu'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"label":[{"type":"paragraph","text":"Duis magna do velit et dolore nulla eiusmod aliqua duis.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{"title":[{"type":"heading1","text":"Union","spans":[]}]},"slice_type":"menu","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
