export default defineEventHandler((event) => {
  //   return "dynamic route";
  return getRouterParams(event);
});
