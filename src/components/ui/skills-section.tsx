import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, PenTool, Headphones, TrendingUp, FileText, Clock } from "lucide-react";

const skills = [
  {
    icon: Calculator,
    title: "Accounting & Finance",
    description: "Comprehensive financial analysis, bookkeeping, tax preparation, and audit support with attention to detail and regulatory compliance.",
    features: ["Financial Statements", "Tax Preparation", "Audit Support", "Budget Analysis"]
  },
  {
    icon: PenTool,
    title: "Academic Writing",
    description: "Professional academic writing services including research papers, dissertations, and business reports with proper citations and formatting.",
    features: ["Research Papers", "Dissertations", "Business Reports", "Literature Reviews"]
  },
  {
    icon: Headphones,
    title: "Transcription Services",
    description: "Accurate and timely transcription of audio and video content for meetings, interviews, and academic purposes.",
    features: ["Audio Transcription", "Video Transcription", "Meeting Notes", "Interview Documentation"]
  }
];

const achievements = [
  { icon: TrendingUp, label: "99% Accuracy Rate", value: "In all deliverables" },
  { icon: FileText, label: "500+ Projects", value: "Successfully completed" },
  { icon: Clock, label: "24-48hr", value: "Average turnaround" }
];

export function SkillsSection() {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering excellence across accounting, academic writing, and transcription 
            with a commitment to quality and timeliness.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-smooth border-none bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-full w-fit group-hover:scale-110 transition-smooth">
                  <skill.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">{skill.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
                <div className="space-y-2">
                  {skill.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="mx-auto mb-4 p-3 bg-emerald-light rounded-full w-fit group-hover:bg-primary group-hover:scale-110 transition-smooth">
                <achievement.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary">{achievement.value}</div>
                <div className="text-muted-foreground">{achievement.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}