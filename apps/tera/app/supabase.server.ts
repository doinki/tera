import { remember } from '@mado/remember';
import { createClient } from '@supabase/supabase-js';

export const supabase = remember('supabase', () => {
  return createClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!,
  );
});

export type Database = {
  public: {
    CompositeTypes: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Tables: {
      post: {
        Insert: {
          company?: string;
          created_at?: string;
          date?: string;
          description?: string | null;
          id?: string;
          title?: string;
        };
        Relationships: [];
        Row: {
          company: string;
          created_at: string;
          date: string;
          description: string | null;
          id: string;
          title: string;
        };
        Update: {
          company?: string;
          created_at?: string;
          date?: string;
          description?: string | null;
          id?: string;
          title?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
  };
};
