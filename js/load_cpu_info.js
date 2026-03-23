const cpuName = document.getElementById('cpu-name');
const cpuGithub = document.getElementById('cpu-github');
const cpuLicense = document.getElementById('cpu-license');
const cpuProductNumber = document.getElementById('cpu-product-number');
const cpuHardware = document.getElementById('cpu-hardware');
const cpuSummary = document.getElementById('cpu-summary');
const cpuInnovation = document.getElementById('cpu-innovation');

const cpuData = {
    "unknown": {
        name: "Unknown",
        github: "#",
        license: "Unknown",
        productNumber: "Unknown",
        hardware: "Unknown",
        summary: "Unknown",
        innovation: "Unknown"
    },
    "arise-ember": {
        name: "Arise Ember",
        github: "https://github.com/AkshuDev/Pheonix-CPUs/tree/main/Arise/Ember",
        license: "CERN OHL V 2 - Strongly Reciprocal",
        productNumber: "PHX-C-001",
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
        innovation: "The first Pheonix CPU to achieve 1 worst-case-scenario clock cycles for a TLB miss, thanks to its new innovative design of the PVCpu Version 1.0 ISA which includes the P-XPV and Cpu-Info structure."
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
    cpuHardware.innerHTML = data.hardware;
    cpuSummary.textContent = data.summary;
    cpuInnovation.textContent = data.innovation;
})