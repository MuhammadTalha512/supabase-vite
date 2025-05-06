import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://nmmxdeqifxlcasrdghbu.supabase.co'
// https://nmmxdeqifxlcasrdghbu.supabase.co
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tbXhkZXFpZnhsY2FzcmRnaGJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxNjkwODQsImV4cCI6MjA2MTc0NTA4NH0.qsykMvnx3Yc8aT-g2AV5gYn9z9JRIPWkPyv3WvGyzbk'
export const supabase = createClient(supabaseUrl, supabaseKey)

