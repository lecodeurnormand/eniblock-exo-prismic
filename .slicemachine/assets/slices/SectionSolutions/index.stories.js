import MyComponent from '../../../../slices/SectionSolutions';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionSolutions'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"title":[{"type":"heading3","text":"Bigger","spans":[]}],"para":[{"type":"paragraph","text":"Amet quis amet sunt mollit cupidatat aliqua ipsum nisi magna magna nulla consectetur. Laborum labore sint et excepteur. Laborum esse elit aliquip commodo reprehenderit velit non Lorem dolor occaecat et pariatur ipsum labore excepteur.","spans":[]}],"img1":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea"},"para_1":[{"type":"paragraph","text":"Mollit pariatur sunt sunt culpa labore eiusmod adipisicing nisi.","spans":[]}],"img2":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68"},"para_2":[{"type":"paragraph","text":"Culpa voluptate sit eu proident aliqua fugiat in.","spans":[]}],"img3":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f"},"para_3":[{"type":"paragraph","text":"Ut ut ut qui excepteur culpa ea magna qui voluptate mollit non in in.","spans":[]}],"label":[{"type":"paragraph","text":"Pariatur labore magna incididunt sint laborum irure irure culpa sit incididunt quis labore non et. Quis labore nulla cillum laborum consectetur laboris.","spans":[]}],"link":{"link_type":"Web","url":"https://prismic.io"},"img_big":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8"}}],"primary":{"title":[{"type":"heading2","text":"Would","spans":[]}]},"slice_type":"section_solutions","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
