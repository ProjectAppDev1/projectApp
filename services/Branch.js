const Branch = require('../models/Branch');

const createBranch = async (name, location) => {
    const branch = new Branch({
        name: name,
        location: location,
    });

    return await branch.save();
};

const deleteBranch = async (id) => {
    const branch = await getBranchById(id);
    if (!branch) return null;
  
    await branch.remove();
    return branch;
};

const editBranch = async (id, name, location) => {
    const branch = await getBranchById(id);
    if (!branch) return null;
  
    branch.name = name;
    branch.location = location;
    return await branch.save();
  };

const getBranchById = async (id) => {
    return await Branch.findById(id);
};

const getBranchs = async () => {
    return await Branch.find({ });
};

module.exports = 
{
    getBranchs, 
    createBranch, 
    deleteBranch,
    editBranch
}