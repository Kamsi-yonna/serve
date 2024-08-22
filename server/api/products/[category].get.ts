export default defineEventHandler((event) => {
  //   return "Product Category";
  return getRouterParams(event);
});
