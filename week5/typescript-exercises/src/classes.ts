
abstract class Shape {
    private _color:string;
    private _area:number;
    private _perimiter:number;
    constructor(color:string, area: number, perimiter:number){
        this._color = color;
        this._area = area;
        this._perimiter = perimiter;
    }
    abstract get area():number;
    abstract get perimeter(): number;
    abstract get color(): string;
    setColor(newColor: string){
        this._color = newColor;
    }
    toString(){
        return this._color;
    }
  }


class Circle extends Shape {
    radius : number;
    constructor(color: string, radius: number, area: number, perimiter: number){
        super(color, area, perimiter);
        this.radius = radius;
        

    }
    getRadius(): number {
        return this.radius;
    }
    setRadius(newRadius: number){
        this.radius = newRadius;
    }
    

    

}
  
