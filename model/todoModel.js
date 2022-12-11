"use strict";

const pool = require("./db");
const { gtj } = require("../utils/jalali");

const { v4: uuidv4 } = require("uuid");
// eslint-disable-next-line no-unused-vars
const dotenv = require("dotenv").config();

class Todo {
    #date = new Date();
    constructor({ text, completed = false }) {
        this.id = uuidv4();
        this.text = text;
        this.completed = completed;
        this.createdAt = `${gtj(
            this.#date.getFullYear(),
            this.#date.getMonth() + 1,
            this.#date.getDate()
        )} | ${this.#date.toLocaleTimeString()}`;
    }

    async create() {
        try {
            const sql = `INSERT INTO ${process.env.DB_DATABASE}.tasks VALUES(?,?,?,?,NOW())`;
            return await pool.execute(sql, [
                this.id,
                this.text,
                this.completed,
                this.createdAt,
            ]);
        } catch (error) {
            console.log(`Error while "CREATE" query`);
            console.log(error);
        }
    }

    static async read() {
        try {
            const sql = `SELECT * FROM ${process.env.DB_DATABASE}.tasks ORDER BY time`;
            return await pool.execute(sql);
        } catch (error) {
            console.log(`Error while "READ" query`);
        }
    }

    static async delete(id) {
        try {
            const sql = `DELETE FROM ${process.env.DB_DATABASE}.tasks WHERE id=?`;
            return await pool.execute(sql, [id]);
        } catch (error) {
            console.log(`Error while "DELETE" query`);
        }
    }

    static async complete(id) {
        try {
            this.completed = true;
            const sql = `UPDATE ${process.env.DB_DATABASE}.tasks SET completed=? WHERE id=?`;
            return await pool.execute(sql, [true, id]);
        } catch (error) {
            console.log(`Error while "COMPLETE" query`);
        }
    }

    static async readSome(id) {
        try {
            const sql = `SELECT * FROM ${process.env.DB_DATABASE}.tasks ORDER BY time  LIMIT ?`;
            return await pool.execute(sql, [id]);
        } catch (error) {
            console.log(`Error while "READSOME" query`);
        }
    }
}

module.exports = Todo;
