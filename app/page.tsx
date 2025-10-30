import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${inter.className} min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100`}>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            AI Interview Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionize your interview preparation with AI-powered mock interviews,
            real-time feedback, and personalized coaching.
          </p>
          <div className="mt-8">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              🚧 Fall 2025 Project - Active Development
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-4">AI-Powered Evaluation</h3>
            <p className="text-gray-600">
              Advanced AI models provide accurate, real-time feedback on your interview performance.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🎥</div>
            <h3 className="text-xl font-semibold mb-4">Video Interviews</h3>
            <p className="text-gray-600">
              Experience authentic interview scenarios with WebRTC-powered video and audio.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-4">Analytics Dashboard</h3>
            <p className="text-gray-600">
              Track your progress with detailed reports and performance analytics.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://interviewmock.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
          >
            Try Live Prototype
          </a>
        </div>
      </div>
    </main>
  )
}