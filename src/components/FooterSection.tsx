import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { StickyNote } from './StickyNote';
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  Sparkles,
  MessageSquare,
  X,
} from 'lucide-react';

interface FooterSectionProps {
  isContactModalOpen?: boolean;
  setIsContactModalOpen?: (open: boolean) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  isContactModalOpen = false,
  setIsContactModalOpen,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [localModalOpen, setLocalModalOpen] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMsg, setFormMsg] = useState('');

  const modalOpen = setIsContactModalOpen ? isContactModalOpen : localModalOpen;
  const setOpen = setIsContactModalOpen || setLocalModalOpen;

  const email = 'skumaa2930@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formMsg) return;
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setOpen(false);
      setFormName('');
      setFormEmail('');
      setFormMsg('');
    }, 2000);
  };

  return (
    <footer id="contact" className="relative pt-24 pb-12 sm:pb-16 px-4 sm:px-8 md:px-12 max-w-[1280px] mx-auto border-t border-white/[0.08] overflow-hidden">
      {/* Glow behind call to action */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-20 w-96 h-96 bg-[#b6d63a]/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Main Call to Action Block */}
      <div className="flex flex-col items-center text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white uppercase leading-[0.95]"
        >
          HMM.
          <br />
          WHAT SHOULD
          <br />
          <span className="text-white">I MAKE NEXT?</span>
        </motion.h2>

        <p className="mt-6 text-[#A3A3A3] text-lg sm:text-xl font-sans tracking-wide font-light max-w-xl">
          Maybe something I haven’t figured out yet.
        </p>
        <p className="mt-2 font-caveat text-2xl sm:text-3xl text-[#F5F5F0] font-normal">
          maybe something with you.
        </p>

        {/* Floating Thank You Sticky Note */}
        <div className="mt-10 mb-14 w-60 sm:w-64">
          <StickyNote
            text={`thanks for\nscrolling this far.\nsee you around. ♡`}
            rotation="rotate-3"
            tapePosition="top"
            variant="yellow"
          />
        </div>

        {/* Action Buttons: Email Linked, LinkedIn & Behance (Standardized to Syne and rounded-full) */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          <a
            id="footer-email-btn"
            href={`mailto:${email}`}
            className="px-6 py-3 rounded-full bg-[#1C1B1B] border border-[#353534] text-[#F5F5F0] font-syne text-xs sm:text-[13px] font-bold uppercase tracking-wider hover:border-[#b6d63a]/50 hover:bg-[#252424] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex items-center gap-2.5 cursor-pointer group"
          >
            <Mail className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
            <span>Email</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            id="footer-linkedin-btn"
            href="https://www.linkedin.com/in/shreya-kumavat-49a36b2bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#1C1B1B] border border-[#353534] text-[#F5F5F0] font-syne text-xs sm:text-[13px] font-bold uppercase tracking-wider hover:border-[#b6d63a]/50 hover:bg-[#252424] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex items-center gap-2.5 cursor-pointer group"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            id="footer-behance-btn"
            href="https://www.behance.net/shreyak27"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#1C1B1B] border border-[#353534] text-[#F5F5F0] font-syne text-xs sm:text-[13px] font-bold uppercase tracking-wider hover:border-[#b6d63a]/50 hover:bg-[#252424] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex items-center gap-2.5 cursor-pointer group"
          >
            <span>Behance</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>


        </div>
      </div>

      {/* Interactive Contact Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-[#151417] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl text-white"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1 rounded-full bg-neutral-900 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-1">
                <span className="font-syne text-xs text-[#b6d63a] tracking-widest uppercase font-bold">
                  START A CONVERSATION
                </span>
              </div>
              <h3 className="font-playfair text-2xl sm:text-3xl font-normal mb-4">
                What are you making?
              </h3>

              {messageSent ? (
                <div className="p-8 text-center bg-neutral-900/80 rounded-lg border border-[#b6d63a]/30">
                  <div className="w-12 h-12 rounded-full bg-[#b6d63a]/20 text-[#b6d63a] flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-playfair text-xl font-bold text-white">Message sent!</h4>
                  <p className="text-neutral-400 text-sm mt-1 font-sans">
                    Thanks for reaching out! Shreya will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-syne uppercase text-neutral-400 mb-1 font-semibold tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full bg-[#0c0c0e] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm font-sans text-white placeholder-neutral-600 focus:outline-none focus:border-[#b6d63a]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-syne uppercase text-neutral-400 mb-1 font-semibold tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full bg-[#0c0c0e] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm font-sans text-white placeholder-neutral-600 focus:outline-none focus:border-[#b6d63a]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-syne uppercase text-neutral-400 mb-1 font-semibold tracking-wider">
                      Message / Project Idea
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formMsg}
                      onChange={(e) => setFormMsg(e.target.value)}
                      placeholder="Tell me about what you're working on..."
                      className="w-full bg-[#0c0c0e] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm font-sans text-white placeholder-neutral-600 focus:outline-none focus:border-[#b6d63a] resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="text-xs font-syne font-semibold text-neutral-400 hover:text-white flex items-center gap-1.5 cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedEmail ? 'Copied email!' : 'Copy direct email'}</span>
                    </button>

                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full bg-[#b6d63a] text-black font-syne font-bold text-xs uppercase tracking-wider hover:bg-[#cbf046] transition-colors flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(182,214,58,0.3)]"
                    >
                      <span>Send Note</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};
