import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lbdmzayjxlvncmvgcaxy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxiZG16YXlqeGx2bmNtdmdjYXh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3MTQ3MjMsImV4cCI6MjA3ODI5MDcyM30.cWxVMRr_KQTjVl586tkiPPmlbxZeuuvni_j9FwLBTsU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Inquiry {
  full_name: string;
  email: string;
  phone?: string;
  service_interest?: string;
  message: string;
}

export async function submitInquiry(inquiry: Inquiry) {
  const { data, error } = await supabase
    .from('inquiries')
    .insert([inquiry])
    .select();

  if (error) {
    throw error;
  }

  return data;
}
