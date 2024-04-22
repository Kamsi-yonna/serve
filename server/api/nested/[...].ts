const router = createRouter();

router.get(
  "/test", // this is the endpoint
  defineEventHandler((event) => {
    return "Get nested route";
  })
);

router.post(
  "/test", // this is the endpoint
  defineEventHandler((event) => {
    return "Post nested route";
  })
);

router.put(
  "/test", // this is the endpoint
  defineEventHandler((event) => {
    return "Put nested route";
  })
);

router.delete(
  "/test", // this is the endpoint
  defineEventHandler((event) => {
    return "Delete nested route";
  })
);

// adding another route
router.get(
  "/test/category",
  defineEventHandler((event) => {
    return "Get Categories";
  })
);

export default useBase("/api/nested", router.handler);
