import cloudinary from "@/lib/Cloudinary";
  

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const { public_id } = req.body;

    console.log(public_id);

    if (!public_id) {
      return res.status(400).json({ error: "Public ID is required" });
    }

    try {
      // Deleting image from Cloudinary
      const result = await cloudinary.uploader.destroy(public_id);

      if (result.result === "ok") {
        return res.status(200).json({ message: "Image deleted successfully" });
      } else {
        return res.status(500).json({ error: "Failed to delete image" });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}

