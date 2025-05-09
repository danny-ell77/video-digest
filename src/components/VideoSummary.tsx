import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Download, Clock, User, Calendar } from "lucide-react";

interface Chapter {
  title: string;
  timestamp: string;
  content: string;
}

interface KeyInsight {
  title: string;
  description: string;
}

interface VideoSummaryProps {
  videoMetadata?: {
    title: string;
    creator: string;
    publishDate: string;
    thumbnailUrl: string;
    duration: string;
  };
  summary?: string;
  chapters?: Chapter[];
  keyInsights?: KeyInsight[];
  comprehensiveness?: "Brief" | "Standard" | "Detailed";
  onExport?: () => void;
}

const VideoSummary = ({
  videoMetadata = {
    title: "How to Build a Modern Web Application",
    creator: "Tech Insights",
    publishDate: "2023-05-15",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
    duration: "18:24",
  },
  summary = "This video provides a comprehensive overview of modern web application development, covering frontend frameworks, backend technologies, and deployment strategies. The presenter explains the benefits of React for UI development, Node.js for server-side logic, and containerization for consistent deployments.",
  chapters = [
    {
      title: "Introduction to Web Development",
      timestamp: "00:00",
      content:
        "Overview of the current web development landscape and the technologies that will be covered in this tutorial.",
    },
    {
      title: "Frontend Development with React",
      timestamp: "03:45",
      content:
        "Deep dive into React components, hooks, and state management strategies for building interactive user interfaces.",
    },
    {
      title: "Backend Development with Node.js",
      timestamp: "09:12",
      content:
        "Exploration of Node.js for creating RESTful APIs and handling server-side logic with Express.",
    },
    {
      title: "Deployment and DevOps",
      timestamp: "14:30",
      content:
        "Discussion of containerization with Docker and deployment strategies using cloud platforms.",
    },
  ],
  keyInsights = [
    {
      title: "Component-Based Architecture",
      description:
        "Modern web applications benefit from a component-based architecture that improves code reusability and maintenance.",
    },
    {
      title: "API-First Development",
      description:
        "Designing APIs before implementing the frontend leads to more robust and scalable applications.",
    },
    {
      title: "Continuous Deployment",
      description:
        "Automating the deployment process reduces errors and speeds up the delivery of new features.",
    },
  ],
  comprehensiveness = "Standard",
  onExport = () => console.log("Exporting summary as markdown"),
}: VideoSummaryProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-background p-4">
      <Card className="w-full shadow-md">
        <CardHeader className="pb-2">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle className="text-2xl font-bold">
                {videoMetadata.title}
              </CardTitle>
              <CardDescription className="flex flex-wrap items-center gap-2 mt-2">
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {videoMetadata.creator}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {videoMetadata.publishDate}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {videoMetadata.duration}
                </span>
              </CardDescription>
            </div>
            <Badge variant="outline" className="self-start md:self-center">
              {comprehensiveness} Summary
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Video Thumbnail */}
          <div className="relative aspect-video w-full overflow-hidden rounded-md">
            <img
              src={videoMetadata.thumbnailUrl}
              alt={videoMetadata.title}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Summary Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Summary</h3>
            <p className="text-muted-foreground">{summary}</p>
          </div>

          <Separator />

          {/* Chapters Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Chapters</h3>
            <Accordion type="single" collapsible className="w-full">
              {chapters.map((chapter, index) => (
                <AccordionItem key={index} value={`chapter-${index}`}>
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {chapter.timestamp}
                      </Badge>
                      <span>{chapter.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{chapter.content}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <Separator />

          {/* Key Insights Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Key Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keyInsights.map((insight, index) => (
                <Card key={index} className="bg-muted/50">
                  <CardHeader className="py-3 px-4">
                    <CardTitle className="text-base">{insight.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="py-2 px-4">
                    <p className="text-sm text-muted-foreground">
                      {insight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-end pt-2">
          <Button onClick={onExport} className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export as Markdown
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default VideoSummary;
