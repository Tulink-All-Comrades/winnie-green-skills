import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users, Target } from "lucide-react";

const qualifications = [
  "Certified Public Accountant (CPA)",
  "Bachelor's in Accounting & Finance",
  "Advanced Excel & QuickBooks",
  "Academic Writing Certification"
];

const strengths = [
  "Attention to Detail",
  "Time Management",
  "Client Communication",
  "Research Skills",
  "Problem Solving",
  "Multi-tasking"
];

export function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">About Winnie</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 5 years of experience in accounting and finance, I bring a unique 
                  combination of analytical skills and exceptional writing abilities to every project. 
                  My background spans across various industries, providing me with comprehensive 
                  insights into different business environments.
                </p>
                <p>
                  As a detail-oriented professional, I understand the critical importance of accuracy 
                  in financial work and academic writing. My transcription services maintain the same 
                  high standards, ensuring every word is captured precisely and formatted professionally.
                </p>
                <p>
                  I pride myself on building lasting relationships with clients through reliable 
                  communication, timely delivery, and exceptional quality that exceeds expectations.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Qualifications & Certifications
              </h3>
              <div className="space-y-2">
                {qualifications.map((qual, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Award className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{qual}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <Card className="border-none shadow-soft bg-gradient-subtle">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Core Strengths
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {strengths.map((strength, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="justify-center py-2 bg-emerald-light text-forest border-none hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      {strength}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-soft bg-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Why Choose Me?
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-foreground">Reliable & Professional</p>
                      <p className="text-sm text-muted-foreground">Consistent quality delivery with professional communication</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-foreground">Quick Turnaround</p>
                      <p className="text-sm text-muted-foreground">Fast delivery without compromising on quality</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-foreground">Competitive Pricing</p>
                      <p className="text-sm text-muted-foreground">Quality services at affordable rates</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}