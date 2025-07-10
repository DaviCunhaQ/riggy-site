import {
  Download,
  Github,
  ArrowRight,
  Zap,
  BarChart3,
  Shield,
  Menu,
  X,
} from "lucide-react";
import Button from "./components/button";
import { useEffect, useRef, useState } from "react";

export function useInViewAnimation<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // só anima uma vez
        }
      },
      {
        threshold: 0.1, // 10% visível já ativa
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

export default function RiggyLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const step1Animation = useInViewAnimation<HTMLDivElement>();
  const step2Animation = useInViewAnimation<HTMLDivElement>();
  const step3Animation = useInViewAnimation<HTMLDivElement>();
  const step4Animation = useInViewAnimation<HTMLDivElement>();
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 relative">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">Riggy</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#download"
                className="hover:text-orange-500 transition-colors"
              >
                Download
              </a>
              <a
                href="#tutorial"
                className="hover:text-orange-500 transition-colors"
              >
                Tutorial
              </a>
              <a
                href="#about"
                className="hover:text-orange-500 transition-colors"
              >
                Sobre
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>

          {/* Mobile Menu */}
          <div
            className={`md:hidden absolute top-full left-0 right-0 bg-black border-b border-gray-800 z-50 transition-all duration-500 ease-out ${
              isMenuOpen
                ? "opacity-100 max-h-96"
                : "opacity-0 max-h-0 overflow-hidden"
            }`}
          >
            <div className="flex flex-col space-y-4 p-4">
              <a
                href="#download"
                className="hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Download
              </a>
              <a
                href="#tutorial"
                className="hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tutorial
              </a>
              <a
                href="#about"
                className="hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-[url('/bg1.png')] bg-center bg-cover bg-no-repeat">
        <div className="container mx-auto px-4 text-center">
          <div className="w-full flex justify-center items-center mb-6">
            <img
              src="/riggy-logo.jpeg"
              alt="Riggy Logo"
              className="w-[120px] h-[120px] rounded-lg"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-orange-500">Riggy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Sistema avançado de análise estrutural via sensores. Monitore,
            analise e otimize suas estruturas com precisão em tempo real.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="default">
              <Download className="w-5 h-5" />
              Baixar Riggy
            </Button>
            <Button variant="outline">
              Ver Tutorial
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Análise em Tempo Real
              </h3>
              <p className="text-gray-400">
                Monitore suas estruturas continuamente com dados precisos dos
                sensores.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Segurança Estrutural
              </h3>
              <p className="text-gray-400">
                Detecte anomalias e previna falhas antes que se tornem críticas.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Interface Intuitiva
              </h3>
              <p className="text-gray-400">
                Design moderno e fácil de usar para análises complexas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section
        id="download"
        className="py-20 bg-[url('/bg2.png')] bg-center bg-cover bg-no-repeat"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Baixe o <span className="text-orange-500">Riggy</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Comece a monitorar suas estruturas hoje mesmo. O Riggy trabalha em
            conjunto com o Sensagram para fornecer análises precisas e
            confiáveis.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              variant="default"
              className="py-6 px-12 text-lg font-bold w-full sm:w-auto gap-2 flex justify-center"
            >
              <Download className="w-6 h-6" />
              Download Riggy v1.0
              <img src="/windows.svg" alt="" className="h-5 w-5 ml-2" />
            </Button>

            <a
              href="https://github.com/umer0586/SensaGram"
              target="_blank"
              className="border-2 border-gray-600 hover:border-orange-500 text-white hover:text-orange-500 py-6 px-12 rounded-lg font-bold text-lg transition-colors flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Github className="w-6 h-6" />
              Sensagram no GitHub
            </a>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-3 text-orange-500">
              Sobre o Sensagram
            </h3>
            <p className="text-gray-300 text-left">
              O <strong>Sensagram</strong> é o aplicativo responsável por
              capturar e enviar os dados dos sensores para o computador. É uma
              ferramenta essencial que trabalha em conjunto com o Riggy para
              fornecer análises estruturais precisas. Agradecemos aos
              desenvolvedores do Sensagram por tornarem este projeto possível.
            </p>
          </div>
        </div>
      </section>

      {/* Tutorial Section */}
      <section id="tutorial" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Como usar o <span className="text-orange-500">Riggy</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <div className="bg-orange-500 text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    1
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Instalação e Configuração
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Baixe e instale o Riggy em seu computador. Execute o
                    instalador e siga as instruções na tela. Certifique-se de
                    que o Sensagram esteja configurado e conectado aos sensores.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div
                    ref={step1Animation.ref}
                    className={`bg-gray-800 rounded-lg p-8 border border-gray-700 transition-opacity duration-700 ${
                      step1Animation.isVisible ? "animate-slide-in-top-right" : "opacity-0"
                    }`}
                  >
                    <img
                      src="/placeholder.svg?height=200&width=300"
                      alt="Tela de instalação do Riggy"
                      width={300}
                      height={200}
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2">
                  <div className="bg-orange-500 text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    2
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Conexão com Sensores
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Conecte seus sensores através do Sensagram. O Riggy
                    detectará automaticamente os dispositivos conectados e
                    começará a receber dados em tempo real.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div
                    ref={step2Animation.ref}
                    className={`bg-gray-800 rounded-lg p-8 border border-gray-700 transition-opacity duration-700 ${
                      step2Animation.isVisible ? "animate-slide-in-top-left" : "opacity-0"
                    }`}
                  >
                    <img
                      src="/placeholder.svg?height=200&width=300"
                      alt="Interface de conexão de sensores"
                      width={300}
                      height={200}
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <div className="bg-orange-500 text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    3
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Análise e Monitoramento
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Visualize os dados em tempo real através dos gráficos e
                    dashboards intuitivos. Configure alertas para anomalias e
                    monitore a saúde estrutural continuamente.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div
                    ref={step3Animation.ref}
                    className={`bg-gray-800 rounded-lg p-8 border border-gray-700 transition-opacity duration-700 ${
                      step3Animation.isVisible ? "animate-slide-in-top-right" : "opacity-0"
                    }`}
                  >
                    <img
                      src="/placeholder.svg?height=200&width=300"
                      alt="Dashboard de análise do Riggy"
                      width={300}
                      height={200}
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2">
                  <div className="bg-orange-500 text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    4
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Relatórios e Exportação
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Gere relatórios detalhados das análises estruturais. Exporte
                    dados em diversos formatos para documentação e
                    compartilhamento com sua equipe.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div
                    ref={step4Animation.ref}
                    className={`bg-gray-800 rounded-lg p-8 border border-gray-700 transition-opacity duration-700 ${
                      step4Animation.isVisible ? "animate-slide-in-top-left" : "opacity-0"
                    }`}
                  >
                    <img
                      src="/placeholder.svg?height=200&width=300"
                      alt="Tela de relatórios do Riggy"
                      width={300}
                      height={200}
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-[url('/bg3.png')] bg-center bg-cover bg-no-repeat"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Sobre o <span className="text-orange-500">Riggy</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 mb-8">
              O Riggy é uma solução completa para análise estrutural via
              sensores, desenvolvido para engenheiros e profissionais que
              precisam de monitoramento preciso e confiável de estruturas
              críticas.
            </p>
            <p className="text-lg text-gray-400">
              Trabalhando em conjunto com o Sensagram, oferecemos uma plataforma
              integrada que transforma dados de sensores em insights acionáveis
              para manter suas estruturas seguras e otimizadas.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img
                src="/riggy-logo.jpeg"
                alt="Riggy Logo"
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-xl font-bold">Riggy</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>© 2024 Riggy. Sistema de análise estrutural via sensores.</p>
              <p className="text-sm mt-1">
                Desenvolvido em parceria com{" "}
                <a
                  href="https://github.com/umer0586/SensaGram"
                  className="text-orange-500 hover:underline"
                >
                  Sensagram
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
