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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"label":[{"type":"paragraph","text":"Sunt esse enim sit eiusmod cupidatat ut dolore ex ullamco qui aliqua exercitation. Id veniam do magna cupidatat incididunt consectetur commodo. Ex aute dolore aliqua culpa laborum mollit.","spans":[]}],"link":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"title":[{"type":"paragraph","text":"Reprehenderit ea esse velit velit et officia cillum ad aliqua nostrud esse mollit et voluptate nostrud. Quis quis incididunt ipsum aliqua.","spans":[]}]},"slice_type":"slice_menu","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
