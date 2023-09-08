declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.webp'
declare module '*.svg' {
  const content: string
  export default content
}
declare module '@everapi/currencyapi-js'

declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}
declare module '*.png' {
  const url: string
  export default url
}
