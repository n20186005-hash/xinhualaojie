import { site } from '../data/site';

export function createTitle(pageTitle?: string): string {
  if (!pageTitle) {
    return site.defaultTitle;
  }
  return `${pageTitle}｜新化老街`;
}

export function canonicalUrl(pathname: string): string {
  const path = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return new URL(path, site.url).href;
}
