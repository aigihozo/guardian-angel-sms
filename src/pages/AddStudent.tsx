import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { UserPlus } from "lucide-react";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [level, setLevel] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      toast({ title: "Error", description: "You must be logged in", variant: "destructive" });
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("students").insert({
      name: name.trim(),
      age: parseInt(age),
      email: email.trim(),
      level,
      created_by: user.id,
    });

    setLoading(false);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Student registered successfully!" });
      setName(""); setAge(""); setEmail(""); setLevel("");
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-gradient-emerald flex items-center justify-center">
          <UserPlus className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Add New Student</h1>
          <p className="text-muted-foreground text-sm">Register a new student to the system</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-foreground">Full Name</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Student name" className="bg-secondary border-border text-foreground" required />
          </div>
          <div className="space-y-2">
            <Label className="text-foreground">Age</Label>
            <Input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" min="5" max="100" className="bg-secondary border-border text-foreground" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-foreground">Email</Label>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="student@email.com" className="bg-secondary border-border text-foreground" required />
        </div>
        <div className="space-y-2">
          <Label className="text-foreground">Level</Label>
          <Select value={level} onValueChange={setLevel} required>
            <SelectTrigger className="bg-secondary border-border text-foreground">
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Primary">Primary</SelectItem>
              <SelectItem value="Secondary">Secondary</SelectItem>
              <SelectItem value="High School">High School</SelectItem>
              <SelectItem value="University">University</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit" disabled={loading} className="w-full bg-gradient-gold text-accent-foreground font-semibold hover:opacity-90">
          {loading ? "Registering..." : "Register Student"}
        </Button>
      </form>
    </div>
  );
};

export default AddStudent;
