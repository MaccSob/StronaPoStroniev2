'use client';

import { useRef, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Zabezpieczenie przed brakiem kluczy w pliku .env.local
    if (!serviceId || !templateId || !publicKey) {
      console.error('Brak kluczy EmailJS w pliku .env.local!');
      setStatus({
        type: 'error',
        text: 'Błąd konfiguracji (brak kluczy API). Sprawdź plik .env.local.',
      });
      setLoading(false);
      return;
    }

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey: publicKey,
      });

      setStatus({ type: 'success', text: 'Wiadomość została wysłana!' });
      formRef.current.reset();
    } catch (error) {
      console.error('Błąd EmailJS:', error);
      setStatus({
        type: 'error',
        text: 'Coś poszło nie tak. Upewnij się, że dane są poprawne lub wyłącz AdBlocka.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="isolate bg-grey-900 px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-288.75"
        />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-black sm:text-5xl text-shadow-lg/20 dark:text-white dark:-text-shadow-lg/20">
          Skontaktuj się ze mną!
        </h2>
      </div>

      <form ref={formRef} onSubmit={sendEmail} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-black dark:text-white">
              Imię
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first_name"
                type="text"
                required
                autoComplete="given-name"
                className="border-1 border-green-800 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-black dark:text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-black dark:text-white">
              Nazwisko
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last_name"
                type="text"
                required
                autoComplete="family-name"
                className="border-1 border-green-800 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-black dark:text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-black dark:text-white">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="user_email"
                type="email"
                required
                autoComplete="email"
                className="border-1 border-green-800 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-black dark:text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-black dark:text-white">
              Wiadomość
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="border-1 border-green-800 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-black dark:text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>

          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-white/5 p-px inset-ring inset-ring-white/10 outline-offset-2 outline-indigo-500 transition-colors duration-200 ease-in-out has-checked:bg-green-800 has-focus-visible:outline-2">
                <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                <input
                  id="agree-to-policies"
                  name="agree-to-policies"
                  type="checkbox"
                  required
                  aria-label="Agree to policies"
                  className="absolute inset-0 size-full appearance-none focus:outline-hidden cursor-pointer"
                />
              </div>
            </div>
            <label htmlFor="agree-to-policies" className="text-sm/8 text-gray-600">
              Wybierając zgadzasz się na{' '}
              <a href="/policy" className="font-semibold whitespace-nowrap text-green-800">
                Politykę prywatności
              </a>
              .
            </label>
          </div>
        </div>

        {status && (
          <div
            className={`mt-6 p-4 rounded-md text-sm text-center font-medium ${
              status.type === 'success'
                ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300'
                : 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300'
            }`}
          >
            {status.text}
          </div>
        )}

        <div className="mt-10">
          <button
            type="submit"
            disabled={loading}
            className="block w-full rounded-md bg-green-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          >
            {loading ? 'Wysyłanie...' : 'Wyślij'}
          </button>
        </div>
      </form>
    </div>
  );
}