export function linkResolver(document) {
  if (document.type === "blog") {
    return "/blog/" + document.uid;
  }

  return "/";
}