'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        break;
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email address';
        break;
      case 'company':
        if (!value.trim()) return 'Company is required';
        break;
      case 'subject':
        if (!value) return 'Please select a subject';
        break;
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        break;
    }
    return undefined;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Validate on change if field was touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) {
        newErrors[key as keyof FormErrors] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      company: true,
      subject: true,
      message: true
    });

    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Form submitted:', formData);
      setSubmitStatus('success');

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
      setTouched({});
      setErrors({});

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      {/* Glass morphism container */}
      <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 shadow-2xl border border-white/20">
        <h2 className="text-3xl font-bold text-white mb-6">Send us a message</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400
                focus:outline-none focus:ring-2 transition-all duration-300
                ${touched.name && errors.name
                  ? 'border-red-500 focus:ring-red-500/50'
                  : 'border-white/20 focus:border-purple-400 focus:ring-purple-400/50'
                }
                hover:border-purple-400/50`}
              placeholder="John Doe"
            />
            {touched.name && errors.name && (
              <p className="mt-1 text-sm text-red-400">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400
                focus:outline-none focus:ring-2 transition-all duration-300
                ${touched.email && errors.email
                  ? 'border-red-500 focus:ring-red-500/50'
                  : 'border-white/20 focus:border-purple-400 focus:ring-purple-400/50'
                }
                hover:border-purple-400/50`}
              placeholder="john@company.com"
            />
            {touched.email && errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email}</p>
            )}
          </div>

          {/* Company Field */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-200 mb-2">
              Company *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400
                focus:outline-none focus:ring-2 transition-all duration-300
                ${touched.company && errors.company
                  ? 'border-red-500 focus:ring-red-500/50'
                  : 'border-white/20 focus:border-purple-400 focus:ring-purple-400/50'
                }
                hover:border-purple-400/50`}
              placeholder="Your Company"
            />
            {touched.company && errors.company && (
              <p className="mt-1 text-sm text-red-400">{errors.company}</p>
            )}
          </div>

          {/* Subject Dropdown */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white
                focus:outline-none focus:ring-2 transition-all duration-300
                ${touched.subject && errors.subject
                  ? 'border-red-500 focus:ring-red-500/50'
                  : 'border-white/20 focus:border-purple-400 focus:ring-purple-400/50'
                }
                hover:border-purple-400/50 appearance-none cursor-pointer`}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.5em 1.5em',
                paddingRight: '2.5rem'
              }}
            >
              <option value="" className="bg-slate-800">Select a subject</option>
              <option value="general" className="bg-slate-800">General Inquiry</option>
              <option value="sales" className="bg-slate-800">Sales</option>
              <option value="support" className="bg-slate-800">Technical Support</option>
              <option value="partnership" className="bg-slate-800">Partnership Opportunity</option>
              <option value="feedback" className="bg-slate-800">Feedback</option>
              <option value="other" className="bg-slate-800">Other</option>
            </select>
            {touched.subject && errors.subject && (
              <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={5}
              className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400
                focus:outline-none focus:ring-2 transition-all duration-300 resize-none
                ${touched.message && errors.message
                  ? 'border-red-500 focus:ring-red-500/50'
                  : 'border-white/20 focus:border-purple-400 focus:ring-purple-400/50'
                }
                hover:border-purple-400/50`}
              placeholder="Tell us about your project or inquiry..."
            />
            {touched.message && errors.message && (
              <p className="mt-1 text-sm text-red-400">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg
              hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-purple-500/50
              transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
              disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
              flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </>
            )}
          </button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center">
              Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center">
              Oops! Something went wrong. Please try again later.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
