
import { getStrapiURL } from "./api";

//Returns the correct URL of an image depending on where it's hosted (your local machine or on a server).
//Locally, an image has a URL structure like so: /uploads/… 
//On Cloudinary it has a URL structure like this: https://cloudinary.com/....
export function getStrapiMedia(media) {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}