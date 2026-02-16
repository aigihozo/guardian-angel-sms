
-- Tighten insert policy to require created_by = auth.uid()
DROP POLICY "Authenticated users can insert students" ON public.students;
CREATE POLICY "Authenticated users can insert students"
ON public.students FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = created_by);

-- Tighten update/delete to only allow users who created the student
DROP POLICY "Authenticated users can update students" ON public.students;
CREATE POLICY "Authenticated users can update their students"
ON public.students FOR UPDATE
TO authenticated
USING (auth.uid() = created_by);

DROP POLICY "Authenticated users can delete students" ON public.students;
CREATE POLICY "Authenticated users can delete their students"
ON public.students FOR DELETE
TO authenticated
USING (auth.uid() = created_by);
