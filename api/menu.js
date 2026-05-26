export default async function handler(req, res) {
  try {
    const outline = await import('../outline.js');
    res.status(200).json(outline.default || outline);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to load menu" });
  }
}