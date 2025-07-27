"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="aspect-square bg-dark-200 rounded-lg overflow-hidden hover-glow">
                <Image
                  src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=400&fit=crop"
                  alt="Coding workspace"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] bg-dark-200 rounded-lg overflow-hidden hover-glow">
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
                  alt="Web development"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-[4/3] bg-dark-200 rounded-lg overflow-hidden hover-glow">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
                  alt="University life"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-dark-200 rounded-lg overflow-hidden hover-glow">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop"
                  alt="Team collaboration"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="text-sm text-gray-400 mb-4 tracking-wider">
                TENTANG SAYA
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gradient mb-6">
                Perjalanan Saya
                <br />
                Cerita tentang minat dan pemikiran
              </h2>
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Saya Hendra Darmawan, seorang mahasiswa yang memiliki passion
                mendalam dalam dunia pengembangan web dan teknologi. Perjalanan
                saya dimulai dari keingintahuan sederhana tentang bagaimana
                website bekerja.
              </p>

              <p>
                Sebagai mahasiswa, saya terus belajar dan mengasah kemampuan
                dalam berbagai teknologi web modern. Saya percaya bahwa
                kombinasi antara pemikiran logis dan kreativitas adalah kunci
                untuk menciptakan solusi digital yang tidak hanya fungsional,
                tetapi juga memberikan pengalaman yang bermakna bagi pengguna.
              </p>

              <p>
                Dalam setiap proyek yang saya kerjakan, saya selalu berusaha
                untuk menyeimbangkan aspek teknis dengan estetika, menciptakan
                harmoni antara kode yang bersih dan desain yang menarik.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div>
                <h3 className="text-lg font-semibold text-cream-100 mb-3">
                  Keahlian
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>React & Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Node.js</li>
                  <li>UI/UX Design</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cream-100 mb-3">
                  Minat
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Web Development</li>
                  <li>Frontend Design</li>
                  <li>User Experience</li>
                  <li>Modern Technologies</li>
                  <li>Open Source</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
