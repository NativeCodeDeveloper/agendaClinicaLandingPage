
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function StickyMobileCTA() {
    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 z-50 md:hidden pb-safe shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
            <div className="flex gap-3">
                <Link
                    href="https://wa.me/56966091038?text=Hola,%20quiero%20automatizar%20mi%20centro"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-bold text-sm shadow-sm"
                >
                    <MessageCircle className="w-5 h-5" />
                    Hablar por WhatsApp
                </Link>
                <Link
                    href="#contacto"
                    className="flex-1 flex items-center justify-center gap-2 bg-purple-600 text-white py-3 rounded-xl font-bold text-sm shadow-sm"
                >
                    Cotizar
                    <ArrowUpRight className="w-5 h-5" />
                </Link>
            </div>
        </div>
    );
}
