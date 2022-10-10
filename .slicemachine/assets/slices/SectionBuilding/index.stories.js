import MyComponent from '../../../../slices/SectionBuilding';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionBuilding'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"img":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853"},"title":[{"type":"heading3","text":"Statement","spans":[]}],"para":[{"type":"paragraph","text":"Minim consequat nostrud sit Lorem non ullamco tempor quis Lorem elit enim. Irure velit do magna consectetur cillum proident culpa mollit. Veniam esse irure mollit ex dolor velit non.","spans":[]}],"label_link":[{"type":"paragraph","text":"Adipisicing aute consectetur ipsum aliquip quis aliquip voluptate veniam aute est eiusmod sint laboris. Ea sit mollit cupidatat. Quis occaecat magna nulla nisi eu do reprehenderit nisi excepteur voluptate eu ex excepteur.","spans":[]}],"link":{"link_type":"Web","url":"http://google.com"}}],"primary":{"title":[{"type":"heading3","text":"Introduced","spans":[]}],"img":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a"}},"slice_type":"section_building","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''

// export const _Sbuilding2 = () => ({
//   components: {
//     MyComponent,
//     SliceZone
//   },
//   methods: {
//     resolve() {
//       return MyComponent
//     }
//   },
//   data() {
//     return {
//       mock: {"variation":"sbuilding2","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{},"slice_type":"section_building","id":"_Sbuilding2"}
//     }
//   },
//   template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
// })
// _Sbuilding2.storyName = ''
