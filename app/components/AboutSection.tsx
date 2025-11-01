import Image from "next/image";

interface AboutSectionProps {
  title: string;
  content: string;
  imageUrl?: string;
  reverse?: boolean; // if true, image on left
}

export default function AboutSection({ title, content, imageUrl, reverse }: AboutSectionProps) {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-16`}>
          {imageUrl && (
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-96 w-full">
                <Image 
                  src={imageUrl} 
                  alt={title} 
                  fill
                  className="object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300" 
                  quality={90}
                />
              </div>
            </div>
          )}
          <div className={`${imageUrl ? "md:w-1/2" : "w-full text-center"}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              {title}
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-light mb-6">
              {content}
            </p>
            {!imageUrl && (
              <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}