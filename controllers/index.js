const router = require("express").Router();
const testMiddleware = require("./testSocket");

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const profileRoutes = require("./profileRoutes");
const postRoutes = require("./postRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/profile", profileRoutes);
router.use("/test", testMiddleware); // Using the testMiddleware variable
router.use("/posts", postRoutes);
module.exports = router;
