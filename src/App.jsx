import { useState, useEffect } from 'react'

function App() {
  const [links, setLinks] = useState(() => {
    const salvos = localStorage.getItem('quicklinks_db');
    return salvos ? JSON.parse(salvos) : [];
  });
  
  const [urlOriginal, setUrlOriginal] = useState('');
  const [copiadoId, setCopiadoId] = useState(null);

  useEffect(() => {
    localStorage.setItem('quicklinks_db', JSON.stringify(links));
  }, [links]);

  const handleEncurtar = () => {
    if (!urlOriginal) return;

    const novoLink = {
      id: Math.random().toString(36).substr(2, 5),
      url: urlOriginal,
      cliques: 0
    };

    setLinks([novoLink, ...links]);
    setUrlOriginal(''); 
  };

  const copiarLink = (id) => {
    const linkCompleto = `quick.li/${id}`;
    navigator.clipboard.writeText(linkCompleto);
    setCopiadoId(id);
    setTimeout(() => setCopiadoId(null), 2000); 
  };

  const registrarClique = (id) => {
    setLinks(links.map(link => 
      link.id === id ? { ...link, cliques: link.cliques + 1 } : link
    ));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 flex flex-col items-center pt-20 font-sans">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-black text-center mb-8 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          QuickLinks
        </h1>

        {}
        <div className="bg-slate-800 p-2 rounded-xl flex gap-2 border border-slate-700 shadow-xl mb-10">
          <input 
            type="url" 
            placeholder="Cole sua URL original..." 
            className="flex-1 bg-transparent p-3 outline-none text-sm"
            value={urlOriginal}
            onChange={(e) => setUrlOriginal(e.target.value)}
          />
          <button 
            onClick={handleEncurtar}
            className="bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-lg font-bold text-sm transition-all"
          >
            Encurtar
          </button>
        </div>

        {}
        <div className="space-y-4">
          {links.map(link => (
            <div key={link.id} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex justify-between items-center">
              <div className="flex flex-col">
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noreferrer"
                  onClick={() => registrarClique(link.id)}
                  className="text-blue-400 font-bold hover:underline"
                >
                  quick.li/{link.id}
                </a>
                <span className="text-[10px] text-slate-500 truncate max-w-[150px]">{link.url}</span>
              </div>
              
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => copiarLink(link.id)}
                  className={`text-[10px] font-bold px-3 py-1.5 rounded-md transition-all ${
                    copiadoId === link.id ? 'bg-green-600' : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                >
                  {copiadoId === link.id ? 'Copiado!' : 'Copiar'}
                </button>
                
                <div className="text-center">
                  <span className="block text-lg font-bold leading-none">{link.cliques}</span>
                  <span className="text-[8px] text-slate-500 uppercase">Cliques</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App