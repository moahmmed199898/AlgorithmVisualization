import {observable} from "mobx";
class Store {
    @observable array:number[] = [];
    @observable code:string = "";
}

export default new Store();