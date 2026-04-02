module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  var supabaseUrl = process.env.SUPABASE_URL;
  var supabaseServerKey = process.env.SUPABASE_SERVER_KEY;

  if (!supabaseUrl || !supabaseServerKey) {
    return res.status(500).json({ error: "Server configuration missing" });
  }

  var body = req.body || {};
  var name = (body.name || "").toString().trim();
  var phone = (body.phone || "").toString().trim();
  var situation = (body.situation || "").toString().trim();

  if (!name || !phone || !situation) {
    return res.status(400).json({ error: "Required fields are missing" });
  }

  try {
    var upstream = await fetch(supabaseUrl + "/rest/v1/lead_requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseServerKey,
        Authorization: "Bearer " + supabaseServerKey,
        Prefer: "return=minimal",
      },
      body: JSON.stringify([
        {
          name: name,
          phone: phone,
          situation: situation,
        },
      ]),
    });

    if (!upstream.ok) {
      var text = await upstream.text();
      return res.status(502).json({ error: "Supabase insert failed", detail: text });
    }

    return res.status(200).json({ ok: true });
  } catch (_err) {
    return res.status(500).json({ error: "Unexpected server error" });
  }
};
