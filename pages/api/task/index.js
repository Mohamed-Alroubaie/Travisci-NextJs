export default (req, res) => {
  res.statusCode = 200;
  res.json({ title: 'Task 1', completed: true });
};
