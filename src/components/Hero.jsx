import { motion } from "framer-motion";
// import heroImage from "../assets/pexels-tact-tm-6002327.jpg";
import { styles } from "../styles";

const text = "Hi, I'm Ahmed Mohammed";
const description = "I'm a Front-End Developer";

// إعدادات أنيميشن النص
const textVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: { delay: i * 0.12 },
  }),
};

// إعدادات أنيميشن الخلفية
const backgroundVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 3, ease: "linear" },
  },
};

// إعدادات اللون المتدرج الهادئ لـ "Ahmed Mohammed"
const gradientTextAnimation = {
  initial: { backgroundPosition: "0% 30%" },
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: { duration: 5, repeat: Infinity, ease: "linear" },
  },
};

// إعدادات تأثير الحروف المتقطعة (Glitch Effect)
const glitchVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    x: [0, -0.5, 0.5, 0],
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      repeat: Infinity,
      repeatType: "reverse",
    },
  }),
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center px-4 md:px-8">
      {/* الخلفية مع تأثير الظهور التدريجي */}
      <motion.div 
        className="absolute inset-0"
        initial="hidden"
        animate="visible"
        variants={backgroundVariants}
      >
       
      </motion.div>

      {/* المحتوى */}
      <div className="relative z-10 text-center text-white max-w-3xl">
        {/* أنيميشن النص الرئيسي */}
        <motion.h1 className={`${styles.heroHeadText} flex justify-center gap-2 md:gap-4 text-xl md:text-3xl lg:text-5xl`}>
          {text.split(" ").map((word, index) => (
            <motion.span
              key={index}
              className={`mr-2 ${
                word === "Ahmed" || word === "Mohammed"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-gray-400 to-purple-500"
                  : ""
              }`}
              initial="initial"
              animate="animate"
              variants={word === "Ahmed" || word === "Mohammed" ? gradientTextAnimation : {}}
              style={{ display: "inline-block", backgroundSize: "200% 200%" }}
            >
              {word.split("").map((char, i) => (
                <motion.span key={i} variants={textVariants} initial="hidden" animate="visible" custom={i}>
                  {char}
                </motion.span>
              ))}
            </motion.span>
          ))}
        </motion.h1>

        {/* أنيميشن الوصف مع تأثير الحروف المتقطعة */}
        <motion.p className={`${styles.heroSubText} mt-6 flex justify-center gap-2 md:gap-4 text-sm md:text-lg lg:text-2xl`}>
          {description.split("").map((char, i) => (
            <motion.span key={i} variants={glitchVariants} initial="hidden" animate="visible" custom={i}>
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
