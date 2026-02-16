import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Users, UserPlus, GraduationCap, TrendingUp } from "lucide-react";

const DashboardHome = () => {
  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      const { count } = await supabase.from("students").select("*", { count: "exact", head: true });
      if (count !== null) setStudentCount(count);
    };
    fetchCount();
  }, []);

  const stats = [
    { label: "Total Students", value: studentCount, icon: Users, gradient: "bg-gradient-emerald" },
    { label: "New This Month", value: 0, icon: UserPlus, gradient: "bg-gradient-gold" },
    { label: "Levels", value: 4, icon: GraduationCap, gradient: "bg-gradient-emerald" },
    { label: "Growth", value: "Active", icon: TrendingUp, gradient: "bg-gradient-gold" },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to the Student Management System</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-card rounded-xl p-6 hover:shadow-emerald transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-lg ${stat.gradient} flex items-center justify-center`}>
                <stat.icon className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
