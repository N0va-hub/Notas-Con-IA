"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { HfInference } from "@huggingface/inference";

const hf = new HfInference(process.env.NEXT_PUBLIC_HUGGING_FACE_TOKEN || "");

export default function Home() {
  const [texto, setTexto] = useState("");
  const [resumen, setResumen] = useState("");
  const [cargando, setCargando] = useState(false);
  const [historial, setHistorial] = useState<any[]>([]);

  const cargarNotas = async () => {
    const { data } = await supabase
      .from("notas")
      .select("*")
      .order("fecha", { ascending: false });
    if (data) setHistorial(data);
  };

  useEffect(() => {
    cargarNotas();
  }, []);

  const procesarNota = async () => {
    if (!texto || texto.length < 10) return alert("Escribe un texto más largo");
    setCargando(true);
    try {
      const response = await hf.summarization({
        model: 'facebook/bart-large-cnn',
        inputs: texto,
        parameters: { max_length: 150 }
      });
      
      const resumenIA = response.summary_text;

      const { error } = await supabase
        .from('notas')
        .insert([{ contenido: texto, resumen: resumenIA }]);

      if (error) throw error;

      setResumen(resumenIA);
      setTexto(""); 
      cargarNotas();
    } catch (error) {
      console.error(error);
      alert("Error al conectar con la IA");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="bg-blue-600 text-white py-8 px-4 shadow-lg mb-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2 italic">
            ✨ Resume tus Notas con IA
          </h1>
          <p className="text-blue-100 text-lg">Transforma tus textos largos en ideas claras al instante.</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="space-y-6">
            <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                📝 Nueva Nota
              </h2>
              <textarea 
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-lg"
                rows={8}
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                placeholder="Pega aquí el artículo, noticia o texto que quieras resumir..."
              />
              <button 
                onClick={procesarNota}
                disabled={cargando}
                className={`w-full mt-6 py-4 rounded-xl font-bold text-lg transition-all transform active:scale-95 ${
                  cargando 
                  ? "bg-slate-300 cursor-not-allowed" 
                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200 shadow-xl"
                }`}
              >
                {cargando ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Procesando...
                  </span>
                ) : "Resumir y Guardar Nota"}
              </button>
            </section>

            {resumen && (
              <section className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-200 shadow-sm animate-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-emerald-800 font-bold mb-3 flex items-center gap-2">
                  ✅ Resumen Generado:
                </h3>
                <p className="text-emerald-900 leading-relaxed text-lg italic">"{resumen}"</p>
              </section>
            )}
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 px-2">
              📜 Historial Guardado
            </h2>
            <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2 custom-scrollbar">
              {historial.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-slate-200 text-slate-400">
                  Aún no tienes notas guardadas.
                </div>
              ) : (
                historial.map((nota) => (
                  <div key={nota.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-1 rounded">
                        {new Date(nota.fecha).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-blue-600 mb-1">RESUMEN IA:</p>
                    <p className="text-slate-700 leading-relaxed italic border-l-4 border-blue-100 pl-4">
                      {nota.resumen}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}