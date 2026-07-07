import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import ContactForm from "./ContactForm";
import SectionHeading from "./SectionHeading";

const DeveloperDesk = lazy(() => import("./DeveloperDesk"));

const Contact = () => {
  return (
    <div className="bg-primary pb-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-16" id="contact">
        <SectionHeading kicker="Get In Touch" title="Contact Me" />

        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="w-full md:w-1/2"
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="w-full md:w-1/2"
          >
            <Suspense
              fallback={
                <div className="flex h-80 w-full items-center justify-center text-tertiary sm:h-96 md:h-[28rem]">
                  Loading 3D scene...
                </div>
              }
            >
              <DeveloperDesk />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
