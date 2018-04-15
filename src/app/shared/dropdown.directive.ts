import { Directive,HostListener,HostBinding } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{
    @HostBinding('class.open') addClass:boolean=false;
    @HostListener('click') ondropdownclick(eventData:Event){
        // this.renderer.setStyle(this.elementref.nativeElement,'backgroundColor','blue');
        this.addClass=!this.addClass
        }

}