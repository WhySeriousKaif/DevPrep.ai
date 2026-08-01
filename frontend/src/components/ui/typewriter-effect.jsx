import { cn } from "../../lib/utils";
import { motion } from "motion/react";

export function TypewriterEffectSmooth({ words, className, cursorClassName }) {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const renderWords = () =>
    wordsArray.map((word, idx) => (
      <div key={`word-${idx}`} className="inline-block">
        {word.text.map((char, index) => (
          <span key={`char-${index}`} className={cn("text-white", word.className)}>
            {char}
          </span>
        ))}
      </div>
    ));

  return (
    <div className={cn("flex space-x-1", className)}>
      <motion.div
        className="overflow-hidden pb-1"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "linear", delay: 0.3 }}
      >
        <div className="text-sm sm:text-base font-bold whitespace-nowrap">{renderWords()}</div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn("block rounded-sm w-[3px] h-4 sm:h-5 bg-primary self-center", cursorClassName)}
      />
    </div>
  );
}
