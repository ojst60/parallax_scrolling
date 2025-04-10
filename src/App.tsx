import { useRef, useState } from "react";
import {
  useScroll,
  useTransform,
  useMotionValueEvent,
  motion,
} from "motion/react";
import styles from "./my.module.css";

function App() {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const first_y = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const second_y = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <>
      <div ref={ref} className={styles.parent}>
        <motion.div className={styles.child1} style={{ opacity: first_y }}>
          <p>Welcome to Child 1</p>
        </motion.div>
        <motion.div className={styles.child2} style={{ opacity: second_y }}>
          Welcometo child 2
        </motion.div>
      </div>
    </>
  );
}

export default App;
