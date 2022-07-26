class Warnings{
  constructor() {
    this.List = new Array
  }
}
class WetterWarning {
  constructor(headline, msgtype, severity, areas, event, expires, desc, instruction){
    this.headline = headline
    this.msgtype = msgtype
    this.severity = severity
    this.areas = areas
    this.event = event
    this.expires = expires
    this.desc = desc
    this.instruction = instruction
  }
}