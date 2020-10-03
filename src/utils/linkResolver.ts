export const linkResolver = (doc: any) => {
  if (doc.type === "page") {
    return `/${doc.uid}`
  }

  return "/"
}
