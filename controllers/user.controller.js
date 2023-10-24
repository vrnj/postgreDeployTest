const express = require('express');
const db = require('../db');

exports.createUser = async (req, res) => {
    console.log('post replied');
    const {name, surname} = req.body;
    console.log(name, surname);
    console.log(req.body);
    const newPerson = await db.query(`INSERT INTO person (name, surname) VALUES ($1, $2) RETURNING *`, [name, surname]);
    res.json(newPerson.rows);
}


exports.getUsers = async (req, res) => {
    const users = await db.query('SELECT * from person');
    res.json(users.rows);
}

exports.getUserById = async (req, res) => {
    const id = req.params.id;
    const users = await db.query('SELECT * from person WHERE id = $1', [id]);
    res.json(users.rows[0]);
}

exports.addUser = async (req, res) => {
    const {name, surname} = req.body;
    const user = await db.query('INSERT INTO person (name, surname) VALUES name = $1, surname = $2', [name, surname]);
    res.json(user);
}

exports.updateUser = async (req, res) => {
    const {id, name, surname} = req.body;
    const user = await db.query('UPDATE person set name = $1, surname = $2 WHERE id = $3', [name, surname, id]);
    res.json(user);
}

exports.deleteUser = async (req, res) => {
    console.log('delete called');
    const {id} = req.params;
    console.log(req.params);
    const user = await db.query('DELETE from person WHERE id = $1', [id]);
    res.json(user);
}