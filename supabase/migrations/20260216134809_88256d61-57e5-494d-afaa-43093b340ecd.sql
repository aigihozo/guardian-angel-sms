
-- Create students table
CREATE TABLE public.students (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  email TEXT NOT NULL,
  level TEXT NOT NULL,
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;

-- Policies: any authenticated user can CRUD students
CREATE POLICY "Authenticated users can view students"
ON public.students FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can insert students"
ON public.students FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update students"
ON public.students FOR UPDATE
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can delete students"
ON public.students FOR DELETE
TO authenticated
USING (true);
