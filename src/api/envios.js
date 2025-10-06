export default function handler(req, res) {
  // Cabeceras CORS obligatorias
  res.setHeader("Access-Control-Allow-Origin", "https://international-tracking.vercel.app");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Preflight request
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Tu lógica real
  if (req.method === "GET") {
    res.status(200).json({ datos: "ejemplo" });
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}