import app from "./app";

const PORT = process.env.PROCESS || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
