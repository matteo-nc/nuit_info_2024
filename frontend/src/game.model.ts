export type Answer = {labelA:string, labelB:string, id:number};

export class QuestionModel {
    private _label:string;
    private _answers:Answer[] = [];
    private rightAnswer:Answer | undefined = undefined;
    private _closed:boolean = false;

    label(){
        return this._label;
    }

    closed(){return this._closed;}

    answers(){
        return this._answers;
    }

    constructor(label:string) {
        this._label = label;
    }

    withAnswer(answer:{labelA:string, labelB:string}) {
        this._answers.push({...answer, id: this._answers.length});
        return this;
    }

    withRightAnswer(answerInd:number) {
        this.rightAnswer = this._answers.find(e => e.id === answerInd);
        return this;
    }

    select(ind:number) {
        this._closed = true;
        return this.rightAnswer?.id === ind;
    }

}
