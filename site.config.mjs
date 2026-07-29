const DEFAULT_SITE_DOMAIN = 'XinhuaLaojie.com';

/**
 * Resolve the public site identity at build time.
 *
 * PUBLIC_SITE_URL controls canonical URLs and sitemap output.
 * PUBLIC_SITE_DOMAIN optionally controls the human-readable domain label.
 */
export function resolveSiteConfig(env = {}) {
  const configuredDomain = env.PUBLIC_SITE_DOMAIN?.trim();
  const configuredUrl = env.PUBLIC_SITE_URL?.trim();
  const candidateUrl =
    configuredUrl ?? `https://${configuredDomain ?? DEFAULT_SITE_DOMAIN}`;

  let parsedUrl;
  try {
    parsedUrl = new URL(candidateUrl);
  } catch {
    throw new Error(
      `PUBLIC_SITE_URL must be an absolute URL, received: ${candidateUrl}`,
    );
  }

  if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
    throw new Error('PUBLIC_SITE_URL must use http or https.');
  }

  return Object.freeze({
    url: parsedUrl.origin,
    domain:
      configuredDomain ??
      (configuredUrl ? parsedUrl.host : DEFAULT_SITE_DOMAIN),
  });
}
