import { asyncHandaler } from "../utils/asyncHandaler.js";

const registerUser = asyncHandaler(async (req, res) => {
  res.status(200).json({
    message: "Hello Backend",
  });
});

export { registerUser };
