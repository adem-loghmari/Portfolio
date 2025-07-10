import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_dclgn3o',
        'template_g5xk94s',
        {
          title: formData.subject,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'mR8keafoOrRHC05lB'
      );
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      alert('Failed to send message.');
    }
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your next project to life? I'd love to hear about your ideas and 
            discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you're a company looking to hire, or you're a fellow developer 
                who'd like to connect, don't hesitate to reach out.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-600/20 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-300">hmidaloghmariadam@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-emerald-600/20 rounded-lg">
                  <Phone className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-300">+216 96 885 651</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-600/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-300">Sousse, Tunisia</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors transform hover:scale-105"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors transform hover:scale-105"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-300 resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 transform hover:scale-105 disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;