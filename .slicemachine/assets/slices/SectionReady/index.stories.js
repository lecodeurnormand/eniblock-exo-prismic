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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading2","text":"Service","spans":[]}],"para":[{"type":"paragraph","text":"Exercitation irure reprehenderit minim eiusmod cillum eu nostrud laborum commodo exercitation. Mollit magna aliquip nisi velit commodo dolore enim culpa nulla sunt cillum id eu eu commodo. Reprehenderit mollit excepteur tempor.","spans":[]}],"label":[{"type":"paragraph","text":"Incididunt incididunt exercitation ullamco amet consectetur. Nostrud consectetur cupidatat excepteur aute pariatur. Ipsum fugiat aute velit nulla quis consectetur tempor id.","spans":[]}],"link":{"link_type":"Web","url":"http://google.com"}},"slice_type":"section_ready","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
