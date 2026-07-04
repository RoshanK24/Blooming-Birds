export function scrollToVisit(e) {
  if (e) e.preventDefault();

  const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
  const target = document.getElementById(isDesktop ? 'visit-form' : 'visit-info');
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
