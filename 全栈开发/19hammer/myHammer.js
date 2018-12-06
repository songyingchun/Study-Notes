class MyHammer{
  constructor(obj,options){
    this.eventQueue=[];
    this._start_time=0;
    obj.addEventListener('touchstart',this._start.bind(this),false);
    obj.addEventListener('touchmove',this._move.bind(this),false);
    obj.addEventListener('touchend',this._end.bind(this),false);
  }
  on(name,fn){
    this.eventQueue.push({name,fn});
    return this;
  }
  _start(){
    let _this=this;
    // tap
    // 记录一个时间
    this._start_time=Date.now();

    // press
    clearTimeout(this._timer);
    this._timer=setTimeout(()=>{
      // console.log('触发press');
      this._trigger_event('tap');
    }.bind(this),250);
  }
  _move(){

  }
  _trigger_event(name){
    _this.eventQueue.forEach(item=>{
      if(item.name==name){
        item.fn();
      }
    });
  }
  _end(){
    // 时间
    this._end_time=Date.now();
    if(Date.now()-this._start_time<=250){
      this._trigger_event('tap');
      clearTimeout(this._timer);
    }
  }
}
