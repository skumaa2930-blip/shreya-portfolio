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

  const email = 'kumavat11shreya@gmail.com';

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
      <div className="absolute left-1/2 -translate-x-1/2 bottom-20 w-96 h-96 bg-[#ccff00]/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Main Call to Action Block */}
      <div className="flex flex-col items-center text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white uppercase leading-[0.95]"
        >
          HMM.
          <br />
          WHAT SHOULD
          <br />
          <span className="text-white">I MAKE NEXT?</span>
        </motion.h2>

        <p className="mt-6 text-neutral-300 text-lg sm:text-xl font-sans tracking-wide font-light">
          Maybe something I haven’t figured out yet.
        </p>
        <p className="mt-2 font-handwriting text-2xl sm:text-3xl text-white font-normal">
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

        {/* Action Buttons: Email Linked, LinkedIn & Behance */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          <a
            id="footer-email-btn"
            href={`mailto:${email}`}
            className="px-6 py-3 rounded-full bg-white text-black font-sans text-sm font-semibold hover:bg-[#d4f34a] transition-all shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(212,243,74,0.35)] flex items-center gap-2.5 cursor-pointer group"
          >
            <Mail className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
            <span>Email</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-black/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            id="footer-linkedin-btn"
            href="https://www.linkedin.com/in/shreyakumavat"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#1A1918] border border-[#353534] text-white font-sans text-sm font-medium hover:border-white/40 hover:bg-[#252424] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex items-center gap-2.5 cursor-pointer group"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            id="footer-behance-btn"
            href="https://www.behance.net/shreyakumavat"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#1A1918] border border-[#353534] text-white font-sans text-sm font-medium hover:border-white/40 hover:bg-[#252424] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex items-center gap-2.5 cursor-pointer group"
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
              className="relative w-full max-w-lg bg-[#141418] border border-white/15 rounded-xl p-6 shadow-2xl text-white"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1 rounded-full bg-neutral-900 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono-tech text-xs text-[#ccff00] tracking-widest uppercase">
                  START A CONVERSATION
                </span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold mb-4">
                What are you making?
              </h3>

              {messageSent ? (
                <div className="p-8 text-center bg-neutral-900/80 rounded-lg border border-[#ccff00]/30">
                  <div className="w-12 h-12 rounded-full bg-[#ccff00]/20 text-[#ccff00] flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-editorial text-xl font-bold text-white">Message sent!</h4>
                  <p className="text-neutral-400 text-sm mt-1">
                    Thanks for reaching out! Shreya will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-mono-tech uppercase text-neutral-400 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full bg-neutral-950 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#ccff00]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono-tech uppercase text-neutral-400 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full bg-neutral-950 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#ccff00]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono-tech uppercase text-neutral-400 mb-1">
                      Message / Project Idea
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formMsg}
                      onChange={(e) => setFormMsg(e.target.value)}
                      placeholder="Tell me about what you're working on..."
                      className="w-full bg-neutral-950 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#ccff00] resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="text-xs font-mono-tech text-neutral-400 hover:text-white flex items-center gap-1.5 cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedEmail ? 'Copied email!' : 'Copy direct email'}</span>
                    </button>

                    <button
                      type="submit"
                      className="px-5 py-2 rounded bg-[#ccff00] text-black font-sans font-bold text-xs uppercase tracking-wider hover:bg-[#d8ff33] transition-colors flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(204,255,0,0.3)]"
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


