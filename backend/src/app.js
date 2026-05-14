const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({origin: "http://localhost:5173"}));

app.get("/api/test", (req, res) => {
    res.json({
        message: "API kết nối thành công"
    });
});

app.listen(3000, () => {
    console.log("Server running");
});