import { ArchitectureOverview } from "@/components/ArchitectureOverview";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        <ArchitectureOverview />
      </div>
    </div>
  );
};

export default Index;