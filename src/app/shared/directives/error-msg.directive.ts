import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;

  //Los setters solo se ejecutan si hay algun cambio en la propiedad asociada
  // @Input() color: string = 'red';
  @Input() set color( valor: string) {
      this._color = valor;
      this.setColor();
  }

  // @Input() mensaje: string = 'Este campo es necesario';
  @Input() set mensaje( valor: string){
      this._mensaje = valor;
      this.setMsg();
  }

  @Input() set valido( valor: boolean){
    if (valor) {
      this.htmlElement.nativeElement.classList.add('hidden')
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden')
    }
}

  constructor( private el: ElementRef<HTMLElement>) {
      // console.log('Constructor directive');
      // console.log(el);
      
      this.htmlElement = el;
      
   }


  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes)
    // if (changes['mensaje']) {
    //   const mensaje = changes['mensaje'].currentValue;
    //   this.htmlElement.nativeElement.innerHTML = mensaje;
    // }
    // if (changes['color']) {
    //   const mensaje = changes['color'].currentValue;
    //   this.htmlElement.nativeElement.style.color = this.color;
    // }


  }


  ngOnInit(): void {
    // console.log('NgOnInit directive')
    // console.log(this.color); // undefined
    // console.log(this.mensaje); // undefined

    this.setEstilo();
    this.setColor();
    this.setMsg();



  }
  
  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }
  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }
  setMsg(): void {
    this.htmlElement.nativeElement.innerHTML = this._mensaje;
  }

}
