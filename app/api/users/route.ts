import { createClient } from "@supabase/supabase-js";

export async function GET() {
  const supabaseUrl = process.env.Supabase_URL;
  const supabaseSecret = process.env.Supabase_secret;

  if (!supabaseUrl || !supabaseSecret) {
    return Response.json(
      { error: "Missing Supabase environment variables" },
      { status: 500 }
    );
  }

  const supabase = createClient(supabaseUrl, supabaseSecret);

  const { data, error } = await supabase
    .from("users")
    .select("id, username");

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(data);
}
