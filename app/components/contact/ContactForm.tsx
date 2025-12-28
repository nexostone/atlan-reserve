'use client';

/**
 * ContactForm Component - Atlan Reserve
 * Formulario de contacto minimalista con validación y animaciones elegantes
 */

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/app/components/ui/Button';
import { fadeInUp } from '@/lib/animations/variants';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const interestOptions = [
  { value: '', label: 'Selecciona una opción' },
  { value: 'residences', label: 'Residencias' },
  { value: 'investment', label: 'Inversión' },
  { value: 'amenities', label: 'Amenidades' },
  { value: 'visit', label: 'Visita al Desarrollo' },
  { value: 'other', label: 'Otro' },
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'El nombre es requerido';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'El apellido es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Integrar con API de Supabase o servicio de email
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulación

      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
      });
      setErrors({});
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputBaseClasses = 'w-full border border-ash bg-transparent px-4 py-3 text-navy transition-all duration-300 focus:border-navy focus:outline-none';
  const labelClasses = 'mb-2 block text-sm font-light tracking-wide text-steel';
  const errorClasses = 'mt-1 text-xs text-red-600';

  return (
    <motion.form
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Name Fields */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className={labelClasses}>
            Nombre *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={inputBaseClasses}
            disabled={isSubmitting}
          />
          {errors.firstName && (
            <p className={errorClasses}>{errors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className={labelClasses}>
            Apellido *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={inputBaseClasses}
            disabled={isSubmitting}
          />
          {errors.lastName && (
            <p className={errorClasses}>{errors.lastName}</p>
          )}
        </div>
      </div>

      {/* Contact Fields */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputBaseClasses}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className={errorClasses}>{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputBaseClasses}
            disabled={isSubmitting}
          />
          {errors.phone && (
            <p className={errorClasses}>{errors.phone}</p>
          )}
        </div>
      </div>

      {/* Interest */}
      <div>
        <label htmlFor="interest" className={labelClasses}>
          ¿En qué estás interesado?
        </label>
        <select
          id="interest"
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          className={`${inputBaseClasses} cursor-pointer`}
          disabled={isSubmitting}
        >
          {interestOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClasses}>
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className={`${inputBaseClasses} resize-none`}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className={errorClasses}>{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <Button
          type="submit"
          variant="primary"
          size="large"
          loading={isSubmitting}
          disabled={isSubmitting}
          fullWidth
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </Button>
      </div>

      {/* Success/Error Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-green-200 bg-green-50 px-6 py-4 text-green-800"
        >
          <p className="text-sm">
            ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
          </p>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-red-200 bg-red-50 px-6 py-4 text-red-800"
        >
          <p className="text-sm">
            Hubo un error al enviar tu mensaje. Por favor intenta nuevamente.
          </p>
        </motion.div>
      )}
    </motion.form>
  );
}
