import asyncHandler from "express-async-handler";
//@desc   Get goals
//route   GET api/goals
//access  Private
export const getGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

//@desc   Set goals
//route   POST api/goals
//access  Private
export const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(404);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set Goal" });
});

//@desc   Update goals
//route   PUT api/goals/:id
//access  Private
export const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}` });
});

//@desc   Delete goals
//route   DELETE api/goals/:id
//access  Private
export const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Goal ${req.params.id}` });
});