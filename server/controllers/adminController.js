// Defined Module Import
const { TeacherPrimary } = require('./../models/teacherPrimary');
const { Event } = require('./../models/events');
const { Notifications } = require('./../models/notification');
const { Syllabus } = require('./../models/syllabus');
const { TimeTable } = require('./../models/timeTable');
const {
  saveMinimal2,
  pickNotifications,
  pickEvent,
  pickSyllabus,
  pickTT,
  deleteMinimal,
  updateMinimal,
} = require('./../utils/utils');

// Initializing the functions
const saveNotificaitonsMinimal = saveMinimal2(Notifications);
const saveEventsMinimal = saveMinimal2(Event);
const saveSyllabusMinimal = saveMinimal2(Syllabus);
const saveTimeTableMinimal = saveMinimal2(TimeTable);

const updateNotifications = updateMinimal(Notifications, true, false);
const updateSyllabus = updateMinimal(Syllabus, true, false);
const updateEvents = updateMinimal(Event, true, false);
const updateTimeTable = updateMinimal(TimeTable, true, false);

const deleteTeacherMinimal = deleteMinimal(TeacherPrimary);
const deleteNotificaitonsMinimal = deleteMinimal(Notifications);
const deleteEventsMinimal = deleteMinimal(Event);
const deleteSyllabusMinimal = deleteMinimal(Syllabus);
const deleteTimeTableMinimal = deleteMinimal(TimeTable);

// Controllers

const deleteTeacher = async (req, res) => {
  const { id } = req.body;
  try {
    const teacher = await deleteTeacherMinimal(id);
    res.send(teacher);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const addNotifications = async (req, res) => {
  const body = pickNotifications(req);
  try {
    const notification = await saveNotificaitonsMinimal(body);
    res.send(notification);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const editNotifications = async (req, res) => {
  const { id } = req.body;
  const body = pickNotifications(req);
  try {
    const notifications = await updateNotifications({ _id: id }, { ...body });
    res.send(notifications);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const deleteNotifications = async (req, res) => {
  const { id } = req.body;
  try {
    const notification = await deleteNotificaitonsMinimal(id);
    res.send(notification);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const addEvents = async (req, res) => {
  const body = pickEvent(req);
  try {
    const notification = await saveEventsMinimal(body);
    res.send(notification);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const editEvent = async (req, res) => {
  const { id } = req.body;
  const body = pickEvent(req);
  try {
    const event = await updateEvents({ _id: id }, { ...body });
    res.send(event);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const deleteEvents = async (req, res) => {
  const { id } = req.body;
  try {
    const event = await deleteEventsMinimal(id);
    res.send(event);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const addSyllabus = async (req, res) => {
  const body = pickSyllabus(req);
  try {
    const syllabus = await saveSyllabusMinimal(body);
    res.send(syllabus);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const editSyllabus = async (req, res) => {
  const { id } = req.body;
  const body = pickNotifications(req);
  try {
    const syllabus = await updateSyllabus({ _id: id }, { ...body });
    res.send(syllabus);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const deleteSyllabus = async (req, res) => {
  const { id } = req.body;
  try {
    const syllabus = await deleteSyllabusMinimal(id);
    res.send(syllabus);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const addTimeTable = async (req, res) => {
  const body = pickTT(req);
  try {
    const timeTable = await saveTimeTableMinimal(body);
    res.send(timeTable);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const editTimeTable = async (req, res) => {
  const { id } = req.body;
  const body = pickTT(req);
  try {
    const timeTable = await updateTimeTable({ _id: id }, { ...body });
    res.send(timeTable);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const deleteTimeTable = async (req, res) => {
  const { id } = req.body;
  try {
    const timeTable = await deleteTimeTableMinimal(id);
    res.send(timeTable);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

module.exports = {
  addNotifications,
  editNotifications,
  deleteNotifications,
  addEvents,
  editEvent,
  deleteEvents,
  addSyllabus,
  editSyllabus,
  deleteSyllabus,
  addTimeTable,
  editTimeTable,
  deleteTimeTable,
  deleteTeacher,
};
