
import React from 'react';



const projects = [
  {
    id: 1,
    title: 'Personal Blog',
    desc: 'A responsive blog built with Markdown support and dark mode.',
    tech: ['React', 'Tailwind', 'Vite'],
    link: '#',
    img: '/src/assets/1.webp'
  },
  {
    id: 2,
    title: 'E‑commerce UI',
    desc: 'Product listing, cart preview and checkout UI prototype.',
    tech: ['React', 'Context API', 'Tailwind'],
    link: '#',
    img: '/src/assets/2.webp'
  },
  {
    id: 3,
    title: 'Dashboard',
    desc: 'Admin dashboard with charts and filters (demo data).',
    tech: ['React', 'Recharts', 'Tailwind'],
    link: '#',
    img: '/src/assets/3.jpg'
  },
  {
    id: 4,
    title: 'Dashboard',
    desc: 'Admin dashboard with charts and filters (demo data).',
    tech: ['React', 'Recharts', 'Tailwind'],
    link: '#',
    img: '/src/assets/3.jpg'
  }
];


const mySkill = [
     { 
        name: 'HTML & CSS', 
        level: 90 
    },
    {
        name: 'React', 
        level: 85
    },
    {
        name: 'JavaScript',
        level: 90
    },
    {
        name: 'Tailwind CSS',
        level: 88
    }
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      { /* NAV */ }
      <header className="bg-white/60 backdrop-blur-md sticky top-0 z-20 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-md flex items-center justify-center text-white font-bold">A</div>
            <div>
              <h1 className="text-lg font-semibold">Md Akbar Hossain</h1>
              <p className="text-xs text-gray-500">Frontend Developer</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#skills" className="hover:text-indigo-600">Skills</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <a href="#" className="ml-2 inline-block px-3 py-1 rounded-md bg-indigo-600 text-white text-sm">Resume</a>
          </nav>
          <div className="md:hidden">
            <button aria-label="open menu" className="p-2 rounded-md border">☰</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Hi, I’m <span className="text-indigo-600">Md Akbar</span>.</h2>
          <p className="mt-4 text-lg text-gray-600">I build modern, responsive websites and web apps using React and Tailwind CSS. I care about clean code, great UX, and fast performance.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-block px-5 py-2 rounded-md bg-indigo-600 text-white">See projects</a>
            <a href="#contact" className="inline-block px-5 py-2 rounded-md border">Contact me</a>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="text-sm text-gray-500">Years Experience</div>
              <div className="text-2xl font-semibold">3+</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="text-sm text-gray-500">Projects</div>
              <div className="text-2xl font-semibold">12</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="text-sm text-gray-500">Clients</div>
              <div className="text-2xl font-semibold">5</div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-indigo-50 to-pink-50 flex items-center justify-center">
            <img src="https://source.unsplash.com/400x400/?developer,code" alt="profile" className="object-cover w-full h-full" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow p-6 md:p-10">
          <h3 className="text-2xl font-semibold">About me</h3>
          <p className="mt-4 text-gray-600">I’m a frontend developer specializing in React and Tailwind CSS. I enjoy turning ideas into beautiful, usable interfaces. When I’m not coding I’m learning new UI patterns or improving accessibility.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium">What I do</h4>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li>• Responsive UI development</li>
                <li>• Component-driven architecture</li>
                <li>• Accessibility & performance tuning</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Tools</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {['React','Tailwind','JavaScript','HTML','CSS','Git'].map(t => (
                  <span key={t} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-semibold mb-6">Selected projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.id} className="bg-white rounded-xl shadow overflow-hidden flex flex-col">
              <div className="h-40 md:h-32 lg:h-44 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transform hover:scale-105 transition" />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="mt-2 text-sm text-gray-600 flex-1">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-xs text-gray-500 flex gap-2">
                    {p.tech.map(t => <span key={t} className="px-2 py-1 bg-gray-100 rounded">{t}</span>)}
                  </div>
                  <a href={p.link} className="text-sm text-indigo-600">View</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {mySkill.map(s => (
            <div key={s.name} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div className="font-medium">{s.name}</div>
                <div className="text-sm text-gray-500">{s.level}%</div>
              </div>
              <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div style={{ width: `${s.level}%` }} className="h-full bg-indigo-600 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow p-6 md:p-10">
          <h3 className="text-2xl font-semibold">Get in touch</h3>
          <p className="mt-2 text-gray-600">Want to work together or just say hi? Send a message — I reply fast.</p>

          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => { e.preventDefault(); alert('Message sent (demo)'); }}>
            <input required placeholder="Your name" className="p-3 border rounded" />
            <input required type="email" placeholder="Email" className="p-3 border rounded" />
            <input placeholder="Subject" className="p-3 border rounded md:col-span-2" />
            <textarea required placeholder="Message" className="p-3 border rounded md:col-span-2 h-32" />
            <button type="submit" className="md:col-span-2 px-5 py-2 rounded bg-indigo-600 text-white">Send message</button>
          </form>
        </div>
      </section>

      <footer className="mt-12 py-8 border-t">
        <div className="max-w-5xl mx-auto px-4 text-center text-sm text-gray-500">© {new Date().getFullYear()} Md Akbar Hossain — Built with React & Tailwind.</div>
      </footer>
    </div>
  );
}
