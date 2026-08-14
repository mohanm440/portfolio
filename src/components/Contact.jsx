import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MessageSquare, FileText, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-2 block">
          Get In Touch
        </span>
        <h2 className="font-serif-custom text-4xl md:text-5xl font-light text-white mb-4">
          Let's Work <em className="italic font-normal">Together</em>
        </h2>
        <p className="text-slate-400 text-base max-w-xl mx-auto">
          Currently open to full-time AI/ML Engineering, Data Science, and Cybersecurity roles. Feel free to reach out directly via WhatsApp, LinkedIn, or Email.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Channels */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          {/* WhatsApp Direct Link */}
          <a
            href={personalInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/40 hover:bg-green-500/5 transition-all group backdrop-blur-md"
          >
            <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-400 block mb-0.5">
                WhatsApp Direct
              </span>
              <span className="text-sm font-semibold text-white group-hover:text-green-300 transition-colors">
                {personalInfo.whatsapp}
              </span>
            </div>
          </a>

          {/* Email Direct Link */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all group backdrop-blur-md"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-400 block mb-0.5">
                Email Address
              </span>
              <span className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                {personalInfo.email}
              </span>
            </div>
          </a>

          {/* LinkedIn Profile */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all group backdrop-blur-md"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
              <LinkedinIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-400 block mb-0.5">
                LinkedIn Profile
              </span>
              <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                linkedin.com/in/mohansakthi
              </span>
            </div>
          </a>

          {/* GitHub Profile */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/40 hover:bg-violet-500/5 transition-all group backdrop-blur-md"
          >
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-400 block mb-0.5">
                GitHub Repositories
              </span>
              <span className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                github.com/mohanm440
              </span>
            </div>
          </a>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md"
        >
          <h3 className="font-serif-custom text-2xl font-semibold text-white mb-6">
            Send a Direct Message
          </h3>

          <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! Your message has been prepared."); window.location.href = `mailto:${personalInfo.email}`; }} className="space-y-5">
            <div>
              <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-2">Your Name</label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-2">Your Email</label>
              <input
                type="email"
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-2">Message</label>
              <textarea
                rows={4}
                required
                placeholder="Hello Mohan, I'd like to discuss an ML opportunity..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm tracking-wider uppercase shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
