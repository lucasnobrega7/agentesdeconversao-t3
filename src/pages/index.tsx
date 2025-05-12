import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Agentes de Conversão | T3 App</title>
        <meta name="description" content="Plataforma de agentes de conversão utilizando IA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container pt-16 pb-20">
          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-primary">Agentes</span> de Conversão
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Plataforma avançada de automação de conversão com inteligência artificial para maximizar seus resultados.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">Chatbots Inteligentes</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Assistentes virtuais que entendem o contexto e oferecem respostas personalizadas para seus clientes.
                </p>
                <Link href="#" className="btn inline-block">
                  Saiba mais
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">Automação de Email</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Sequências de emails personalizadas que aumentam as taxas de abertura, clique e conversão.
                </p>
                <Link href="#" className="btn inline-block">
                  Saiba mais
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">Análise de Dados</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Insights precisos com análise avançada de dados para otimizar suas estratégias de conversão.
                </p>
                <Link href="#" className="btn inline-block">
                  Saiba mais
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-8">Pronto para aumentar suas conversões?</h2>
            <Link href="#" className="btn text-lg px-8 py-3 inline-block">
              Começar agora
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container text-center">
          <p>© {new Date().getFullYear()} Agentes de Conversão. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
