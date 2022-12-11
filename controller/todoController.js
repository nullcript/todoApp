"use strict";

const Todo = require("../model/todoModel");

exports.readHandler = async (req, res) => {
    try {
        let [readData] = await Todo.read();
        console.log(`READ command done successfully`);

        let completedTasks = readData.filter((val) => val.completed !== 0);

        res.render("index", {
            readData,
            completed: completedTasks.length,
            remained: readData.length - completedTasks.length,
        });
    } catch (error) {
        console.log(error);
    }
};

exports.createtHandler = async (req, res) => {
    try {
        console.log(req.body);

        let newTask = new Todo(req.body);
        await newTask.create();

        console.log(`CREATE command done successfully`);

        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};

exports.deleteHandler = async (req, res) => {
    try {
        console.log("DELETE => ", req.params.id);

        await Todo.delete(req.params.id);

        console.log("DELETE command done successfully");

        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};

exports.completeHandler = async (req, res) => {
    try {
        console.log("COMPLETE => ", req.params.id);

        await Todo.complete(req.params.id);

        console.log("COMPLETE command done successfully");

        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};

exports.staticApiHandler = async (req, res) => {
    try {
        let [readData] = await Todo.read();
        res.json(["STATIC TODO API", readData]);
    } catch (error) {
        console.log("STATIC API ERROR");
        console.log(error);
    }
};

exports.dynamicApiHandler = async (req, res) => {
    try {
        let [readData] = await Todo.readSome(req.params.id);
        res.json(["DYNAMIC TODO API", readData]);
    } catch (error) {
        console.log("DYNAMIC API ERROR");
        console.log(error);
    }
};
