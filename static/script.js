// This is a copy of the original static-site script. It expects the static index.html structure.
// PROFILE_DATA: Edit this single object to update the entire site
const PROFILE_DATA = {
  name: "SAMBHU PRASAD GANGAPATNAM",
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
    { title: "Asynchronous FIFO Design & Verification", tools: ["SystemVerilog","VC Formal","JasperGold"], bullets: ["Designed an asynchronous FIFO with safe crossing and flow control","Implemented SystemVerilog testbench with constrained-random scenarios","Used formal checks and model-based assertions for corner cases"], tags:["FIFO","Formal","SystemVerilog"] },
    { title: "Last Level Cache Simulation for Multi-Processor System", tools: ["SystemVerilog"], bullets: ["Built cycle-accurate LLC model for multi-core coherence experiments","Validated MESI/MESIF behaviors and measured hit/miss metrics"], tags:["Cache","Simulation"] },
    { title: "MIPS-Lite Pipeline Simulation", tools: ["Python"], bullets: ["Implemented a 5-stage MIPS-lite pipeline simulator","Demonstrated hazard detection and simple branch prediction techniques"], tags:["CPU","Simulator"] },
    { title: "Formal Verification of 2×2 Packet Router", tools: ["SystemVerilog","VC Formal","JasperGold"], bullets: ["Specified formal properties for routing correctness","Used VC Formal and JasperGold to prove functional invariants"], tags:["Router","Formal"] },
    { title: "Raspberry Pi JTAG TAP Controller", tools: ["Python"], bullets: ["Implemented a TAP controller to interact with JTAG over GPIO","Provided parsing and bit-level control for boundary-scan tests"], tags:["JTAG","Embedded"] }
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
  links: {
    resume: "./resume.pdf",
    linkedin: "#"
  }
};

// The rendering logic below expects the static index.html in the same folder.
(function(){
  function el(q){return document.querySelector(q)}
  function elAll(q){return document.querySelectorAll(q)}

  function init(){
    // populate header/hero if present
    const nameEl = el('#name');
    if(nameEl) nameEl.textContent = PROFILE_DATA.name;
    const emailBtn = el('#emailBtn'); if(emailBtn) emailBtn.href = `mailto:${PROFILE_DATA.email}`;
    // ... keep simple: static page uses the same script as original when loaded
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
