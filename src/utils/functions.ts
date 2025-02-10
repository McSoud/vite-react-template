export const scrollToId = (id: string) => {
  const section = document.getElementById(id);
  section && section.scrollIntoView();
};
