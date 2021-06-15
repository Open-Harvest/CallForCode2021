// import dependencies
const IBMCloudEnv = require('ibm-cloud-env');
IBMCloudEnv.init('/server/config/mappings.json');

// initialize Cloudant
const CloudantSDK = require('@cloudant/cloudant');
const cloudant = new CloudantSDK(IBMCloudEnv.getString('cloudant_url'));

// create farmer-pro database if it does not already exist
cloudant.db.create('farmer-pro')
    .then(data => {
        console.log('farmer-pro database created');
    })
    .catch(error => {
        if (error.error === 'file_exists') {
            console.log('farmer-pro database already exists');
        } else {
            console.log('Error occurred when creating farmer-pro database', error.error);
        }
    });

const appDb = cloudant.db.use('farmer-pro');
// login farmer
exports.login = (req, res, next) => {
    console.log('In route - login');
    return appDb.get(req.body.id)
        .then(farmer => {
            console.log('Farmer login successful');
            if (req.body.password === farmer.password) {
                return res.status(201).json({
                    _id: farmer.id,
                    name: farmer.name,
                    lots: farmer.lots
                });
            } else {
                console.log('Farmer login failed');
                return res.status(401).json({
                    message: 'Farmer login failed.',
                });
            }
        }).catch(error => {
            console.log('Farmer login failed', error);
            return res.status(401).json({
                message: 'Farmer login failed.',
            });
        });
}

// add farmer to database
exports.addFarmer = (req, res, next) => {
    console.log('In route - addFarmer');
    let farmer = {
        type: "farmer",
        name: req.body.name,
        password: req.body.password,
        // lots: req.body.lots
    };
    return appDb.insert(farmer)
        .then(addedName => {
            console.log('Add farmer successful');
            return res.status(201).json({
                _id: addedName.id
                // lots: addedName.lots
            });
        })
        .catch(error => {
            console.error('Add farmer failed', error);
            return res.status(500).json({
                message: 'Add farmer failed.',
                error: error,
            });
        });
};
