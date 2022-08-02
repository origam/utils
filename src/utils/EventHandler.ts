export class EventHandler {

  callBacks: (() => void)[] = [];

  add(callBack: () => void){
    if(!this.callBacks.includes(callBack)){
      this.callBacks.push(callBack);
    }
  }

  remove(callBack: () => void){
    this.callBacks.remove(callBack);
  }

  call(){
    for (const callBack of this.callBacks) {
      callBack();
    }
  }
}