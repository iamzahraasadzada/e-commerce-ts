import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/supabase";
const supabaseUrl = "https://tnbrvyyytjhtbqacheyr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRuYnJ2eXl5dGpodGJxYWNoZXlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3ODM5NjksImV4cCI6MjAyOTM1OTk2OX0.ox1BTaBlI3wvTxc2x9JKSpwsjMuqmUaykET7fKN3WQs";
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
