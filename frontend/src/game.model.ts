export type Answer = {label:string};

export class Question {
    private _label:string;
    private _answers:Answer[] = [];
    private rightAnswer:Answer | undefined = null;

    label(){
        return this._label;
    }

    answers(){
        {
            return this._answers;
        }
    }

    constructor(label:string) {
        this._label = label;
    }

    withAnswer(answer:Answer) {
        this._answers.push(answer);
        return this;
    }

    withRightAnswer(answer:Answer) {
        this.rightAnswer = answer;
        return this;
    }

    select(answer:Answer) {
        return this.rightAnswer === answer;
    }

}