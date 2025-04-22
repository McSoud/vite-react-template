export const scrollToId = (id: string) => {
  const section = document.getElementById(id);
  section && section.scrollIntoView();
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
