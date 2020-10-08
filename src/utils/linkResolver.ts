export const linkResolver = (doc: any) => {
  if (doc.type) {
    return `/${doc.uid}`
  }

  return "/"
}
