import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";
import menorahHero from "@/assets/menorah-hero.png";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneArea: "",
    phoneNumber: "",
    dreidelsGuess: "",
    enjoyReason: "",
    otherReason: "",
    support: "",
    comments: "",
    cansCount: "",
    newsletter: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your support! 🕎",
      description: "Your donation submission has been received. Together, we light up lives!",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-primary font-poppins">
            Menorah in the Square
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl glow-effect">
              <img 
                src={menorahHero} 
                alt="Community gathering for Menorah in the Square lighting ceremony" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            <div className="text-center mt-8 fade-in-up">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-gold candle-flame" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground font-poppins">
                  Light Up the Square
                </h2>
                <Sparkles className="w-6 h-6 text-gold candle-flame" />
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Join, Donate, and Make a Difference
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto p-6 md:p-10 shadow-xl bg-card border-gold/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-2 font-poppins">
                Menorah in the Square!!
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-gold to-warm-glow mx-auto rounded-full" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Full Name */}
              <div className="space-y-4">
                <Label htmlFor="firstName" className="text-base font-medium">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      id="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-medium">
                  E-mail <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ex: myname@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="transition-all duration-300 focus:ring-2 focus:ring-gold/50 focus:border-gold"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phoneArea" className="text-base font-medium">
                  Phone Number <span className="text-destructive">*</span>
                </Label>
                <div className="grid grid-cols-3 gap-4">
                  <Input
                    id="phoneArea"
                    placeholder="Area Code"
                    value={formData.phoneArea}
                    onChange={(e) => setFormData({ ...formData, phoneArea: e.target.value })}
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  />
                  <Input
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    required
                    className="col-span-2 transition-all duration-300 focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  />
                </div>
              </div>

              {/* Guess Dreidels */}
              <div className="space-y-2">
                <Label htmlFor="dreidels" className="text-base font-medium">
                  Guess how many Dreidels!
                </Label>
                <Input
                  id="dreidels"
                  type="number"
                  placeholder="Enter your guess"
                  value={formData.dreidelsGuess}
                  onChange={(e) => setFormData({ ...formData, dreidelsGuess: e.target.value })}
                  className="transition-all duration-300 focus:ring-2 focus:ring-gold/50 focus:border-gold"
                />
              </div>

              {/* Why I enjoy events */}
              <div className="space-y-3">
                <Label className="text-base font-medium">I enjoy events like this because:</Label>
                <RadioGroup
                  value={formData.enjoyReason}
                  onValueChange={(value) => setFormData({ ...formData, enjoyReason: value })}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="culture" id="culture" className="border-primary" />
                    <Label htmlFor="culture" className="font-normal cursor-pointer">
                      I enjoy learning about other cultures
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="jewish" id="jewish" className="border-primary" />
                    <Label htmlFor="jewish" className="font-normal cursor-pointer">
                      I'm Jewish
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="support" id="support" className="border-primary" />
                    <Label htmlFor="support" className="font-normal cursor-pointer">
                      I like to show my support for the Jewish Community
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 gap-3">
                    <RadioGroupItem value="other" id="other" className="border-primary" />
                    <Label htmlFor="other" className="font-normal cursor-pointer">
                      Other
                    </Label>
                    {formData.enjoyReason === "other" && (
                      <Input
                        placeholder="Please specify"
                        value={formData.otherReason}
                        onChange={(e) => setFormData({ ...formData, otherReason: e.target.value })}
                        className="flex-1 transition-all duration-300 focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      />
                    )}
                  </div>
                </RadioGroup>
              </div>

              {/* Support Question */}
              <div className="space-y-3">
                <Label className="text-base font-medium">
                  Would you like to support Menorah in the Square?
                </Label>
                <RadioGroup
                  value={formData.support}
                  onValueChange={(value) => setFormData({ ...formData, support: value })}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" className="border-primary" />
                    <Label htmlFor="yes" className="font-normal cursor-pointer">
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" className="border-primary" />
                    <Label htmlFor="no" className="font-normal cursor-pointer">
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Comments */}
              <div className="space-y-2">
                <Label htmlFor="comments" className="text-base font-medium">
                  Comments
                </Label>
                <Textarea
                  id="comments"
                  placeholder="Share your thoughts..."
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  className="min-h-[120px] transition-all duration-300 focus:ring-2 focus:ring-gold/50 focus:border-gold"
                />
              </div>

              {/* Newsletter */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="newsletter"
                  checked={formData.newsletter}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, newsletter: checked as boolean })
                  }
                  className="border-primary data-[state=checked]:bg-primary"
                />
                <Label htmlFor="newsletter" className="font-normal cursor-pointer">
                  I would like to receive news and updates by email
                </Label>
              </div>

              {/* Info Card */}
              <Card className="p-6 bg-muted/50 border-gold/30">
                <div className="flex items-start gap-3 mb-4">
                  <Sparkles className="w-5 h-5 text-gold candle-flame mt-1 flex-shrink-0" />
                  <h4 className="text-lg font-semibold text-primary">
                    Help Build a Menorah Out of Cans and Support Those in Need!
                  </h4>
                </div>
                <div className="space-y-4 text-foreground/90">
                  <p>
                    This year, we're building a menorah entirely out of canned food, which will later
                    be donated to local homeless shelters. You can participate in this meaningful
                    project in two ways:
                  </p>
                  <ol className="space-y-2 ml-4">
                    <li className="flex gap-2">
                      <span className="font-semibold">1.</span>
                      <span>Drop off cans at the Chabad JCC.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold">2.</span>
                      <span>
                        Have us do the shopping for you! And simply select how many cans you'd like
                        to contribute. Each can costs an average of $4.
                      </span>
                    </li>
                  </ol>
                  <p className="font-medium text-primary">
                    Together, we can light up lives this Chanukah one can at a time!
                  </p>
                </div>
              </Card>

              {/* Cans Selection */}
              <div className="space-y-2">
                <Label htmlFor="cans" className="text-base font-medium">
                  How many cans would you like us to shop for you?
                </Label>
                <Select
                  value={formData.cansCount}
                  onValueChange={(value) => setFormData({ ...formData, cansCount: value })}
                >
                  <SelectTrigger className="transition-all duration-300 focus:ring-2 focus:ring-gold/50">
                    <SelectValue placeholder="Select number of cans" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">0 cans</SelectItem>
                    <SelectItem value="5">5 cans ($20)</SelectItem>
                    <SelectItem value="10">10 cans ($40)</SelectItem>
                    <SelectItem value="18">18 cans ($72)</SelectItem>
                    <SelectItem value="25">25 cans ($100)</SelectItem>
                    <SelectItem value="custom">Custom amount</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto md:min-w-[200px] mx-auto block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-6 glow-effect transition-all duration-300 hover:scale-105"
                >
                  SUBMIT
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Menorah in the Square. Lighting up lives together.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
