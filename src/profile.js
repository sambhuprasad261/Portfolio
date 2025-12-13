function svgThumb(initials, c1 = '#4fd1c5', c2 = '#0ea5a4'){
  const svg = `
  <svg xmlns='http://www.w3.org/2000/svg' width='800' height='400'>
    <defs>
      <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
        <stop offset='0' stop-color='${c1}'/>
        <stop offset='1' stop-color='${c2}'/>
      </linearGradient>
    </defs>
    <rect width='100%' height='100%' rx='12' fill='url(#g)' opacity='0.95'/>
    <text x='50%' y='52%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, system-ui, Arial' font-size='96' fill='rgba(255,255,255,0.95)' font-weight='700'>${initials}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const PROFILE_DATA = {
  name: "SAMBHU PRASAD GANGAPATNAM",
  // Optional: set to '/images/avatar.jpg' (place your image in public/images/)
  avatar: '/images/avatar.jpg',
  phone: "+1 (503) 432 3783",
  email: "sambhuprasad2312@gmail.com",
  linkedin: "#",
  location: "Portland, OR",
  objective: "Seeking an internship in Design Verification and Validation.",
  education: [
    { degree: "M.S. Electrical and Computer Engineering", school: "Portland State University", gpa: "3.64", date: "Expected Dec 2026" },
    { degree: "B.S. Electronics and Communication Engineering", school: "SVU Tirupati, India", gpa: "3.70", date: "May 2023" }
  ],
  skills: {
    Languages: ["Verilog","SystemVerilog","C","Python","TCL"],
    Tools: ["Synopsys VCS","VC Formal","Design Compiler","QuestaSim","Cadence JasperGold"],
    Protocols: ["APB","AHB","AXI","UART","MESI/MESIF concepts"],
    Methodology: ["UVM","Functional Verification","Formal Verification"],
    OS: ["Linux","Windows"],
    Concepts: ["CDC","Gray code","coverage","constrained random","RTL design","FSM","debugging","cache coherency","pipelining","branch prediction","JTAG","STA"]
  },
  projects: [
    { title: "Asynchronous FIFO Design & Verification", thumbnail: svgThumb('AF'), tools: ["SystemVerilog","VC Formal","JasperGold"], bullets: ["Designed an asynchronous FIFO with safe crossing and flow control","Implemented SystemVerilog testbench with constrained-random scenarios","Used formal checks and model-based assertions for corner cases"], tags:["FIFO","Formal","SystemVerilog"] },
    { title: "Last Level Cache Simulation for Multi-Processor System", thumbnail: svgThumb('LL'), tools: ["SystemVerilog"], bullets: ["Built cycle-accurate LLC model for multi-core coherence experiments","Validated MESI/MESIF behaviors and measured hit/miss metrics"], tags:["Cache","Simulation"] },
    { title: "MIPS-Lite Pipeline Simulation", thumbnail: svgThumb('MP'), tools: ["Python"], bullets: ["Implemented a 5-stage MIPS-lite pipeline simulator","Demonstrated hazard detection and simple branch prediction techniques"], tags:["CPU","Simulator"] },
    { title: "Formal Verification of 2×2 Packet Router", thumbnail: svgThumb('PR'), tools: ["SystemVerilog","VC Formal","JasperGold"], bullets: ["Specified formal properties for routing correctness","Used VC Formal and JasperGold to prove functional invariants"], tags:["Router","Formal"] },
    { title: "Raspberry Pi JTAG TAP Controller", thumbnail: svgThumb('JT'), tools: ["Python"], bullets: ["Implemented a TAP controller to interact with JTAG over GPIO","Provided parsing and bit-level control for boundary-scan tests"], tags:["JTAG","Embedded"] }
  ],
  publications: [],
  blog: [
    { id:1, title: "How I verify an Asynchronous FIFO", date: "2024-06-01", excerpt: "Key strategies for verifying async FIFOs across clock domains.", content: "I walk through building a robust testbench for asynchronous FIFOs: RTL considerations, handshake protocols, SVA properties for data integrity across clock domains, and how to combine simulation with formal checks for corner cases." },
    { id:2, title: "APB Verification Checklist", date: "2024-04-15", excerpt: "A concise checklist to ensure APB blocks are well-covered.", content: "This post provides a practical APB verification checklist: basic protocol checks, bus timing, transaction ordering, reset behavior, and fuzzing tips for catching corner-case bugs." },
    { id:3, title: "Pipeline hazards explained (MIPS-lite)", date: "2024-02-20", excerpt: "Data and control hazards in simple pipelines, and mitigation techniques.", content: "I explain the common pipeline hazards — RAW, WAR, WAW — in a MIPS-lite pipeline, show examples that create stalls, and outline forwarding and hazard detection logic to keep pipelines correct and performant." }
  ],
  experience: [
    { role: "Hardware Engineer Intern", company: "Ekalavya Innovative Solutions Pvt. Ltd (India)", date: "Jan 2023 – Dec 2023", bullets: ["Developed APB UVM monitor and scoreboard","Authored SVA checks and managed regression runs","Wrote Python parsers for logs and drove coverage closure"] }
  ],
  certifications: [
    { title: "Formal Verification Basics", issuer: "Cadence Academy", date: "2024" , link: "#" },
    { title: "UVM Advanced", issuer: "Synopsys Training", date: "2023" , link: "#" }
  ],
  links: {
    resume: "./resume.pdf",
    linkedin: "#",
    github: "#"
  }
};

export default PROFILE_DATA;
