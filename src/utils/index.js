
export const deepPath = (route, inside) =>
  route.forEach(route => {
    route.path = `${route.path || (inside ? "" : "/")}${route.name || ""}`

    if (route.children) {
      deepPath(route.children, true)
    }
  })
