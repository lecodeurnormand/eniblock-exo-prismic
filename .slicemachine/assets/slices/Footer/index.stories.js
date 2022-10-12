import MyComponent from '../../../../slices/Footer';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Footer'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading1","text":"Storm","spans":[]}],"description":[{"type":"paragraph","text":"Incididunt adipisicing eu Lorem deserunt quis adipisicing sint in fugiat est esse eiusmod commodo. Pariatur ad adipisicing reprehenderit aute ad mollit officia nostrud elit nulla. Ad dolor reprehenderit enim non occaecat minim occaecat exercitation dolor amet.","spans":[]}]},"slice_type":"footer","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
