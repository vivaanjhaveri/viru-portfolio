'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ExternalLink, X, FileDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { projects } from '@/lib/constants';
import { staggerContainer, fadeInScale } from '@/lib/motion';

export default function ProjectsPage() {
  const [openProject, setOpenProject] = useState<string | null>(null);

  // Read ?open=... manually (works in browser & Vercel, no hydration mismatch)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    const value = url.searchParams.get('open');
    setOpenProject(value);
  }, []);

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <motion.div variants={staggerContainer()} initial="hidden" animate="show">

          <motion.div variants={fadeInScale(0.2)} className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my engineering projects, demonstrating practical application
              of skills and innovative problem-solving.
            </p>
            <br />

            <Button size="lg" variant="outline" asChild>
              <Link href="/files/Viru Gurudath Portfolio.pdf" download>
                Download Portfolio <FileDown className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <p className="text-center text-sm md:text-base mt-4">
              <span className="text-gradient">The file above is encrypted. Please use the form on my </span>
              <Link
                href="/contact"
                className="relative font-bold text-muted-foreground 
                  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                  after:bg-primary after:transition-all after:duration-300 
                  hover:text-primary hover:after:w-full"
              >
                Contact
              </Link>
              <span className="text-gradient"> page to request the password.</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={index * 0.1}
                shouldOpen={openProject === project.id}
              />
            ))}
          </div>

        </motion.div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  delay,
  shouldOpen,
}: {
  project: any;
  delay: number;
  shouldOpen: boolean;
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const hasImages = Array.isArray(project.images) && project.images.length > 0;

  // Smooth scroll to this project when deep-linked
  useEffect(() => {
    if (shouldOpen) {
      cardRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });

      // Delay modal to allow scroll to finish
      setTimeout(() => {
        setCurrentImage(0);
        setShowModal(true);
      }, 2000);
    }
  }, [shouldOpen]);

  // Auto-rotate carousel only when modal is closed
  useEffect(() => {
    if (!hasImages || showModal) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [project.images, hasImages, showModal]);

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % project.images.length);

  const prevImage = () =>
    setCurrentImage(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );

  const current = project.images?.[currentImage];

  return (
    <motion.div ref={cardRef} variants={fadeInScale(delay)} className="flex">
      <Card className="flex flex-col h-full w-full max-w-3xl mx-auto card-gradient overflow-hidden">
        {hasImages && (
          <div className="relative h-[620px] w-full">
            <motion.div
              key={current?.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image
                src={current?.src}
                alt={`${project.title} - ${currentImage + 1}`}
                fill
                onClick={() => setShowModal(true)}
                className="object-cover object-top transition-all duration-500 cursor-pointer"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>

            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
            >
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {project.images.map((_: any, imgIndex: number) => (
                <button
                  key={imgIndex}
                  onClick={() => setCurrentImage(imgIndex)}
                  className={`h-2 w-2 rounded-full ${
                    currentImage === imgIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        <CardContent className="flex-grow p-6">
          <h3 className="font-bold text-2xl mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string, tagIndex: number) => (
              <Badge key={tagIndex} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex gap-4">
            {project.live && (
              <Link href={project.live} target="_blank">
                <ExternalLink className="w-5 h-5 hover:text-primary" />
              </Link>
            )}
          </div>
        </CardContent>
      </Card>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative bg-background rounded-lg max-w-6xl w-full h-[80vh] flex overflow-hidden">
            <div className="relative flex-1 h-full">
              <Image
                src={project.images[currentImage].src}
                alt={`Modal view - ${currentImage + 1}`}
                fill
                className="object-contain rounded-l-lg"
              />

              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full z-10"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full z-10"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="w-[300px] p-6 text-sm bg-muted text-foreground overflow-y-auto rounded-r-lg whitespace-pre-line">
              <h4 className="font-semibold text-base mb-2">Image Caption</h4>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    project.images[currentImage].caption?.replace(/\n/g, '<br/>') ||
                    'No caption provided.',
                }}
              />
            </div>

            <button
              className="absolute top-4 right-4 text-white bg-black/70 hover:bg-black p-2 rounded-full z-20"
              onClick={() => setShowModal(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
