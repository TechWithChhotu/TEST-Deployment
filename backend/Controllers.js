import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.status(201).json({
    success: true,
    data: "MENR APP Depoyment",
  });
});

router.get("/delete", (req, res) => {
  res.status(201).json({
    success: true,
    data: "MENR APP Depoyment, your data deleted",
  });
});

router.post("/save", (req, res) => {
  const { name } = req.body;

  res.status(201).json({
    success: true,
    data: name,
  });
});

export default router;
