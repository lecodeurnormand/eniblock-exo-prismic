import MyComponent from '../../../../slices/MenuFooter';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/MenuFooter'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"label":[{"type":"paragraph","text":"Ex anim consectetur aliqua veniam sunt ad nisi labore aliqua nulla veniam. Non sint nulla aliqua in deserunt pariatur nostrud. Labore ullamco nulla duis sint veniam eu nulla duis eiusmod fugiat adipisicing nisi.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{"title":[{"type":"paragraph","text":"Cupidatat fugiat ullamco cupidatat aliqua commodo ea et veniam sint elit do quis laboris dolore. Id enim ullamco aute velit ea magna nisi sunt velit do aute. Lorem cillum excepteur adipisicing ex consectetur.","spans":[]}],"link":{"link_type":"Web","url":"https://prismic.io"}},"slice_type":"menu_footer","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
