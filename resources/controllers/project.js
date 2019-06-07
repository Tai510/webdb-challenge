const  knex = require('knex');
const knexConfig = require('../../data/knexfile')
const db = knex(knexConfig.development);

exports.getProject =  async (req, res) => {
    // get the roles from the database
    try {
      const roles = await db('project'); // all the records from the table
      res.status(200).json(roles);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  exports.postProject = async (req, res) => {
    try {
      const [id] = await db('project').insert(req.body);
      const role = await db('project')
        .where({ id })
        .first();
      res.status(201).json(role);
    } catch (error) {
      const message =  'We ran into an error';
      res.status(500).json({ message, error });
    }
  }

  exports.putProject = async (req, res) => {
    try {
      const count = await db('project')
        .where({ id: req.params.id })
        .update(req.body);
  
      if (count > 0) {
        const role = await db('project')
          .where({ id: req.params.id })
          .first();
        res.status(200).json(role);
      } else {
        res.status(404).json({ message: 'Records not found' });
      }
    } catch (error) {
      const message =  'We ran into an error';
      res.status(500).json({ message, error });
    }
  }

  exports.deleteProject = async (req, res) => {
    try {
      const count = await db('project')
        .where({ id: req.params.id })
        .del();
      if (count > 0) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: 'Records not found' });
      }
    } catch (error) {
      
    }
  }

 