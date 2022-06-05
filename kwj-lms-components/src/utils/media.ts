export function getStrapiMedia(url: string) {
  if (url == null) {
    return;
  }

  // Return the full URL if the media is hosted on an external provider
  if (url.startsWith("http") || url.startsWith("//")) {
    return url
  }

  // Otherwise prepend the URL path with the Strapi URL
  return `${process.env.STRAPI_API_URL || "http://localhost:1337"
    }${url}`
}
