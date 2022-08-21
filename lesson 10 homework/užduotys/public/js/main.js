class Person {
    constructor({ id, name, surname }) {
        this.getPersonInfo = () => `${this.name} ${this.surname},${this.id}`;
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
}
class Employee extends Person {
}
const formatLine = (text, indent = 0) => `${('\t').repeat(indent) + text}\n`;
class Job {
    constructor(title, pay) {
        this.title = title;
        this.pay = pay;
        this.finished = false;
        this.payed = false;
        this.completeJob = () => {
            this.finished = true;
            this.dateFinished = new Date();
        };
        this.setJobPayed = () => {
            this.payed = true;
        };
        this.getPay = () => this.pay;
        this.isFinished = () => this.finished;
        this.isPayed = () => this.payed;
        this.toString = () => {
            const { id, title, finished, pay, dateFinished, payed, } = this;
            return formatLine(`id: ${id}`, 2)
                + formatLine(`title: ${title}`, 2)
                + formatLine(`pay: ${pay}`, 2)
                + (finished ? formatLine(`finished: ${finished ? 'Yes' : 'No'}`, 2) : '')
                + (payed ? formatLine(`payed: ${payed ? 'Yes' : 'No'}`, 2) : '')
                + (dateFinished ? formatLine(`date finished: ${dateFinished.toLocaleDateString('lt-LT')}`, 2) : '');
        };
        Job.instanceCount += 1;
        this.id = `Job-${Job.instanceCount}`;
        this.finished = false;
        this.payed = false;
    }
}
Job.instanceCount = 0;
class BusinessLicensePerson extends Employee {
    constructor({ jobs = [], ...personProps }) {
        super(personProps);
        this.calcPay = () => {
            const unpayedFinishedJobs = this.jobs.filter((job) => job.isFinished() && !job.isPayed());
            const calculatedPay = unpayedFinishedJobs.reduce((sum, job) => sum + job.getPay(), 0);
            unpayedFinishedJobs.forEach((job) => job.setJobPayed());
            return calculatedPay;
        };
        this.jobs = jobs;
    }
    toString() {
        const { jobs } = this;
        let result = this.getPersonInfo() + formatLine(`jobs:${jobs.length === 0 ? ' nėra darbų' : ''}`, 1);
        if (this.jobs.length > 0) {
            result += jobs.map((job) => `${job.toString()}`).join('\n');
        }
        return result;
    }
}
class WorkPerson extends Employee {
    constructor({ hourPay, fullTimeEquivalent, ...personProps }) {
        super(personProps);
        this.calcPay = () => calcMonthWorkDays() * this.hourPay * this.fullTimeEquivalent * 8;
        this.hourPay = hourPay;
        this.fullTimeEquivalent = fullTimeEquivalent;
    }
    toString() {
        return `${this.getPersonInfo()
            + formatLine(`hour pay: ${this.hourPay}`, 1)
            + formatLine(`full time equivalent: ${this.fullTimeEquivalent}`, 1)}\n`;
    }
}
export {};
//# sourceMappingURL=main.js.map