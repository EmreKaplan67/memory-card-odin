// Automatically import all images from assets/cards
const images = import.meta.glob("../assets/cards/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
});

export const cards = Object.entries(images).map(([path, url], index) => {
  // Extract filename
  let filename = path
    .split("/")
    .pop()
    .replace(/\.(png|jpg|jpeg)$/i, "");

  // Replace hyphens and underscores with spaces
  filename = filename.replace(/[-_]+/g, " ");

  // Capitalize first letter of each word
  const title = filename.replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    id: index + 1,
    title,
    image: url,
  };
});
