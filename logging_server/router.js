const router = require("express").Router();
const logger = require("./logger")
router.post("/addLog", (req, res) => {
    if(req.body.tag == "info")
    {
        logger.info(req.body.msg);
    }
    if(req.body.tag == "error")
    {
        logger.error(req.body.msg);
    }
    return res.json({
        success: 1,
        message: "log added successfully",
    });

});
module.exports = router;
