export function createTemplate(innerHTML: string) {
  const template = document.createElement('template');
  template.innerHTML = innerHTML;
  return template;
}
