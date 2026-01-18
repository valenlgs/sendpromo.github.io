import React, { useState, useEffect } from 'react';
import { User, LogIn, Send, Music, Info, CheckCircle, Loader2, Mail, ExternalLink, LogOut, Globe, Headphones } from 'lucide-react';
import { PromoData, ValidationErrors } from './types';
import { DJ_DATABASE, INITIAL_PROMO_DATA } from './constants';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [promoData, setPromoData] = useState<PromoData>(INITIAL_PROMO_DATA);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginStep, setLoginStep] = useState<'prompt' | 'loading' | 'success'>('prompt');

  const handleInputChange = (field: keyof PromoData, value: string) => {
    setPromoData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  const triggerLogin = () => {
    setShowLoginModal(true);
    setLoginStep('prompt');
  };

  const handleSimulatedAuth = async () => {
    setLoginStep('loading');
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoginStep('success');
    await new Promise(resolve => setTimeout(resolve, 800));
    setIsLoggedIn(true);
    setUserEmail("producer.studio@gmail.com");
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail(null);
    setPromoData(INITIAL_PROMO_DATA);
    setLogs([]);
  };

  const validate = (): boolean => {
    const newErrors: ValidationErrors = {};
    const requiredFields: (keyof PromoData)[] = ['artistNames', 'trackName', 'mixType', 'genres', 'trackLink'];
    
    requiredFields.forEach(field => {
      if (!promoData[field as keyof PromoData]?.trim()) {
        newErrors[field as keyof PromoData] = true;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSend = async () => {
    if (!validate()) return;

    setIsSending(true);
    setLogs([
      `Initiating session via ${userEmail}...`,
      "Verifying Google API permissions...",
      "Gmail connection established.",
      `Accessing SendPromo database (${DJ_DATABASE.length} entries)...`,
      "Formatting email content..."
    ]);
    
    // Simulate real-time dispatch log
    for (let i = 0; i < DJ_DATABASE.length; i++) {
      const dj = DJ_DATABASE[i];
      await new Promise(resolve => setTimeout(resolve, 700));
      setLogs(prev => [...prev, `[SENT] ${promoData.trackName} to ${dj.name} (${dj.email})`]);
    }

    await new Promise(resolve => setTimeout(resolve, 800));
    setLogs(prev => [...prev, "All promos dispatched successfully."]);
    
    setIsSending(false);
    setShowSuccess(true);
    
    setTimeout(() => {
      setShowSuccess(false);
      setPromoData(INITIAL_PROMO_DATA);
      setLogs([]);
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5] selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">
              <Send className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase">Send<span className="text-blue-500">Promo</span></span>
          </div>
          
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                <div className="hidden sm:block text-right">
                  <p className="text-[10px] text-gray-500 font-bold uppercase leading-none">Signed in as</p>
                  <p className="text-xs font-medium text-white">{userEmail}</p>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-xs font-bold ring-2 ring-white/10">
                  {userEmail?.[0].toUpperCase()}
                </div>
                <button onClick={handleLogout} className="p-1 hover:text-red-400 transition-colors">
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button 
                onClick={triggerLogin}
                className="bg-white text-black text-sm font-bold px-6 py-2 rounded-full hover:bg-gray-200 transition-all flex items-center gap-2"
              >
                <LogIn className="w-4 h-4" /> Connect Account
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-20 pb-12 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-4 text-white">
          The Direct Line to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Global DJs</span>
        </h1>
        <p className="text-xl text-gray-400 font-light italic leading-relaxed">
          “Send your promos to the best DJs, producers and radio shows around the world.”
        </p>
      </header>

      {/* Main Form Portal */}
      <main className="max-w-6xl mx-auto px-6 pb-24 relative">
        {!isLoggedIn && (
          <div className="absolute inset-0 z-30 flex items-center justify-center px-4">
            <div className="text-center p-12 bg-[#0f0f0f] rounded-3xl shadow-2xl border border-white/5 max-w-lg w-full transform hover:scale-[1.01] transition-transform duration-500">
              <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <LogIn className="w-10 h-10 text-blue-500" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Unlock the Platform</h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Connect your Google account to access our professional distribution engine. All promos are sent via your personal account for maximum deliverability.
              </p>
              <button 
                onClick={triggerLogin}
                className="w-full flex items-center justify-center gap-4 bg-white text-black font-black py-5 rounded-2xl hover:bg-gray-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] group"
              >
                <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" className="w-6 h-6" alt="G" />
                Link Google Account
              </button>
            </div>
          </div>
        )}

        <div className={`windows-glass p-8 md:p-12 rounded-[2rem] transition-all duration-700 ${!isLoggedIn ? 'opacity-10 pointer-events-none blur-2xl' : 'opacity-100 scale-100'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Track Details */}
            <div className="space-y-8">
              <SectionHeader icon={Headphones} title="Track Information" />
              <div className="space-y-5">
                <InputField 
                  label="Artist name(s)" 
                  placeholder="Artist name(s)" 
                  value={promoData.artistNames} 
                  onChange={(v) => handleInputChange('artistNames', v)} 
                  error={errors.artistNames} 
                  required 
                />
                <InputField 
                  label="Track name" 
                  placeholder="Track name" 
                  value={promoData.trackName} 
                  onChange={(v) => handleInputChange('trackName', v)} 
                  error={errors.trackName} 
                  required 
                />
                <div className="grid grid-cols-2 gap-4">
                  <InputField label="Mix type" placeholder="Mix type" value={promoData.mixType} onChange={(v) => handleInputChange('mixType', v)} error={errors.mixType} required />
                  <InputField label="Genre(s)" placeholder="Genre(s)" value={promoData.genres} onChange={(v) => handleInputChange('genres', v)} error={errors.genres} required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <InputField label="BPM (Optional)" placeholder="BPM" value={promoData.bpm} onChange={(v) => handleInputChange('bpm', v)} />
                  <InputField label="Copy and paste link" placeholder="Soundcloud/Dropbox/Drive link" value={promoData.trackLink} onChange={(v) => handleInputChange('trackLink', v)} error={errors.trackLink} required />
                </div>
                <div>
                  <label className="block text-[11px] font-black uppercase text-gray-500 mb-2 tracking-widest">Tell me more about your track (Optional)</label>
                  <textarea 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-sm h-40 focus:outline-none focus:border-blue-500 transition-all resize-none placeholder:text-gray-700"
                    placeholder="Provide background info, label details, or supporting artist quotes..."
                    value={promoData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Artist & Logs */}
            <div className="flex flex-col">
              <SectionHeader icon={User} title="Artist Information" />
              <div className="space-y-5 flex-grow">
                <InputField label="Personal name (Optional)" placeholder="Personal name" value={promoData.personalName} onChange={(v) => handleInputChange('personalName', v)} />
                <InputField label="Country / City (Optional)" placeholder="Country/City" value={promoData.location} onChange={(v) => handleInputChange('location', v)} />
                
                <div className="bg-blue-600/5 border border-blue-500/10 p-6 rounded-3xl mt-8">
                  <div className="flex gap-4">
                    <Info className="w-6 h-6 text-blue-400 shrink-0" />
                    <p className="text-xs text-blue-200/60 leading-relaxed italic">
                      Warning: These promos are sent directly via your linked Gmail. Ensure your track links are public and active before sending. SendPromo does not store your track files.
                    </p>
                  </div>
                </div>

                {/* Dispatch Console */}
                <div className="mt-8">
                  <label className="block text-[11px] font-black uppercase text-gray-500 mb-2 tracking-widest">Live Dispatch Monitor</label>
                  <div className="bg-black/80 border border-white/5 rounded-2xl p-5 h-56 overflow-y-auto font-mono text-[10px] space-y-2 custom-scrollbar shadow-inner">
                    {logs.length === 0 ? (
                      <div className="text-gray-700 flex items-center gap-2">
                        <span className="animate-pulse">_</span> Ready for deployment...
                      </div>
                    ) : (
                      logs.map((log, i) => (
                        <div key={i} className="flex gap-3 animate-in fade-in slide-in-from-bottom-1 duration-200">
                          <span className="text-blue-500/40 shrink-0">[{new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit', second:'2-digit'})}]</span>
                          <span className={log.includes('[SENT]') ? 'text-green-400' : 'text-gray-400'}>{log}</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* Action Section */}
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center">
                {showSuccess ? (
                  <div className="flex flex-col items-center gap-4 text-center animate-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-12 h-12 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-white uppercase tracking-tighter">Campaign Sent</h4>
                      <p className="text-gray-500 text-sm">Dispatched to {DJ_DATABASE.length} industry professionals.</p>
                    </div>
                  </div>
                ) : (
                  <button 
                    onClick={handleSend}
                    disabled={isSending}
                    className={`group relative flex items-center justify-center gap-4 w-full py-5 rounded-2xl text-xl font-black uppercase tracking-tighter transition-all transform active:scale-[0.98] ${
                      isSending 
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)]'
                    }`}
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        Processing Blast...
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        Send track
                      </>
                    )}
                  </button>
                )}
                
                <p className="mt-10 text-gray-500 text-sm text-center">
                  Are you a DJ?{' '}
                  <a href="#" className="text-blue-400 hover:text-blue-300 font-bold inline-flex items-center gap-1 transition-colors group">
                    Click here if you want to receive the best music.
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-gray-600 text-[10px] font-bold uppercase tracking-[0.3em]">
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div>&copy; {new Date().getFullYear()} SendPromo Global // Artist Empowerment Portal</div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><Globe className="w-3 h-3" /> Global CDN Active</span>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white rounded-[2rem] w-full max-w-md overflow-hidden shadow-2xl animate-in zoom-in duration-300">
            <div className="p-12 text-center">
              <img src="https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" className="h-8 mx-auto mb-10" alt="Google" />
              
              {loginStep === 'prompt' && (
                <div className="space-y-8">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Sign in</h3>
                    <p className="text-gray-500">to continue to SendPromo portal</p>
                  </div>
                  
                  <div className="space-y-4">
                    <button 
                      onClick={handleSimulatedAuth}
                      className="w-full flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-left group"
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold group-hover:bg-blue-200 transition-colors">
                        P
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">producer.studio@gmail.com</p>
                        <p className="text-xs text-gray-500">Linked to Artist Profile</p>
                      </div>
                    </button>
                    <button className="w-full p-4 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors text-left flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                        <User className="w-5 h-5" />
                      </div>
                      Use another account
                    </button>
                  </div>
                </div>
              )}

              {loginStep === 'loading' && (
                <div className="py-12 flex flex-col items-center">
                  <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-6" />
                  <p className="text-gray-600 font-medium">Authorizing secure connection...</p>
                </div>
              )}

              {loginStep === 'success' && (
                <div className="py-12 flex flex-col items-center text-green-600 animate-in fade-in">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <p className="text-xl font-bold">Access Granted</p>
                  <p className="text-sm text-gray-500 mt-2">Redirecting to dashboard...</p>
                </div>
              )}

              <div className="mt-12 text-[10px] text-gray-400 leading-relaxed uppercase tracking-wider font-bold">
                Secure OAuth2 connection protected by Google.
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .windows-glass {
          background: rgba(15, 15, 15, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, title }: { icon: any, title: string }) => (
  <div className="flex items-center gap-4 mb-2">
    <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
      <Icon className="w-5 h-5 text-blue-500" />
    </div>
    <h3 className="text-2xl font-black uppercase tracking-tight text-white">{title}</h3>
  </div>
);

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  error?: boolean;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, value, onChange, error, required }) => (
  <div className="group">
    <label className={`block text-[11px] font-black uppercase mb-2 ml-1 tracking-widest transition-colors ${error ? 'text-red-500' : 'text-gray-500 group-focus-within:text-blue-500'}`}>
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input 
      type="text"
      placeholder={placeholder}
      className={`w-full bg-white/[0.03] border rounded-2xl p-4 text-sm transition-all outline-none focus:ring-1 focus:ring-blue-500/50 ${
        error 
        ? 'border-red-500 bg-red-500/5 placeholder:text-red-400/30' 
        : 'border-white/10 focus:border-blue-500 focus:bg-white/[0.05] placeholder:text-gray-700 text-white'
      }`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default App;
