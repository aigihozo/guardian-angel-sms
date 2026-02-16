import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { UserCog } from "lucide-react";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: { full_name: name.trim() },
        emailRedirectTo: window.location.origin,
      },
    });

    setLoading(false);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Success", description: "User created! They will receive a confirmation email." });
      setName(""); setEmail(""); setPassword("");
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center">
          <UserCog className="w-6 h-6 text-accent-foreground" />
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Add User</h1>
          <p className="text-muted-foreground text-sm">Create a new admin user account</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8 space-y-6">
        <div className="space-y-2">
          <Label className="text-foreground">Full Name</Label>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="User name" className="bg-secondary border-border text-foreground" required />
        </div>
        <div className="space-y-2">
          <Label className="text-foreground">Email</Label>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="user@email.com" className="bg-secondary border-border text-foreground" required />
        </div>
        <div className="space-y-2">
          <Label className="text-foreground">Password</Label>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Minimum 6 characters" minLength={6} className="bg-secondary border-border text-foreground" required />
        </div>
        <Button type="submit" disabled={loading} className="w-full bg-gradient-emerald text-primary-foreground font-semibold hover:opacity-90">
          {loading ? "Creating..." : "Create User"}
        </Button>
      </form>
    </div>
  );
};

export default AddUser;
