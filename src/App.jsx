import React, {useState, useEffect} from 'react'
import PROFILE_DATA from './profile'

function Tag({children}){return <span className="tag">{children}</span>}
function Chip({children}){return <div className="chip">{children}</div>}

function Modal({open, title, body, onClose}){
  if(!open) return null
  return (
    <div className="modal" onClick={(e)=>{if(e.target.className==='modal') onClose()}}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>✕</button>
        <h3>{title}</h3>
        <div>{body}</div>
      </div>
    </div>
  )
}

export default function App(){
  const P = PROFILE_DATA
  const firstName = P.name.split(' ')[0] || P.name
  const brand = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase()
  const displayName = P.name.split(' ').map(w=> w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ')
  const initials = P.name.split(' ').map(n=>n[0]).slice(0,2).join('')
  const [imgOk, setImgOk] = useState(!!P.avatar)
  const [theme, setTheme] = useState(localStorage.getItem('theme')||'dark')
  const [navOpen, setNavOpen] = useState(false)
  const [modal, setModal] = useState({open:false,title:'',body:''})

  useEffect(()=>{document.documentElement.className = theme==='light' ? 'light' : '' ; localStorage.setItem('theme', theme)},[theme])

  return (
    <div>
      <header className="nav-wrap">
        <nav className="nav container">
          <button className="nav-toggle menu" onClick={()=>setNavOpen(o=>!o)} aria-label="Toggle menu">≡</button>
          <ul className={`nav-links ${navOpen? 'open':''}`}>
            <li><a href="#hero" onClick={()=>setNavOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={()=>setNavOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={()=>setNavOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={()=>setNavOpen(false)}>Projects</a></li>
            <li><a href="#publications" onClick={()=>setNavOpen(false)}>Publications</a></li>
            <li><a href="#blog" onClick={()=>setNavOpen(false)}>Blog</a></li>
            <li><a href="#experience" onClick={()=>setNavOpen(false)}>Experience</a></li>
            <li><a href="#education" onClick={()=>setNavOpen(false)}>Education</a></li>
            <li><a href="#contact" onClick={()=>setNavOpen(false)}>Contact</a></li>
            
          </ul>
          <button
            className={`nav-toggle theme ${theme==='light' ? 'is-light' : ''}`}
            onClick={()=>setTheme(t=> t==='light'? 'dark':'light')}
            aria-pressed={theme==='light'}
            aria-label={theme==='light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme==='light' ? (
              <svg className="icon" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true"><path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.8 1.8-1.8zM1 13h3v-2H1v2zm10 9h2v-3h-2v3zm7.04-17.2l1.79-1.8-1.79-1.79-1.8 1.8 1.8 1.79zM17 13v-2h6v2h-6zM6.76 19.16l-1.8 1.79 1.8 1.79 1.79-1.79-1.79-1.79zM12 6a6 6 0 100 12 6 6 0 000-12zM17.24 4.84l1.8-1.8L17.24 1.25l-1.8 1.79 1.8 1.8z"/></svg>
            ) : (
              <svg className="icon" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true"><path d="M21.64 13a9 9 0 11-9.14-9.64 7 7 0 009.14 9.64z"/></svg>
            )}
          </button>
        </nav>
      </header>

      <main className="container">
        <section id="hero" className="hero">
          <div className="hero-left">
            <div className="hero-head">
              {P.avatar && imgOk ? (
                <img className="profile-img" src={P.avatar} alt={`${P.name} avatar`} onError={(e)=>{setImgOk(false); e.target.style.display='none'}} onLoad={()=>setImgOk(true)} />
              ) : (
                <div className="avatar initials-inline">{initials}</div>
              )}
              <div>
                <h1>{displayName}</h1>
                <p className="subtitle">Design Verification & Validation Intern — {P.location}</p>
                <p className="objective">{P.objective}</p>
              </div>
            </div>
            <div className="hero-ctas">
              <a className="btn ghost" href={`mailto:${P.email}`}>Email</a>
              <a className="btn ghost" href={P.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn ghost github-btn" href={P.links.github} target="_blank" rel="noreferrer">
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.38-3.88-1.38-.53-1.35-1.29-1.71-1.29-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.26 3.38.96.11-.75.41-1.26.75-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.18-1.18 3.18-1.18.64 1.58.24 2.75.12 3.04.74.8 1.19 1.82 1.19 3.08 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.08.79 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56C20.71 21.41 24 17.09 24 12c0-6.35-5.15-11.5-12-11.5z"/></svg>
                <span className="btn-text">GitHub</span>
              </a>
              <a className="btn ghost" href={P.links.resume} download>Download Resume</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="quick-stats" style={{padding:12}}>
              <div>{P.location}</div>
              <div style={{marginTop:6}}>Seeking internships — Verification</div>
            </div>
          </div>
        </section>

        <section id="certifications" className="section">
          <h2>Certifications</h2>
          {P.certifications && P.certifications.length ? (
            <div className="cards">
              {P.certifications.map((c,i)=> (
                <div className="card" key={i} style={{['--delay']: `${i*60}ms`}}>
                  <h3>{c.title}</h3>
                  <div style={{color:'var(--muted)',fontSize:13}}>{c.issuer} — {c.date}</div>
                  {c.link ? <div style={{marginTop:10}}><a className="btn ghost" href={c.link} target="_blank" rel="noreferrer">View</a></div> : null}
                </div>
              ))}
            </div>
          ) : (
            <p style={{color:'var(--muted)'}}>No certifications listed</p>
          )}
        </section>

        <section id="about" className="section">
          <h2>About</h2>
          <p>I am a verification-focused engineer studying ECE with practical experience in functional and formal verification, RTL design, and verification infrastructure.</p>
          <ul className="focus-list">
            <li>Design Verification</li>
            <li>Formal & Functional Verification</li>
            <li>RTL development & simulation</li>
          </ul>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="chips">
            {Object.entries(P.skills).flatMap(([k,arr])=>arr.map(x=> <Chip key={k+x}>{x}</Chip>))}
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="cards">
            {P.projects.map((p, i)=> {
              const initials = p.title.split(' ').map(w=>w[0]).slice(0,2).join('');
              return (
                <div className="card" key={p.title} style={{['--delay']: `${i*90}ms`}}>
                    <div className="thumb">
                      {p.thumbnail ? <img src={p.thumbnail} alt={p.title} style={{width:'100%',height:'100%',borderRadius:8,objectFit:'cover'}}/> : initials}
                    </div>
                  <h3>{p.title}</h3>
                  <div className="meta">{p.tools.join(' • ')}</div>
                  <ul>{p.bullets.map(b=><li key={b}>{b}</li>)}</ul>
                  <div className="tags">{p.tags.map(t=> <Tag key={t}>{t}</Tag>)}</div>
                </div>
              )
            })}
          </div>
        </section>

        <section id="publications" className="section">
          <h2>Publications</h2>
          {P.publications && P.publications.length ? (
            P.publications.map((pu,i)=> <div className="card" key={i}>{pu.title}</div>)
          ) : (
            <p style={{color:'var(--muted)'}}>Coming soon</p>
          )}
        </section>

        <section id="blog" className="section">
          <h2>Blog</h2>
          <div className="cards">
            {P.blog.map(post=> (
              <div className="card" key={post.id}>
                <h3>{post.title}</h3>
                <p style={{color:'var(--muted)'}}>{post.excerpt}</p>
                <a className="btn ghost" href="#" onClick={(e)=>{e.preventDefault(); setModal({open:true,title:post.title,body:post.content})}}>Read</a>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <h2>Experience</h2>
          {P.experience.map((ex,i)=> (
            <div className="experience-item" key={i}>
              <strong>{ex.role} — {ex.company}</strong>
              <div style={{color:'var(--muted)',fontSize:13}}>{ex.date}</div>
              <ul>{ex.bullets.map(b=> <li key={b}>{b}</li>)}</ul>
            </div>
          ))}
        </section>

        <section id="education" className="section">
          <h2>Education</h2>
          {P.education.map((ed,i)=> (
            <div className="edu-item" key={i}>
              <strong>{ed.degree} — {ed.school}</strong>
              <div style={{color:'var(--muted)',fontSize:13}}>{ed.date} · GPA: {ed.gpa}</div>
            </div>
          ))}
        </section>

        <section id="contact" className="section contact">
          <h2>Contact</h2>
          <p>Email: <a href={`mailto:${P.email}`}>{P.email}</a></p>
          <p>LinkedIn: <a href={P.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p>
          <p>GitHub: <a className="contact-link" href={P.links.github} target="_blank" rel="noreferrer"><svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.38-3.88-1.38-.53-1.35-1.29-1.71-1.29-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.26 3.38.96.11-.75.41-1.26.75-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.18-1.18 3.18-1.18.64 1.58.24 2.75.12 3.04.74.8 1.19 1.82 1.19 3.08 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.08.79 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56C20.71 21.41 24 17.09 24 12c0-6.35-5.15-11.5-12-11.5z"/></svg> <span>GitHub</span></a></p>
        </section>
      </main>

      <footer className="footer">
        <div className="container">© {P.name.split(' ')[0]} — Built for Design Verification roles</div>
      </footer>

      <Modal open={modal.open} title={modal.title} body={modal.body} onClose={()=>setModal({open:false})} />
    </div>
  )
}
