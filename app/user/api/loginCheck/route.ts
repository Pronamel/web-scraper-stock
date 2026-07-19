import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
  const supabaseURL = process.env.Supabase_URL!;
  const supabaseKEY = process.env.Supabase_secret!;

  const {username, password} = await request.json();

  //creating supabase client 
  const supabase = createClient(supabaseURL, supabaseKEY);  

  //query supabase
  const { data, error } = await supabase
    .from("users")
    .select("username, password")
    .eq("username", username)
    .eq("password", password)
    .single();


  if (error || !data) {
    return NextResponse.json(
      {Success: false, message: "invalid Username or Password"},
      {status : 401}
    )
  }
  else {
    return NextResponse.json(
      {Success: true, message: "Login Successful"},
      {status : 200}
    )
  }

  

}