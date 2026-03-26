const cpuName = document.getElementById('cpu-name');
const cpuGithub = document.getElementById('cpu-github');
const cpuLicense = document.getElementById('cpu-license');
const cpuProductNumber = document.getElementById('cpu-product-number');
const cpuStatus = document.getElementById('cpu-status');
const cpuHardware = document.getElementById('cpu-hardware');
const cpuSummary = document.getElementById('cpu-summary');
const cpuInnovation = document.getElementById('cpu-innovation');
const cpuArchitectureInfo = document.getElementById('cpu-architecture-info');

const architectureInfo = {
    "pvcpu": `
<hr>
<h2>PVCpu (Phoenix Virtual CPU) Instruction Set Architecture</h2>
<h3>Category: MHSA (Modern Huge Simple Architecture)</h3>
<p>
    <b>The PVCpu Architecture defines a modular instruction set focused on extensibility and efficient decoding.</b>
</p>
<hr>
<ul>
    <li><b>PVCpu (Standard):</b> Fixed 32-bit width with 64/32-bit extensions.</li>
    <li><b>PVCpu-C (Compressed):</b> Optimized 16/32-bit format for density.</li>
</ul>

<p>
    <b>Standard Instruction Layout (PVCpu) -></b><br>
    <code>[ OPCODE: 12b ][ MODE: 4b ][ SRC: 6b ][ DEST: 6b ][ FLAGS: 4b ]</code>
</p>

<p>
    <b>Flag Bitmask Structure:</b><br>
    <ul>
    - <i>Bit 0:</i> Valid Instruction (Executable)<br>
    - <i>Bit 1:</i> Extension Present (Immediate / Absolute / Displacement)<br>
    - <i>Bit 2:</i> Extension Width (1 = 64-bit, 0 = 32-bit)<br>
    - <i>Bit 3:</i> Extended Flags Present (Chained flags enabled)
    </ul>
</p>
<hr>
<h3>Register Architecture</h3>
<p><b>Total Registers: 40 | Program-Accessible: 34</b></p>

<p>
    <b>General Purpose Registers:</b><br>
    <ul>
    - <b>G0 to G30:</b> Computation, addressing, and data movement.<br>
    - <b>NULL:</b> Constant zero.
    </ul>
</p>

<p>
    <b>Control and Stack Registers:</b><br>
    <ul>
    - <b>PC:</b> Program Counter (Internal)<br>
    - <b>LR:</b> Link Register (Return addresses)<br>
    - <b>SF:</b> Stack Frame Register<br>
    - <b>SP:</b> Stack Pointer
    </ul>
</p>

<p>
    <b>Internal and System Registers:</b><br>
    <ul>
    - <b>I0 - I2:</b> OS-reserved internal registers.<br>
    - <b>TR:</b> Timing Register (High-precision hardware delays/timers).
    </ul>
</p>
<hr>
<h3>PVCpu-C (Compressed Format)</h3>
<p>
    <b>Base Header:</b> <code>[ OPCODE: 12b ][ EXTENDER: 4b ]</code>
</p>

<p>
    <b>Key Benefits:</b><br>
    <ul>
    - Instructions shrink to 2 bytes for zero-operand operations.<br>
    - Variable register field sizes (1, 2, 4, or 6 bits).<br>
    - Lower memory bandwidth usage and higher instruction density.
    </ul>
</p>

<p>
    <small><i><b>NOTE:</b> PVCpu-C is an encoding variant and is not used for native execution within current Phoenix-CPU hardware implementations.</i></small>
</p>
<hr>
    `
};

const cpuData = {
    "unknown": {
        name: "Unknown",
        github: "#",
        license: "Unknown",
        productNumber: "Unknown",
        status:" Unknown",
        hardware: "Unknown",
        summary: "Unknown",
        innovation: "Unknown"
    },
    "arise-ember": {
        name: "Arise Ember",
        github: "https://github.com/AkshuDev/Pheonix-CPUs/tree/main/Arise/Ember",
        license: "CERN OHL V 2 - Strongly Reciprocal",
        productNumber: "PHX-C-001",
        status: "In Development",
        hardware: `
            <ul>
                <li>Architecture: 64-bit PVCpu-V-1.0</li>
                
                <li>Cores: 8</li>
                <li>Threads: 16</li>
                <li>Base Clock: 3.5 GHz</li>

                <li>L1 Size: 128KB + 32KB (Cpu Info)</li>
                <li>L2 Size: 512KB</li>
                <li>L3 Size: 32MB</li>
            </ul>
        `,
        summary: "Arise Ember is designed for high performance computing and multi-threaded workloads, providing excellent efficiency and speed for developers and researchers.",
        innovation: "The first Pheonix CPU to achieve 1 worst-case-scenario clock cycles for a TLB miss, thanks to its new innovative design of the PVCpu Version 1.0 ISA which includes the P-XPV and Cpu-Info structure.",
        architecture: "pvcpu"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get("cpu-key");

    console.log("CPU Key:", key);
    let data = null;
    if(cpuData[key]) {
        data = cpuData[key];
    } else {
        data = cpuData["unknown"]
    }
    cpuName.textContent = data.name;
    cpuGithub.href = data.github;
    cpuLicense.textContent = data.license;
    cpuProductNumber.textContent = data.productNumber;
    cpuStatus.textContent = data.status;
    cpuHardware.innerHTML = data.hardware;
    cpuSummary.textContent = data.summary;
    cpuInnovation.textContent = data.innovation;
    cpuArchitectureInfo.innerHTML = architectureInfo[data.architecture];
})