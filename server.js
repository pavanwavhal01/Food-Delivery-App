const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("./models/Users"); // User Model इम्पोर्ट

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const mongoURI = "mongodb+srv://pavanwavhal:pavanwavhal@cluster0.zg5ro.mongodb.net/FoodDB?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ DB connected successfully"))
.catch((err) => console.error("❌ DB connection error:", err));

app.post("/users", async (req, res) => {
  try {
    const users = await User.find({}, "-password"); 
    console.log("✅ Users Fetched:", users); 
    res.json(users);
  } catch (error) {
    console.error("❌ Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
  const token = jwt.sign({ userId: user._id }, "yourSecretKey", {
    expiresIn: "1h",
  });
});


app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
