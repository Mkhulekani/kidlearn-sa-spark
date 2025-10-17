import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage = ({ onNavigate }: AboutPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-primary text-center mb-12">About KidsLearn SA</h1>
        
        <Card className="p-8 md:p-12 mb-8 shadow-soft">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
          <p className="text-lg text-foreground mb-4">
            KidsLearn SA is dedicated to providing high-quality, interactive educational content specifically designed for South African children in Grade R and Grade 1. We believe that learning should be fun, engaging, and accessible to all children.
          </p>
          <p className="text-lg text-foreground">
            Our platform uses South African English pronunciation and culturally relevant examples to ensure that every child can learn in a familiar and comfortable environment.
          </p>
        </Card>

        <Card className="p-8 md:p-12 mb-8 shadow-soft">
          <h2 className="text-3xl font-bold text-primary mb-6">What We Offer</h2>
          <div className="space-y-4 text-lg text-foreground">
            <div className="flex items-start gap-3">
              <span className="text-2xl text-success">✓</span>
              <p><strong className="text-primary">Interactive Learning Games:</strong> Fun and educational games that teach vocabulary, recognition, and pronunciation.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl text-success">✓</span>
              <p><strong className="text-primary">Audio Support:</strong> All content is available with South African English audio to support early readers.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl text-success">✓</span>
              <p><strong className="text-primary">Progress Tracking:</strong> Monitor your child's learning journey with scores and levels.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl text-success">✓</span>
              <p><strong className="text-primary">CAPS Aligned:</strong> Our content follows the South African national curriculum standards.</p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-primary p-8 md:p-12 text-primary-foreground text-center shadow-glow">
          <h2 className="text-3xl font-bold mb-4">Join Thousands of Happy Learners!</h2>
          <p className="text-xl mb-6 text-primary-foreground/90">
            Start your child's learning adventure today with KidsLearn SA.
          </p>
          <Button
            onClick={() => onNavigate('game')}
            size="lg"
            variant="secondary"
            className="text-xl px-8 py-6 shadow-soft"
          >
            Start Learning Now!
          </Button>
        </Card>
      </div>
    </div>
  );
};
