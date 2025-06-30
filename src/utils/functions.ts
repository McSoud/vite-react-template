export function scrollToId(id: string) {
  const section = document.getElementById(id);
  section && section.scrollIntoView();
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
