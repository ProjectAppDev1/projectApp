const index = (req, res) => {
    console.log("in index function of admin !");
    res.render("../views/admin.ejs");
}

const userService = require("../services/user");


const createwineForm = (req, res) => {
  res.render("../views/admin-forms/create-wine-form.ejs");
};

const managewinesForm = (req, res) => {
  res.render("../views/admin-forms/manage-wine-form.ejs");
};



const createBranchForm = (req, res) => {
  res.render("../views/admin-forms/create-branch-form.ejs");
};

const manageBranchesForm = (req, res) => {
  res.render("../views/admin-forms/manage-branches-form.ejs");
};

const createAdminsForm = (req, res) => {
  res.render("../views/admin-forms/create-admin-form.ejs");
};

const manageAdminsForm = (req, res) => {
  res.render("../views/admin-forms/manage-admins-form.ejs");
};

const createAdmin = async (req, res) => {
  try {
    const admin = await userService.createUser(req.body);
    res.status(201).send(admin);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteAdmin = async (req, res) => {
  try {
    const admin = await userService.deleteAdmin(req.params.id);
    res.status(201).send(admin);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAdmin = async (req, res) => {
  try {
    const admin = await userService.getAdmin(req.params.id);
    res.status(201).send(admin);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAdmins = async (req, res) => {
  try {
    const admins = await userService.getAllAdmins();
    res.status(201).send(admins);
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateAdmin = async (req, res) => {
    try {
        const admin = await userService.updateAdmin(req.params.id, req.body);
        res.status(201).send(admin);
      } catch (error) {
        res.status(400).send(error);
      }
}

module.exports = {
  index,
  createwineForm,
  managewinesForm,
  createBranchForm,
  manageBranchesForm,
  createAdminsForm,
  manageAdminsForm,
  createAdmin,
  getAdmin,
  getAdmins,
  updateAdmin,
  deleteAdmin
};
