const importAll = (r) => {
  return r.keys().map((item, index) => ({
    src: r(item),
    alt: `Image ${index + 1}`,
  }));
};
const images = importAll(
  require.context("../assests/resized", false, /\.(png|jpe?g|svg)$/)
);

export default images;
