import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

interface ImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
}

interface TextSegment {
  content?: string;
  images?: ImageProps[];
}

interface SectionContent {
  subtitle: string;
  text: TextSegment[];  // Each segment has content and optional images
}

interface SectionProps {
  id: string;
  title: string;
  content: SectionContent[];
}

const Section: React.FC<SectionProps> = ({ id, title, content }) => {
  return (
    <Card className="my-4 shadow-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="doc_content" id={id}>
          {content.map((part, index) => (
            <Card key={index} className="my-2 shadow-md">
              <CardContent className="pt-8">
                {part.text.map((segment, segIndex) => (
                  <React.Fragment key={segIndex}>
                    <p>{segment.content}</p>
                    {segment.images && segment.images.map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={image.src}
                        alt={image.alt}
                        height={image.height}
                        width={image.width}
                        className="block mx-auto my-2 w-full tablet:w-4/5"
                      />
                    ))}
                  </React.Fragment>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Section;
