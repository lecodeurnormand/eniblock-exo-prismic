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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"img":{"dimensions":{"width":90,"height":90},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e"}}],"primary":{"subtitle":[{"type":"paragraph","text":"Reprehenderit Lorem occaecat commodo pariatur incididunt quis sit cillum.","spans":[]}],"title":[{"type":"paragraph","text":"Sit commodo nulla deserunt dolor eu deserunt sint nulla voluptate Lorem proident ad aute non. Minim anim non sint cupidatat laboris duis nisi nulla voluptate ex officia cupidatat occaecat. Officia aliquip quis ex sit.","spans":[]}],"button_cta":{"link_type":"Web","url":"https://prismic.io"},"label":[{"type":"paragraph","text":"Ad fugiat do do ut.","spans":[]}],"para":[{"type":"paragraph","text":"Lorem officia deserunt qui duis quis. Anim Lorem dolore aute.","spans":[]}]},"slice_type":"section_head","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
