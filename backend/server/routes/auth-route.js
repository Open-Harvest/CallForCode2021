// initialize Cloudant
const { CloudantV1 } = require("@ibm-cloud/cloudant");
const client = CloudantV1.newInstance({});

const APPLICATION_DB = "application-db";
const db = APPLICATION_DB;

var express = require('express');
var cors = require('cors');
const { request } = require("../server");
var router = express.Router();

// This will enable cors for all request. We should change it to use only our domain.
router.use(cors());

router.post("/login", async (req, res) => {
    // Fetch farmer by name
    // If farmer exists then compare name and password
    // If password matches then create session

    const {name, password} = req.body;

    req.session.loggedIn = true;
    req.session.name = name;

    res.json({name: name});
});

router.post("/logout", async (req, res) => {
    req.session.loggedIn = false;
    req.session.name = undefined;

    res.json({session: req.session});
});

module.exports = router; 