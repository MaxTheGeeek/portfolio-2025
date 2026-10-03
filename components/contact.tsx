"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { scrollToSection } from "@/lib/scroll";
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  MapPin, 
  Clock, 
  Github, 
  Linkedin, 
  ArrowUpRight,
  Sparkles,
  MessageSquare
} from "lucide-react";

const PROJECT_TYPE_OPTIONS = [
  "AI Voice Assistant & Audio Pipeline",
  "AI Customer Support Chatbot",
  "Autonomous AI Agent & Automation",
  "Full-Stack Web Application",
  "High-Performance Desktop Software",
  "Technical Architecture Advisory",
  "Other / Direct Collaboration"
];

export function Contact() {
  const shouldReduceMotion = useReducedMotion();

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    organization: "",
    scope: "AI Voice Assistant & Audio Pipeline",
    message: "",
    botcheck: "" // Hidden honeypot field
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Listen for prefill events from Solutions or Projects sections
  useEffect(() => {
    const handlePrefill = (e: CustomEvent<{ service?: string; project?: string }>) => {
      if (e.detail?.service) {
        const match = PROJECT_TYPE_OPTIONS.find(opt => 
          opt.toLowerCase().includes(e.detail.service!.toLowerCase()) || 
          e.detail.service!.toLowerCase().includes(opt.toLowerCase())
        );
        setFormState(prev => ({
          ...prev,
          scope: match || e.detail.service!
        }));
      } else if (e.detail?.project) {
        setFormState(prev => ({
          ...prev,
          message: prev.message || `Hi Max, I would like to discuss an engineering project related to ${e.detail.project}.`
        }));
      }
    };

    window.addEventListener("prefill-contact-service" as any, handlePrefill as EventListener);
    return () => {
      window.removeEventListener("prefill-contact-service" as any, handlePrefill as EventListener);
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("maxbehzadi82@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback gracefully
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot defense: silently discard bots
    if (formState.botcheck) {
      setSubmitStatus("success");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    const accessKey = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY || "756fd8d4-0237-4f66-98e7-d55c15c5eef9";

    try {
      // 1. Primary Dispatch: Web3Forms API
      const web3Response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formState.name,
          email: formState.email,
          organization: formState.organization || "Not Specified",
          scope: formState.scope,
          message: formState.message,
          botcheck: formState.botcheck,
          subject: `[Portfolio Inquiry] ${formState.scope} from ${formState.name}`,
          from_name: formState.name
        })
      });

      const web3Data = await web3Response.json().catch(() => null);

      // Also persist to server route /api/contact for MongoDB retention
      try {
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formState.name,
            email: formState.email,
            company: formState.organization,
            projectType: formState.scope,
            message: formState.message,
            botcheck: formState.botcheck
          })
        }).catch(() => {});
      } catch {
        // Silent logging fallback
      }

      if (web3Response.ok && web3Data?.success) {
        setSubmitStatus("success");
        setFormState({
          name: "",
          email: "",
          organization: "",
          scope: "AI Voice Assistant & Audio Pipeline",
          message: "",
          botcheck: ""
        });
      } else {
        // Attempt server-side proxy route fallback
        const proxyResponse = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formState.name,
            email: formState.email,
            company: formState.organization,
            projectType: formState.scope,
            message: formState.message,
            botcheck: formState.botcheck
          })
        });
        const proxyData = await proxyResponse.json().catch(() => null);

        if (proxyResponse.ok && proxyData?.ok) {
          setSubmitStatus("success");
          setFormState({
            name: "",
            email: "",
            organization: "",
            scope: "AI Voice Assistant & Audio Pipeline",
            message: "",
            botcheck: ""
          });
        } else {
          setSubmitStatus("error");
          setErrorMessage(
            web3Data?.message || 
            proxyData?.error || 
            "Form submission failed. Please reach out directly to maxbehzadi82@gmail.com."
          );
        }
      }
    } catch {
      // Direct email fallback on unexpected network failure
      setSubmitStatus("error");
      setErrorMessage(
        "Network connection interrupted. Please reach out directly to maxbehzadi82@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="scene py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative" id="contact">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-[0.06em] text-[#d99b53] mb-3">
          Technical Consultation &amp; Intake
        </span>
        <h2 className="font-serif text-2xl sm:text-[32px] sm:leading-[40px] font-normal text-[#f3f4f6] tracking-tight mb-4">
          Let&apos;s Build <span className="italic text-[#fcb96e]">Something Exceptional</span>
        </h2>
        <p className="text-base text-[#9ca3af] leading-relaxed">
          Whether you need an enterprise AI customer chatbot, autonomous voice pipeline, or high-performance desktop &amp; web architecture, reach out below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Coordinates Card (5 Cols) */}
        <motion.div 
          initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          <div className="rounded-none border border-[#232730] bg-[#111317] p-6 sm:p-8 flex flex-col gap-6 shadow-xl">
            <div>
              <div className="text-xs font-mono text-[#d99b53] uppercase tracking-[0.06em] mb-1">
                Direct Coordinates
              </div>
              <h3 className="text-xl font-bold text-[#f3f4f6] mb-1.5">
                Max Behzadi
              </h3>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Full-Stack Engineer | Applied AI Engineer available for organizational deliveries, technical advisory, and high-stakes engineering engagements.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-4 rounded-none bg-[#16191f] border border-[#232730] flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#768e9d]">Direct Mailbox</span>
                <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active Response
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <a 
                  href="mailto:maxbehzadi82@gmail.com" 
                  className="text-sm sm:text-base font-mono text-[#fcb96e] hover:text-[#d99b53] transition-colors truncate"
                >
                  maxbehzadi82@gmail.com
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-none bg-white/5 hover:bg-white/10 text-[#9ca3af] hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Location & Response SLA */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-none bg-[#16191f] border border-[#232730] flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#d99b53] shrink-0" />
                <div>
                  <div className="text-[10px] text-[#768e9d]">Location</div>
                  <div className="text-[#f3f4f6]">Vienna, Austria</div>
                </div>
              </div>

              <div className="p-3 rounded-none bg-[#16191f] border border-[#232730] flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#d99b53] shrink-0" />
                <div>
                  <div className="text-[10px] text-[#768e9d]">Response SLA</div>
                  <div className="text-[#f3f4f6]">&lt; 24h Direct</div>
                </div>
              </div>
            </div>

            {/* Social / External Coordinates */}
            <div className="pt-4 border-t border-[#232730] flex items-center gap-3">
              <a
                href="https://github.com/MaxTheGeeek"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 p-2.5 rounded-none bg-[#16191f] hover:bg-white/5 border border-[#232730] text-xs font-mono text-[#9ca3af] hover:text-white transition-all cursor-pointer"
              >
                <Github className="w-4 h-4 text-[#d99b53]" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 ml-auto text-[#768e9d]" />
              </a>

              <a
                href="https://linkedin.com/in/max-behzadi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 p-2.5 rounded-none bg-[#16191f] hover:bg-white/5 border border-[#232730] text-xs font-mono text-[#9ca3af] hover:text-white transition-all cursor-pointer"
              >
                <Linkedin className="w-4 h-4 text-[#d99b53]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 ml-auto text-[#768e9d]" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Web3Forms Consultation Form (7 Cols) */}
        <motion.div 
          initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7"
        >
          <div className="rounded-none border border-[#232730] bg-[#111317] p-6 sm:p-10 shadow-xl relative overflow-hidden">
            <h3 className="font-serif text-2xl text-[#f3f4f6] font-normal mb-2">
              Send a Project Inquiry
            </h3>
            <p className="text-xs text-[#9ca3af] mb-6 leading-relaxed">
              Inquiries are routed directly to Max&apos;s personal inbox at <span className="text-[#fcb96e] font-mono">maxbehzadi82@gmail.com</span> with your email set as Reply-To.
            </p>

            {submitStatus === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-none bg-[#d99b53]/10 border border-[#d99b53]/30 text-center flex flex-col items-center gap-4"
              >
                <div className="w-14 h-14 rounded-none bg-[#d99b53]/20 border border-[#d99b53]/40 flex items-center justify-center text-[#fcb96e]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#f3f4f6] mb-1">Inquiry Delivered Successfully</h4>
                  <p className="text-xs text-[#9ca3af] max-w-md">
                    Thank you. Your message has been sent directly to <strong className="text-[#fcb96e]">maxbehzadi82@gmail.com</strong>. I will review your requirements and respond within 24 business hours.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
                  <button
                    type="button"
                    onClick={() => setSubmitStatus("idle")}
                    className="px-5 py-2.5 rounded-none bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                  <a
                    href="mailto:maxbehzadi82@gmail.com"
                    className="px-5 py-2.5 rounded-none bg-[#d99b53]/20 hover:bg-[#d99b53]/30 border border-[#d99b53]/40 text-[#fcb96e] text-xs font-semibold transition-all"
                  >
                    Open in Email Client
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field (hidden from real users) */}
                <input
                  type="checkbox"
                  name="botcheck"
                  checked={!!formState.botcheck}
                  onChange={(e) => setFormState({ ...formState, botcheck: e.target.checked ? "spam" : "" })}
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-[#f3f4f6] mb-1.5">
                      Your Name <span className="text-[#d99b53]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-none bg-[#16191f] border border-[#232730] text-white placeholder-[#6b7280] text-sm focus:outline-none focus:border-[#d99b53] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-[#f3f4f6] mb-1.5">
                      Email Address <span className="text-[#d99b53]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-none bg-[#16191f] border border-[#232730] text-white placeholder-[#6b7280] text-sm focus:outline-none focus:border-[#d99b53] transition-all"
                    />
                  </div>
                </div>

                {/* Company & Project Scope Dropdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-organization" className="block text-xs font-medium text-[#f3f4f6] mb-1.5">
                      Organization / Company <span className="text-[#768e9d] font-normal">(Optional)</span>
                    </label>
                    <input
                      id="contact-organization"
                      type="text"
                      placeholder="Organization or Private"
                      value={formState.organization}
                      onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-none bg-[#16191f] border border-[#232730] text-white placeholder-[#6b7280] text-sm focus:outline-none focus:border-[#d99b53] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-scope" className="block text-xs font-medium text-[#f3f4f6] mb-1.5">
                      Project Scope
                    </label>
                    <select
                      id="contact-scope"
                      value={formState.scope}
                      onChange={(e) => setFormState({ ...formState, scope: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-none bg-[#16191f] border border-[#232730] text-white text-sm focus:outline-none focus:border-[#d99b53] transition-all"
                    >
                      {PROJECT_TYPE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#111317] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-[#f3f4f6] mb-1.5">
                    Project Details or Requirements <span className="text-[#d99b53]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Describe your system requirements, technical constraints, timeline, or objectives..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-none bg-[#16191f] border border-[#232730] text-white placeholder-[#6b7280] text-sm focus:outline-none focus:border-[#d99b53] transition-all resize-none"
                  />
                </div>

                {/* Error Banner */}
                {submitStatus === "error" && (
                  <div className="p-3 rounded-none bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit Action Row */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-[#768e9d] font-mono">
                    Direct founder &amp; engineer communication · Zero automated spam
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-none bg-[#d99b53] hover:bg-[#fcb96e] text-[#111317] font-semibold text-sm transition-all duration-200 shadow-md shadow-[#d99b53]/20 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#111317] border-t-transparent rounded-full animate-spin" />
                        <span>Sending to Web3Forms...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
