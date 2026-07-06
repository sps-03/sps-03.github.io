import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import ContactForm from "./ContactForm";

const DeveloperDesk = lazy(() => import("./DeveloperDesk"));

const Contact = () => {
  return (
    <div className="bg-primary pt-8">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-16" id="contact">
        <motion.h2
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.25 }}
          className="py-8 text-center text-4xl font-semibold text-tertiary"
        >
          Contact Me
        </motion.h2>

        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="w-full lg:w-1/2"
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="w-full lg:w-1/2"
          >
            <Suspense
              fallback={
                <div className="flex h-80 w-full items-center justify-center text-tertiary sm:h-96 lg:h-[28rem]">
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
