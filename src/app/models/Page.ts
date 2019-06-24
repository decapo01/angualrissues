

export class Page<T>{

  constructor(readonly item     : T, 
              readonly fistPage : string,
              readonly prevPage : string,
              readonly currPage : string,
              readonly nextPage : string,
              readonly lastPage : string,
              readonly headers  : any){}
}