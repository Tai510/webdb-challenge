const express = require("express")
const projectCtrl = require("../controllers/project")
const router = express.Router()


router.get('/', projectCtrl.getProject);
router.post('/', projectCtrl.postProject);
router.put('/:id', projectCtrl.putProject);
router.delete('/:id', projectCtrl.deleteProject);


module.exports = router