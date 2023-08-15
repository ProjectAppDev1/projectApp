const branchesService = require('../services/Branch');

const getBranchs = async (req, res) => {
    const branches = await branchesService.getBranchs();
    res.json(branches);
};

const createBranch = async (req, res) => {
    const newBranch = await branchesService.createBranch(req.body.name, req.body.location);
    res.json(newBranch);
};

const deleteBranch = async (req, res) => {
    const branches = await branchesService.deleteBranch(req.params.id);
    res.json(branches);
};

const editBranch = async (req, res) => {
    const branch = await branchesService.editBranch(req.params.id, req.body.name, req.body.location);
    res.json(branch);
};

module.exports = {
    getBranchs, createBranch, deleteBranch, editBranch
};