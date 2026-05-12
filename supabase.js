import { createClient } from "@supabase/supabase-js";
import ws from "ws";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
