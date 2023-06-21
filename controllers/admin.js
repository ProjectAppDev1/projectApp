const index = (req, res) => {
    res.render("../views/admin.ejs");
}

const createAdmin = async (req, res) => {
    try {
      const admin = await adminService.createAdmin(req.body);
      res.status(201).send(admin);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
  const deleteAdmin = async (req, res) => {
    try {
      const admin = await adminService.deleteAdmin(req.params.id);
      res.status(201).send(admin);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
  const getAdmin = async (req, res) => {
    try {
      const admin = await adminService.getAdmin(req.params.id);
      res.status(201).send(admin);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
  const getAdmins = async (req, res) => {
    try {
      const admins = await adminService.getAdmins();
      res.status(201).send(admins);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
  const updateAdmin = async (req, res) => {
      try {
          const admin = await adminService.updateAdmin(req.params.id, req.body);
          res.status(201).send(admin);
        } catch (error) {
          res.status(400).send(error);
        }
  }
module.exports = 
 {
    index,
    createAdmin,
    deleteAdmin,
    getAdmin,
    getAdmins,
    updateAdmin

};