import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

interface InquiryFormData {
  firstName: string;
  lastName: string;
  email: string;
  details: string;
}

export const ContactSection = () => {
  const [form, setForm] = useState<InquiryFormData>({
    firstName: '',
    lastName: '',
    email: '',
    details: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSendInquiry = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.firstName || !form.lastName || !form.email || !form.details) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      // إرسال البيانات للتمبلت الجديد المخصص للاستفسارات
      await emailjs.send(
        'service_dofj8zm',
        'template_23qo6e8', // التمبلت الجديد الخاص بك
        {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          details: form.details,
        },
        'BF-13QkE62Bm0oidq'
      );

      alert('Your inquiry has been sent successfully!');
      setForm({ firstName: '', lastName: '', email: '', details: '' }); // تفريغ الحقول بعد النجاح
    } catch (err) {
      alert('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-background text-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        
        {/* الجانب الأيسر: معلومات الاتصال */}
        <div>
          <span className="text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-2 block">GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Start Your<br />Energy Journey</h2>
          <p className="text-muted-foreground mb-12 max-w-md">
            Whether you are an institutional investor or a developer, we are ready to discuss your vision for the charging future.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-full border border-white/10 text-[#d4af37]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <span className="text-xs text-muted-foreground block uppercase tracking-wider">Headquarters</span>
                <span className="font-medium">3 Homosani St Ibn sendr sq Cairo</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-full border border-white/10 text-[#d4af37]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.5 19.5 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <span className="text-xs text-muted-foreground block uppercase tracking-wider">Direct Line</span>
                <span className="font-medium">+201113737994</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-full border border-white/10 text-[#d4af37]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <span className="text-xs text-muted-foreground block uppercase tracking-wider">Investment Inquiries</span>
                <span className="font-medium text-[#d4af37]">invest@helpis.ev</span>
              </div>
            </div>
          </div>
        </div>

        {/* الجانب الأيمن: الفورم البرمجية */}
        <div className="bg-card rounded-3xl border border-white/10 p-8 w-full">
          <form onSubmit={handleSendInquiry} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider block mb-2">First Name</label>
                <input 
                  name="firstName" 
                  value={form.firstName} 
                  onChange={handleChange} 
                  placeholder="James" 
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#d4af37] outline-none transition" 
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider block mb-2">Last Name</label>
                <input 
                  name="lastName" 
                  value={form.lastName} 
                  onChange={handleChange} 
                  placeholder="Sutherland" 
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#d4af37] outline-none transition" 
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider block mb-2">Email Address</label>
              <input 
                type="email"
                name="email" 
                value={form.email} 
                onChange={handleChange} 
                placeholder="james@luxury-assets.com" 
                className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#d4af37] outline-none transition" 
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider block mb-2">Inquiry Details</label>
              <textarea 
                name="details" 
                value={form.details} 
                onChange={handleChange} 
                rows={5}
                placeholder="How can we assist your investment?" 
                className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-sm text-white resize-none focus:border-[#d4af37] outline-none transition" 
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#d4af37] hover:bg-[#c5a028] text-black font-bold uppercase tracking-widest text-sm py-4 rounded-xl shadow-lg transition-all border-none"
            >
              {loading ? 'Sending...' : 'Send Inquiry'}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};
