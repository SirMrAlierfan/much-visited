
if (!globalThis.productViews) {
    globalThis.productViews = {};
  }
  
  export default function handler(req, res) {
    if (req.method === "POST") {
      const { id } = req.body;
  
      if (!id) {
        return res.status(400).json({ error: "شناسه محصول لازم است" });
      }
  
   
      globalThis.productViews[id] = (globalThis.productViews[id] || 0) + 1;
  
      return res.status(200).json({ message: "بازدید ثبت شد", views: globalThis.productViews });
    }
  
    if (req.method === "GET") {
      return res.status(200).json(globalThis.productViews);
    }
  
    return res.status(405).json({ message: "متد پشتیبانی نمی‌شود" });
  }
  