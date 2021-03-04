const contactModel = require("../models/Contact");
const emptyInputMessage = require("../helpers/emptyInputMessage");

const ContactController = {
  getAllContacts: async (req, res) => {
    try {
      const result = await contactModel.getAllContacts(req.params.id);
      res.status(result.statusCode).send(result);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  },

  getContactByFriendId: async (req, res) => {
    const { id, friend_id } = req.params;
    try {
      const request = {
        user_id: id,
        friend_id: friend_id,
      };
      const result = await contactModel.getContactByFriendId(request);
      res.status(result.statusCode).send(result);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  },

  searchContactsByName: async (req, res) => {
    const { id } = req.params;
    const { name } = req.query;
    try {
      const request = {
        id: id,
        name: name,
      };
      const result = await contactModel.searchContactsByName(request);
      res.status(result.statusCode).send(result);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  },

  addNewContact: async (req, res) => {
    const { id } = req.params;
    const { friend_id, friend_name } = req.body;
    if (id !== undefined && friend_id !== undefined) {
      try {
        const request = {
          user_id: parseInt(id),
          friend_id: parseInt(friend_id),
          friend_name: friend_name,
        };
        const result = await contactModel.addNewContact(request);
        res.status(result.statusCode).send(result);
      } catch (err) {
        res.status(err.statusCode).send(err);
      }
    } else {
      emptyInputMessage(res);
    }
  },

  updateContact: async (req, res) => {
    const { id, friend_id } = req.params;
    const { friend_name } = req.body;
    try {
      const request = {
        userID: parseInt(id),
        friendID: parseInt(friend_id),
        friendName: friend_name,
      };
      const result = await contactModel.updateContact(request);
      res.status(result.statusCode).send(result);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  },

  deleteContact: async (req, res) => {
    const { id, friend_id } = req.params;
    try {
      const request = {
        userID: id,
        friendID: friend_id,
      };
      const result = await contactModel.deleteContact(request);
      res.status(result.statusCode).send(result);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  },
};

module.exports = ContactController;
