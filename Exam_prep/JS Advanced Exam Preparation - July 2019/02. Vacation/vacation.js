class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    get numberOfChildren() {
        let totalKidsCount = 0;
        Object.keys(this.kids).forEach(g => totalKidsCount += this.kids[g].length);
        return totalKidsCount;
    }

    registerChild(name, grade, budget) {
        if (budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`
        }

        if (!this.kids.hasOwnProperty(grade)) {
            this.kids[grade] = [];
        } else if (this.kids[grade].some(x => x === `${name}-${budget}`)) {
            return `${name} is already in the list for this ${this.destination} vacation.`;
        }

        this.kids[grade].push(`${name}-${budget}`);
        return this.kids[grade];
    }

    removeChild(name, grade) {
        if (!this.kids.hasOwnProperty(grade) || !this.kids[grade].some(x => x.includes(name))) {
            return `We couldn't find ${name} in ${grade} grade.`;
        }

        const currentKidData = this.kids[grade].filter(x => x.includes(name));
        const kidIndex = this.kids[grade].indexOf(currentKidData[0]);
        this.kids[grade].splice(kidIndex, 1);
        return this.kids[grade];
    }

    toString() {
        if (this.numberOfChildren === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }

        let output = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;
        const orderedGrades = Object.keys(this.kids).sort((a, b) => a - b);

        for (const grade of orderedGrades) {
            output += `Grade: ${grade}\n`;
            this.kids[grade].forEach((kd, i) => {
                output += `${i + 1}. ${kd}\n`;
            });
        }

        return output;
    }
}