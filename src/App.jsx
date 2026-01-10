import { useState, useEffect } from 'react'

function App() {
  
  const [links, setLinks] = useState(() => {
    const salvos = localStorage.getItem('quicklinks_v1');
    return salvos ? JSON.parse(salvos) : [];
  });
  
  const [urlOriginal, setUrlOriginal] = useState('');

  // Sincronização automática com LocalStorage (Requisito de MVP funcional)
  useEffect(() => {
    localStorage.setItem('quicklinks_v1', JSON.stringify(links));
  }, [links]);

  //  LÓGICA DO MVP : Encurtamento e registro
  const handleEncurtar = () => {
    if (!urlOriginal) return;

    const novoLink = {
      id: Math.random().toString(36).substr(2, 5),
      url: urlOriginal,
      cliques: 0,
      criadoEm: new Date().toLocaleDateString()
    };

    setLinks([novoLink, ...links]);
    setUrlOriginal(''); 
  };

  return (
    //  INTERFACE PRINCIPAL: Landing page e UI com Tailwind CSS
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 font-sans antialiased">
      <div className="max-w-2xl mx-auto pt-16">
        
        {/* LANDING PAGE / HEADER SECTION */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-black bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            QuickLinks
          </h1>
          <p className="mt-4 text-slate-400 text-lg">
            Sua ferramenta profissional de gerenciamento de links.
          </p>
        </header>

        {/* INPUT SECTION: Componente básico da UI definido */}
        <div className="bg-slate-800 p-3 rounded-2xl shadow-xl border border-slate-700 flex flex-col sm:flex-row gap-3">
          <input 
            type="url" 
            placeholder="Insira sua URL original..." 
            className="flex-1 bg-transparent p-4 outline-none text-slate-100 placeholder:text-slate-500"
            value={urlOriginal}
            onChange={(e) => setUrlOriginal(e.target.value)}
          />
          <button 
            onClick={handleEncurtar}
            className="bg-blue-600 hover:bg-blue-500 transition-all text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-900/20"
          >
            Encurtar
          </button>
        </div>

        {/* LISTA DE COMPONENTES: Exibição do MVP implementado */}
        <div className="mt-12 space-y-4">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest px-2">
            Links Gerados
          </h2>
          
          {links.length === 0 && (
            <div className="text-center py-10 border-2 border-dashed border-slate-800 rounded-2xl">
              <p className="text-slate-600">Aguardando seu primeiro link...</p>
            </div>
          )}

          {links.map(link => (
            <div key={link.id} className="bg-slate-800/40 p-5 rounded-2xl border border-slate-700 flex justify-between items-center group hover:border-slate-500 transition-all">
              <div className="flex flex-col gap-1 overflow-hidden">
                <span className="text-blue-400 font-bold text-xl">
                  quick.li/{link.id}
                </span>
                <span className="text-sm text-slate-500 truncate max-w-[200px] sm:max-w-md">
                  {link.url}
                </span>
              </div>
              
              <div className="text-right">
                <span className="block text-2xl font-mono font-bold text-slate-300">
                  {link.cliques}
                </span>
                <span className="text-[10px] text-slate-500 font-bold uppercase">
                  Cliques
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App