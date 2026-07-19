import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const supabaseURL = process.env.Supabase_URL!;
  const supabaseKEY = process.env.Supabase_secret!;

  const { username, password } = await request.json();

  if (!username || !password) {
    return NextResponse.json(
      { message: "Username and password are required" },
      { status: 400 }
    );
  }

  const supabase = createClient(supabaseURL, supabaseKEY);

  // Check if username is already taken
  const { data: existing } = await supabase
    .from("users")
    .select("username")
    .eq("username", username)
    .maybeSingle();

  if (existing) {
    return NextResponse.json(
      { message: "Already exists" },
      { status: 409 }
    );
  }

  // Insert the new user
  const { error } = await supabase
    .from("users")
    .insert({ username, password });

  if (error) {
    console.error("Supabase insert error:", error);
    return NextResponse.json(
      { message: error.message, detail: error.details ?? error.hint ?? error.code },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "Registered" },
    { status: 201 }
  );
}
