export default defineEventHandler((event) => {
  console.log(event.context.authorized);
});
