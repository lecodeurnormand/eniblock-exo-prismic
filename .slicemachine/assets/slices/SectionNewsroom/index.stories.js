import MyComponent from '../../../../slices/SectionNewsroom';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionNewsroom'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Incididunt duis incididunt mollit elit reprehenderit aute laboris exercitation cillum. Est voluptate dolor ipsum.","spans":[]}],"para":[{"type":"paragraph","text":"In dolor nostrud magna incididunt veniam exercitation cillum enim anim exercitation consectetur culpa elit sunt.","spans":[]}],"green_button_label":[{"type":"paragraph","text":"Sint ut Lorem nulla ut elit minim voluptate ex consequat sunt.","spans":[]}],"green_button_link":{"link_type":"Web","url":"http://twitter.com"},"black_button_label":[{"type":"paragraph","text":"Do culpa sunt eu nisi nostrud ipsum quis.","spans":[]}],"black_button_link":{"link_type":"Web","url":"https://prismic.io"}},"slice_type":"section_newsroom","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
