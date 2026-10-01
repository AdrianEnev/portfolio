import { motion } from "framer-motion";
import StatusBanner from "./StatusBanner";
import { useRef, useState } from "react";

// Axis-locked 3D tilt submit button (rotateY only)
const AxisTiltSubmit = ({
  className = '',
  children,
  disabled,
  type = 'button',
  tiltMax = 0,
}: {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  tiltMax?: number;
}) => {
  const [tiltY, setTiltY] = useState(0);
  const ref = useRef<HTMLButtonElement | null>(null);

  const onMove: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (disabled) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const nx = px * 2 - 1; // -1..1
    setTiltY(nx * tiltMax);
  };

  const onLeave = () => setTiltY(0);

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={!disabled ? { scale: 1.02, y: -2 } : undefined}
      whileTap={!disabled ? { scale: 0.98, y: 0 } : undefined}
      animate={{ rotateY: tiltY }}
      transition={{ type: 'spring', stiffness: 600, damping: 20, mass: 0.55 }}
      style={{ transformPerspective: 800, willChange: 'transform' }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

const ContactForm = ({ onSubmit, setName, setCompany, setEmail, setMessage, setWebsite, name, company, email, message, website, loading, bannerType, bannerMsg }: any) => (
  <form className="w-full min-h-[92%] mt-3 bg-white shadow-md border border-gray-300 rounded-xl px-[10%] py-[10%]"
    onSubmit={onSubmit}
  >
    <div className="flex flex-row gap-x-3">
      <input id="name" name="name" type="text" placeholder={'Your Name'} maxLength={20} required onChange={(e) => setName(e.target.value)} value={name}
        className="w-[50%] h-14 px-3 text-[#1E1B4B] border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
      <input id="company" name="company" type="text" placeholder={'Company (optional)'} maxLength={20} onChange={(e) => setCompany(e.target.value)} value={company}
        className="w-[50%] h-14 px-3 text-[#1E1B4B] border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
    </div>

    <div className="flex flex-col gap-y-6 mt-6">
      <input id="email" name="email" type="email" placeholder={'Email'} maxLength={50} required onChange={(e) => setEmail(e.target.value)} value={email}
        className="w-full h-14 px-3 text-[#1E1B4B] border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
      <textarea id="message" name="message" placeholder={'Message'} maxLength={1000} required onChange={(e) => setMessage(e.target.value)} value={message}
        className="w-full h-24 px-3 text-[#1E1B4B] py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />

      {/* Honeypot field (hidden) */}
      <input
        id="website"
        name="website"
        type="text"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="hidden"
        autoComplete="off"
        tabIndex={-1}
      />

      <AxisTiltSubmit
        type="submit"
        disabled={loading}
        className="w-full h-14 basic-button !text-white !bg-blue-500 hover:!bg-blue-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <p className="text-center sm:text-sm lg:text-base xl:text-lg font-medium">{loading ? 'Sending...' : 'Send Message'}</p>
      </AxisTiltSubmit>

      {/* Inline status message */}
      <StatusBanner type={bannerType} message={bannerMsg} />
    </div>
  </form>
)

export default ContactForm;