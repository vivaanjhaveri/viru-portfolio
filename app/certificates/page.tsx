'use client';

import { motion } from 'framer-motion';
import { FileDown, ExternalLink, Award } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { certificates } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function CertificatesPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
				>
					<motion.div
						variants={fadeIn('down', 0.2)}
						className="text-center mb-12"
					>
						<h1 className="text-4xl font-bold mb-4">Certificates</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Professional certifications and achievements that demonstrate my expertise
							and commitment to continuous learning.
						</p>
					</motion.div>

					<div className="flex justify-center gap-6 flex-wrap">
  {certificates.map((cert, index) => (
    <motion.div
      key={index}
      variants={fadeIn('up', 0.2 * index)}
      className="flex justify-center"
    >
      <Card className="card-gradient w-full max-w-sm">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Award className="h-8 w-8 text-primary shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-2">{cert.title}</h2>
              <p className="text-muted-foreground">{cert.issuer}</p>
              <p className="text-sm text-muted-foreground mt-2">
                Issued: {cert.date}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  ))}
</div>

				</motion.div>
			</div>
		</div>
	);
}