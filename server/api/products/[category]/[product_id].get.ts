export default defineEventHandler((event) => {
  //   return "Product Id";
  return getRouterParams(event);
});
