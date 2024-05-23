export function deletePos(id:number,key:any,table =[]){
let pos :any;
    pos = table.findIndex((m: any) => m.id == id);
    table.splice(pos,1);
    localStorage.setItem(key, JSON.stringify(table));
}