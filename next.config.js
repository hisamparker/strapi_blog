//This allows us to access a remote image, but still use the built-in Next.js Image Optimization API
export const reactStrictMode = true;
export const images = {
  loader: "default",
  domains: ["localhost"],
};