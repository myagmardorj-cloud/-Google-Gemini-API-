/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ExternalLink, Key, Info, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            Gemini API Guide
          </h1>
          <p className="text-lg text-zinc-600">
            Google Gemini API түлхүүр авах болон апп ашиглах заавар.
          </p>
        </motion.header>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-50 rounded-lg">
              <Key className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-xl font-semibold">API Түлхүүр авах алхмууд</h2>
          </div>
          
          <ol className="space-y-4 text-zinc-600 list-decimal list-inside">
            <li className="pl-2">
              <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline inline-flex items-center gap-1">
                Google AI Studio <ExternalLink className="w-3 h-3" />
              </a> вэбсайт руу орно.
            </li>
            <li className="pl-2">Өөрийн Google хаягаар нэвтэрнэ.</li>
            <li className="pl-2">Зүүн талын цэснээс <strong>"Get API key"</strong> дээр дарна.</li>
            <li className="pl-2"><strong>"Create API key in new project"</strong> товчийг дарна.</li>
            <li className="pl-2">Түлхүүрээ хуулж аваад ашиглана.</li>
          </ol>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-amber-50 border border-amber-200 rounded-2xl p-8 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-4 text-amber-800">
            <AlertCircle className="w-6 h-6" />
            <h2 className="text-xl font-semibold">URL-ийн тухай анхааруулга</h2>
          </div>
          <p className="text-amber-700 mb-4">
            Таны оруулсан URL (<code>my-google-ai-studio-applet-...</code>) нь энэ төслийнх биш байна. 
            Магадгүй өөр төсөл эсвэл хуучин хаяг байж болзошгүй.
          </p>
          <div className="bg-white/50 rounded-xl p-4 border border-amber-200/50">
            <p className="text-sm font-medium text-amber-900 mb-1">Энэ төслийн зөв хаяг:</p>
            <code className="text-xs break-all text-amber-800">
              {window.location.origin}
            </code>
          </div>
        </motion.section>

        <footer className="mt-12 pt-8 border-t border-zinc-200 text-center text-zinc-400 text-sm">
          <p>© 2026 Gemini API Guide. Google AI Studio Build ашиглан бүтээв.</p>
        </footer>
      </main>
    </div>
  );
}
