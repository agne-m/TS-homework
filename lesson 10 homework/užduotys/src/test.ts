// ## Klasių schemos
// ### abstract Person 
// ##### savybės:
// * protected id: string;
// * protected name: string;
// * protected surname: string;
// ##### metodai:
// * public getPersonInfo = (): string
// * public abstract toString(): string;
export type PersonProps = {
    id: string,
    name: string,
    surname: string,
};

abstract class Person {
    protected id: string;

    protected name: string;

    protected surname: string;

    constructor({ id, name, surname }: PersonProps) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }

    public abstract toString(): string;

    public getPersonInfo = (): string => `${this.name} ${this.surname},${this.id}`;
}

abstract class Employee extends Person {
    public abstract calcPay(): number;
}

const formatLine = (text: string, indent: number = 0): string => `${('\t').repeat(indent) + text}\n`;

class Job {
    private static instanceCount = 0;
  
    private id: string;
  
    private finished: boolean = false;
  
    private payed: boolean = false;
  
    private dateFinished?: Date;
  
    constructor(
      private title: string,
      private pay: number,
    ) {
      Job.instanceCount += 1;
      this.id = `Job-${Job.instanceCount}`;
  
      this.finished = false;
      this.payed = false;
    }
  
    public completeJob = (): void => {
      this.finished = true;
      this.dateFinished = new Date();
    };
  
    public setJobPayed = (): void => {
      this.payed = true;
    };
  
    public getPay = (): number => this.pay;
  
    public isFinished = (): boolean => this.finished;
  
    public isPayed = (): boolean => this.payed;
  
    public toString = (): string => {
      const {
        id,
        title,
        finished,
        pay,
        dateFinished,
        payed,
      } = this;
  
      return formatLine(`id: ${id}`, 2)
        + formatLine(`title: ${title}`, 2)
        + formatLine(`pay: ${pay}`, 2)
        + (finished ? formatLine(`finished: ${finished ? 'Yes' : 'No'}`, 2) : '')
        + (payed ? formatLine(`payed: ${payed ? 'Yes' : 'No'}`, 2) : '')
        + (dateFinished ? formatLine(`date finished: ${dateFinished.toLocaleDateString('lt-LT')}`, 2) : '');
    };
  }

class BusinessLicensePerson extends Employee {
    private jobs: Job[];

    constructor({ jobs = [], ...personProps }: BusinessLicensePerson) {
        super(personProps);
        this.jobs = jobs;
    }

    public calcPay = (): number => {
        const unpayedFinishedJobs = this.jobs.filter((job) => job.isFinished() && !job.isPayed());
        const calculatedPay = unpayedFinishedJobs.reduce((sum, job) => sum + job.getPay(), 0);
        unpayedFinishedJobs.forEach((job) => job.setJobPayed());

        return calculatedPay;
    };

    public override toString(): string {
        const { jobs } = this;

        let result = this.getPersonInfo() + formatLine(`jobs:${jobs.length === 0 ? ' nėra darbų' : ''}`, 1);
        if (this.jobs.length > 0) {
            result += jobs.map((job) => `${job.toString()}`).join('\n');
        }

        return result;
    }
}
class WorkPerson extends Employee {
    private hourPay: number;
    private fullTimeEquivalent: number;
    
    public calcPay = (): number;
    public override toString(): string;
}