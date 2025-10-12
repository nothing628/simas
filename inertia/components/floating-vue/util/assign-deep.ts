export function assign(to: Record<any, any>, from: Record<any, any>) {
  for (const key in from) {
    if (Object.prototype.hasOwnProperty.call(from, key)) {
      if (typeof from[key] === 'object' && to[key]) {
        assign(to[key], from[key])
      } else {
        to[key] = from[key]
      }
    }
  }
}
