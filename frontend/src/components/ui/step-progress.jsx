import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2Icon, CircleIcon } from "lucide-react";
import { cn } from "../../lib/utils";

export function StepProgress({ steps, duration = 1800, loop = true, className }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveIndex((prev) => {
        if (prev >= steps.length - 1) return loop ? 0 : prev;
        return prev + 1;
      });
    }, duration);
    return () => clearTimeout(timeout);
  }, [activeIndex, duration, loop, steps.length]);

  return (
    <div className={cn("space-y-3", className)}>
      {steps.map((step, index) => {
        const isDone = index < activeIndex;
        const isActive = index === activeIndex;

        return (
          <motion.div
            key={step.text}
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <div className="shrink-0">
              {isDone ? (
                <CheckCircle2Icon className="size-5 text-success" />
              ) : isActive ? (
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  <CheckCircle2Icon className="size-5 text-primary" />
                </motion.div>
              ) : (
                <CircleIcon className="size-5 text-base-content/20" />
              )}
            </div>
            <span
              className={cn(
                "text-sm transition-colors duration-300",
                isDone && "text-base-content/50 line-through",
                isActive && "text-white font-medium",
                !isDone && !isActive && "text-base-content/30"
              )}
            >
              {step.text}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
