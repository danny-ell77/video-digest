import React from "react";
import { Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface LoadingStateProps {
  message?: string;
}

const LoadingState = ({
  message = "Processing your video...",
}: LoadingStateProps) => {
  return (
    <div className="flex justify-center items-center w-full h-full bg-background">
      <Card className="w-[400px] shadow-lg">
        <CardContent className="flex flex-col items-center justify-center p-8 space-y-6">
          <div className="relative">
            <Loader2 className="h-16 w-16 text-primary animate-spin" />
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold tracking-tight">{message}</h3>
            <p className="text-sm text-muted-foreground">
              This may take a moment while we analyze the content
            </p>
          </div>
          <div className="w-full max-w-xs bg-muted rounded-full h-2.5 mt-4">
            <div className="bg-primary h-2.5 rounded-full animate-pulse w-3/4"></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoadingState;
