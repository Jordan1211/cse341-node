const { index } = require("../controllers/index");

const routes = (router) => {
    router.use("/", index);

    return router;
};

module.exports = routes;