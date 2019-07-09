class Computer {
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;
        this.taskManager = [];
        this.installedPrograms = [];
    }

    get totalRamUsage() {
        let usage = 0;
        this.taskManager.forEach(x => {
            usage += x.ramUsage;
        });

        return usage;
    }

    get totalCpuUsage() {
        let usage = 0;
        this.taskManager.forEach(x => {
            usage += x.cpuUsage;
        });

        return usage;
    }

    installAProgram(name, requiredSpace) {
        if (requiredSpace > this.hddMemory) {
            throw new Error('There is not enough space on the hard drive');
        }

        const newProgram = {
            name,
            requiredSpace
        }

        this.installedPrograms.push(newProgram);
        this.hddMemory -= requiredSpace;
        return newProgram;
    }

    uninstallAProgram(name) {
        const program = this.installedPrograms.find(p => p.name === name);

        if (!program) {
            throw new Error('Control panel is not responding');
        }

        const index = this.installedPrograms.indexOf(program);
        this.installedPrograms.splice(index, 1);
        this.hddMemory += program.requiredSpace;
        return this.installedPrograms;
    }

    openAProgram(name) {
        const program = this.installedPrograms.find(p => p.name === name);

        if (!program) {
            throw new Error(`The ${name} is not recognized`);
        }

        if (this.taskManager.some(p => p.name === name)) {
            throw new Error(`The ${name} is already open`);
        }

        const ramUsage = (program.requiredSpace / this.ramMemory) * 1.5;
        const cpuUsage = ((program.requiredSpace / this.cpuGHz) / 500) * 1.5;

        if ((this.totalRamUsage + ramUsage >= 100 && this.totalCpuUsage + cpuUsage >= 100) ||
            this.totalRamUsage + ramUsage >= 100) {
            throw new Error(`${name} caused out of memory exception`);
        }

        if (this.totalCpuUsage + cpuUsage >= 100) {
            throw new Error(`${name} caused out of cpu exception`)
        }

        const openProgram = {
            name,
            ramUsage,
            cpuUsage
        }

        this.taskManager.push(openProgram);
        return openProgram;
    }

    taskManagerView() {
        if (this.taskManager.length === 0) {
            return 'All running smooth so far';
        }

        let output = [];
        this.taskManager.forEach(p => {
          output.push( `Name - ${p.name} | Usage - CPU: ${p.cpuUsage.toFixed(0)}%, RAM: ${p.ramUsage.toFixed(0)}%`);
        })

        return output.join('\n');
    }
}

